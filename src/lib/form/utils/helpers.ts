import {
	ADDITIONAL_TITLE_ITEM,
	CHECKBOX_GRID_QUESTION_ITEM,
	CHECKBOX_QUESTION_ITEM,
	DATE_QUESTION_ITEM,
	DROPDOWN_QUESTION_ITEM,
	IMAGE_ITEM,
	PAGEBREAK_ITEM,
	PARAGRAPH_QUESTION_ITEM,
	QUESTION_ITEM_TYPES,
	RADIO_GRID_QUESTION_ITEM,
	RADIO_QUESTION_ITEM,
	SCALE_QUESTION_ITEM,
	TEXT_QUESTION_ITEM,
	TIME_QUESTION_ITEM
} from '$lib/form/constants';
import type { FinalFormItem, FormItem, GridItem, TConstructedHTMLData } from '../types';

export function determineItemType(item: any) {
	if (item.textItem) return ADDITIONAL_TITLE_ITEM;
	if (item.imageItem) return IMAGE_ITEM;
	if (item.pageBreakItem) return PAGEBREAK_ITEM;

	const questionItem = item.questionItem?.question;
	if (questionItem) {
		if (questionItem.textQuestion)
			return questionItem.textQuestion.paragraph ? PARAGRAPH_QUESTION_ITEM : TEXT_QUESTION_ITEM;
		if (questionItem.choiceQuestion) {
			switch (questionItem.choiceQuestion.type) {
				case 'RADIO':
					return RADIO_QUESTION_ITEM;
				case 'CHECKBOX':
					return CHECKBOX_QUESTION_ITEM;
				case 'DROP_DOWN':
					return DROPDOWN_QUESTION_ITEM;
			}
		}
		if (questionItem.scaleQuestion) return SCALE_QUESTION_ITEM;
		if (questionItem.dateQuestion) return DATE_QUESTION_ITEM;
		if (questionItem.timeQuestion) return TIME_QUESTION_ITEM;
	}

	const questionGroupItem = item.questionGroupItem?.grid.columns.type;
	if (questionGroupItem) {
		switch (questionGroupItem) {
			case 'RADIO':
				return RADIO_GRID_QUESTION_ITEM;
			case 'CHECKBOX':
				return CHECKBOX_GRID_QUESTION_ITEM;
		}
	}

	return '';
}

export function replaceUndefinedWithNull(obj: any): any {
	if (Array.isArray(obj)) {
		return obj.map(replaceUndefinedWithNull);
	} else if (obj !== null && typeof obj === 'object') {
		return Object.fromEntries(
			Object.entries(obj).map(([key, value]) => [key, replaceUndefinedWithNull(value)])
		);
	} else {
		return obj === undefined ? null : obj;
	}
}

type TCompleteValidation = {
	isRequired: boolean;
	category?: string;
	type?: string;
	value?: string[];
	message?: string;
};

export function mergeQuestionItemsData(
	htmlQuestionItemsData: TConstructedHTMLData[],
	apiFormItemsData: FormItem[]
): FinalFormItem[] {
	const combinedData: FinalFormItem[] = [];

	let currentItemIndex = 0;
	for (let item of apiFormItemsData) {
		if (item.type === RADIO_GRID_QUESTION_ITEM || item.type === CHECKBOX_GRID_QUESTION_ITEM) {
			const apiItem = item as GridItem;
			for (let i = 0; i < apiItem.rows.length; i++) {
				apiItem.rows[i]['submitId'] = htmlQuestionItemsData[currentItemIndex].submitId;
				currentItemIndex++;
				// no need for checking html validation, not possible on grid elements
			}

			const combinedItem = { ...apiItem } as FinalFormItem;

			combinedData.push(combinedItem);
		} else {
			const apiItem = item as FinalFormItem;
			const htmlItem = htmlQuestionItemsData[currentItemIndex];

			apiItem.submitId = htmlItem.submitId;

			const validationData: TCompleteValidation = {
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
