import {
	CHECKBOX_GRID_QUESTION_ITEM,
	CREATE_FORM_ERROR_MESSAGES,
	GRID_ITEM_TYPES,
	RADIO_GRID_QUESTION_ITEM,
	SUBMIT_KEY_PREFIX,
	TEXT_QUESTION_ITEM,
	USER_EMAIL_VALUE
} from '$lib/form/constants';
import { formDataStore } from '../stores';
import type { TFormItem, TGridItem, TTextItem } from '../types';
import type { TGoogleFormAPIResponse } from './google-api/types';
import { constructQuestionItemsDataFromHTML } from './html-parsing/utils';
import type { TConstructedHTMLData } from './html-parsing/types';

export function mergeQuestionItemsData(
	htmlQuestionItemsData: TConstructedHTMLData[],
	apiFormItemsData: TFormItem[]
): TFormItem[] {
	const combinedData: TFormItem[] = [];

	let currentItemIndex = 0;
	for (let item of apiFormItemsData) {
		if (item.type === RADIO_GRID_QUESTION_ITEM || item.type === CHECKBOX_GRID_QUESTION_ITEM) {
			const apiItem = item as TGridItem;
			for (let i = 0; i < apiItem.rows.length; i++) {
				apiItem.rows[i]['submitId'] = htmlQuestionItemsData[currentItemIndex].submitId;
				currentItemIndex++;
				// no need for checking html validation, not possible on grid elements
			}

			combinedData.push(apiItem);
		} else {
			const apiItem = item as TFormItem;
			const htmlItem = htmlQuestionItemsData[currentItemIndex];

			apiItem.submitId = htmlItem.submitId;

			const validationData = {
				...apiItem.validation,
				...htmlItem.validation
			};

			combinedData.push({ ...apiItem, validation: validationData });
			currentItemIndex++;
		}
	}

	return combinedData;
}

export function extractFormId(url: string): string | null {
	const editUrlPattern = /\/d\/([a-zA-Z0-9_-]+)\/edit/;
	const match = url.match(editUrlPattern);
	return match ? match[1] : null;
}

export function handleFormValueChange(value: string | number | null, submitId: string) {
	formDataStore.update((currentData) => {
		currentData[submitId] = value;
		return currentData;
	});
}

export function validateGoogleFormEditUrl(url: string): { valid: boolean; message: string } {
	if (url.includes('edit')) {
		return { valid: true, message: '' };
	} else if (url.includes('viewform')) {
		return { valid: false, message: CREATE_FORM_ERROR_MESSAGES.SHARE_LINK_PASTED };
	} else {
		return { valid: false, message: CREATE_FORM_ERROR_MESSAGES.INVALID_LINK };
	}
}

export function checkIfFormIsSupported(
	htmlData: string,
	apiData: TGoogleFormAPIResponse
): {
	isSupported: boolean;
	message?: string;
} {
	// Check if form has Page Break Item
	const pageBreakItems = apiData.items.find((item) => item.pageBreakItem);
	const imageItems = apiData.items.find((item) => item.imageItem);
	const videoItems = apiData.items.find((item) => item.videoItem);
	const textItems = apiData.items.find((item) => item.textItem);

	const questionItems = apiData.items.filter((item) => item.questionItem);
	for (let item of questionItems) {
		const itemChoices = item.questionItem?.question.choiceQuestion?.options;
		if (itemChoices) {
			for (let choice of itemChoices) {
				if (choice.image) {
					return {
						isSupported: false,
						message: CREATE_FORM_ERROR_MESSAGES.FORM_USES_IMAGE_IN_CHOICE_QUESTION
					};
				}
			}
		}

		const question = item.questionItem?.question;
		if (question) {
			const keys = Object.keys(question);
			if (keys.length === 1 && keys.includes('questionId')) {
				return {
					isSupported: false,
					message: CREATE_FORM_ERROR_MESSAGES.FORM_USES_RATING_QUESTION
				};
			}
		}
	}

	const fileUploadQuestions = apiData.items.find(
		(item) => item.questionItem?.question.fileUploadQuestion
	);

	if (fileUploadQuestions) {
		return { isSupported: false, message: CREATE_FORM_ERROR_MESSAGES.FORM_USES_FILE_UPLOAD };
	} else if (pageBreakItems) {
		return { isSupported: false, message: CREATE_FORM_ERROR_MESSAGES.FORM_USES_PAGEBREAKS };
	} else if (imageItems) {
		return { isSupported: false, message: CREATE_FORM_ERROR_MESSAGES.FORM_USES_IMAGES };
	} else if (videoItems) {
		return { isSupported: false, message: CREATE_FORM_ERROR_MESSAGES.FORM_USES_VIDEOS };
	} else if (textItems) {
		return { isSupported: false, message: CREATE_FORM_ERROR_MESSAGES.FORM_USES_TEXT };
	} else if (htmlData.includes('data-user-email-address')) {
		return { isSupported: false, message: CREATE_FORM_ERROR_MESSAGES.FORM_IS_PRIVATE };
	}

	// else if (htmlData.includes('data-shuffle-seed')) {
	// 	return { isSupported: false, message: CREATE_FORM_ERROR_MESSAGES.FORM_SHUFFLES_QUESTIONS };
	// }

	return { isSupported: true };
}

