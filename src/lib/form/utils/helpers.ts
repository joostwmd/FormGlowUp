import {
	CHECKBOX_GRID_QUESTION_ITEM,
	CREATE_FORM_ERROR_MESSAGES,
	GRID_ITEM_TYPES,
	RADIO_GRID_QUESTION_ITEM,
	SUBMIT_KEY_PREFIX
} from '$lib/form/constants';
import { formDataStore } from '../stores';
import type { TFormInfo, TFormItem, TGridItem } from '../types';
import { GOOGLE_API_PAGE_BREAK_ITEM } from './google-api/constants';
import type { TGoogleFormAPIResponse } from './google-api/types';
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
	const entryId = SUBMIT_KEY_PREFIX + submitId;
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
	apiData: TGoogleFormAPIResponse,
	constructedFormData: { info: TFormInfo; items: TFormItem[] }
): {
	isSupported: boolean;
	message?: string;
} {
	// Check if form has Page Break Item
	const pageBreakItem = apiData.items.find((item) => item.pageBreakItem);
	if (pageBreakItem) {
		return { isSupported: false, message: CREATE_FORM_ERROR_MESSAGES.FORM_USES_PAGEBREAKS };
	} else if (htmlData.includes('data-user-email-address')) {
		return { isSupported: false, message: CREATE_FORM_ERROR_MESSAGES.FORM_IS_PRIVATE };
	} else if (checkForHMTLParsingError(apiData, constructedFormData.items)) {
		return { isSupported: false, message: CREATE_FORM_ERROR_MESSAGES.HTML_PARSING_ERROR };
	}

	return { isSupported: true };
}

function checkForHMTLParsingError(
	apiData: TGoogleFormAPIResponse,
	constructedItems: TFormItem[]
): boolean {
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

	//should return true if there are missing submitIds
	return validSubmitIds.length !== apiQuestionItemsAmount;
}

export function checkForUserEmailCollection(htmlData: string): boolean {
	return htmlData.includes('<input type="email"');
}
