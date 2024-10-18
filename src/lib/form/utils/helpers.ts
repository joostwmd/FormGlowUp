import {
	CHECKBOX_GRID_QUESTION_ITEM,
	RADIO_GRID_QUESTION_ITEM,
	SUBMIT_KEY_PREFIX
} from '$lib/form/constants';
import { formDataStore } from '../stores';
import type { TFormItem, TGridItem } from '../types';
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

// export function handleFormValueChange(value: string, submitId: string) {
// 	const entryId = SUBMIT_KEY_PREFIX + submitId;
// 	formDataStore.update((currentData) => {
// 		currentData[entryId] = value;
// 		return currentData;
// 	});
// }

export function handleFormValueChange(value: string | number | null, submitId: string) {
	const entryId = SUBMIT_KEY_PREFIX + submitId;
	formDataStore.update((currentData) => {
		currentData[submitId] = value;
		return currentData;
	});
}
