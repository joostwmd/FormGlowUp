import { CREATE_FORM_ERROR_MESSAGES, GRID_ITEM_TYPES, USER_EMAIL_VALUE } from '$lib/form/constants';
import type { TFormItem, TGridItem } from '$lib/form/types';
import type { TGoogleFormAPIResponse } from '../google-api/types';

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

	return { isSupported: true };
}

export function checkIfFormShufflesQuestions(htmlData: {
	firstFetch: string;
	secondFetch: string;
}): { success: boolean; message?: string } {
	if (JSON.stringify(htmlData.firstFetch) !== JSON.stringify(htmlData.secondFetch)) {
		return { success: false, message: CREATE_FORM_ERROR_MESSAGES.FORM_SHUFFLES_QUESTIONS };
	} else {
		return { success: true };
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
