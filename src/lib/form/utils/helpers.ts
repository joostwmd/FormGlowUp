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

import type { TConstructedHTMLData } from './html-parsing/types';

// import that fucks my project
//import { constructQuestionItemsDataFromHTML } from './html-parsing';

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