export function checkIfFormShufflesQuestions(htmlData: {
	firstFetch: string;
	secondFetch: string;
}): { success: boolean; message?: string } {
	const firstFetch = constructQuestionItemsDataFromHTML(htmlData.firstFetch);
	const secondFetch = constructQuestionItemsDataFromHTML(htmlData.secondFetch);

	if (JSON.stringify(firstFetch) === JSON.stringify(secondFetch)) {
		return { success: true };
	} else {
		return { success: false, message: CREATE_FORM_ERROR_MESSAGES.FORM_SHUFFLES_QUESTIONS };
	}
}

export function checkForHMTLParsingError(
	apiData: TGoogleFormAPIResponse,
	constructedItems: TFormItem[]
) {
	const apiQuesitonItems = apiData.items.filter(
		(item) => item.questionItem || item.questionGroupItem
	);

	const validSubmitIds = [];

	for (let item of constructedItems) {
		if (GRID_ITEM_TYPES.includes(item.type)) {
			const typedItem = item as TGridItem;
			for (let row of typedItem.rows) {
				if (typeof row.submitId === 'string' && row.submitId.length >= 8) {
					validSubmitIds.push(row.submitId);
				}
			}
		} else {
			if (typeof item.submitId === 'string' && item.submitId.length >= 8) {
				validSubmitIds.push(item.submitId);
			}
		}
	}

	let apiQuestionItemsAmount = 0;
	for (let item of apiQuesitonItems) {
		if (item.questionGroupItem) {
			apiQuestionItemsAmount += item.questionGroupItem.questions.length;
		} else {
			apiQuestionItemsAmount++;
		}
	}

	let submitIdsAmount = validSubmitIds.length;
	if (validSubmitIds.includes(USER_EMAIL_VALUE)) {
		submitIdsAmount--;
	}

	if (submitIdsAmount !== apiQuestionItemsAmount) {
		return { isParsed: false, message: CREATE_FORM_ERROR_MESSAGES.HTML_PARSING_ERROR };
	} else {
		return { isParsed: true };
	}
}

export function checkForUserEmailCollection(htmlData: string): boolean {
	return htmlData.includes('<input type="email"');
}

export function constructUserEmailItem(): TTextItem {
	return {
		type: TEXT_QUESTION_ITEM,
		submitId: USER_EMAIL_VALUE,
		displayData: {
			title: 'Your Email Adress',
			description: 'Please enter your email adress'
		},
		validation: {
			isRequired: true,
			category: 2,
			type: 102
		},
		attributes: {
			isParagraph: false
		}
	};
}

export function constructGoogleFormSubmitUrl(responderUrl: string): string {
	const url = new URL(responderUrl);
	url.pathname = url.pathname.replace('/viewform', '/formResponse');
	url.pathname = url.pathname.replace('/d/', '/u/0/d/');
	return url.toString();
}

export function constructSubmitData(formData: Record<string, any>) {
	const submitData = new URLSearchParams();
	const entries = Object.entries(formData);
	const nonNullEntries = entries.filter(([key, value]) => value !== null);

	for (let [key, value] of nonNullEntries) {
		const prefixedKey = key === USER_EMAIL_VALUE ? key : `${SUBMIT_KEY_PREFIX}${key}`;
		submitData.append(prefixedKey, value as string);
	}

	return submitData.toString();
}
