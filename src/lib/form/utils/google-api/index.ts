import {
	CHECKBOX_GRID_QUESTION_ITEM,
	CHECKBOX_QUESTION_ITEM,
	DATE_QUESTION_ITEM,
	DROPDOWN_QUESTION_ITEM,
	OTHER_OPTION_VALUE,
	PARAGRAPH_QUESTION_ITEM,
	RADIO_GRID_QUESTION_ITEM,
	RADIO_QUESTION_ITEM,
	SCALE_QUESTION_ITEM,
	TEXT_QUESTION_ITEM,
	TIME_QUESTION_ITEM
} from '$lib/form/constants';
import type {
	TChoicesItem,
	TDateItem,
	TFormItem,
	TGridItem,
	TItemDisplayData,
	TScaleItem,
	TTextItem,
	TTimeItem
} from '$lib/form/types';

import { determineItemType } from './helpers';
import type { TGoogleFormAPIResponse, TGoogleFormItemAPIData } from './types';

export function constructFormItemDataFromAPI(
	itemData: TGoogleFormItemAPIData,
	type: string
): TFormItem {
	const questionItem = itemData.questionItem?.question;
	const choiceQuestion = questionItem?.choiceQuestion;
	const scaleQuestion = questionItem?.scaleQuestion;
	const dateQuestion = questionItem?.dateQuestion;
	const timeQuestion = questionItem?.timeQuestion;

	const commonDisplayData: TItemDisplayData = {};

	if (itemData.title) {
		commonDisplayData.title = itemData.title;
	}

	if (itemData.description) {
		commonDisplayData.description = itemData.description;
	}

	if (itemData.questionItem?.image) {
		commonDisplayData.image = {
			src: itemData.questionItem.image.contentUri,
			width: itemData.questionItem.image.properties.width,
			alignment: itemData.questionItem.image.properties.alignment
		};
	}

	let result: TFormItem;

	if (
		type === RADIO_QUESTION_ITEM ||
		type === CHECKBOX_QUESTION_ITEM ||
		type === DROPDOWN_QUESTION_ITEM
	) {
		result = {
			type,
			options:
				choiceQuestion?.options.map((option: any) =>
					option.isOther ? OTHER_OPTION_VALUE : option.value
				) || [],
			validation: {
				isRequired: questionItem?.required ?? false
			},
			displayData: commonDisplayData
		} as TChoicesItem;
	} else if (type === SCALE_QUESTION_ITEM) {
		result = {
			type,
			validation: {
				isRequired: questionItem?.required ?? false
			},
			attributes: {
				min: scaleQuestion?.low ?? 0,
				minLabel: scaleQuestion?.lowLabel ?? '',
				max: scaleQuestion?.high ?? 0,
				maxLabel: scaleQuestion?.highLabel ?? ''
			},
			displayData: commonDisplayData
		} as TScaleItem;
	} else if (type === CHECKBOX_GRID_QUESTION_ITEM || type === RADIO_GRID_QUESTION_ITEM) {
		const rows =
			itemData.questionGroupItem?.questions.map((question: any) => ({
				title: question.rowQuestion.title as string
			})) || [];

		result = {
			type,
			columns:
				itemData.questionGroupItem?.grid?.columns?.options.map((option: any) => option.value) || [],
			rows,
			validation: {
				isRequired:
					itemData.questionGroupItem?.questions.some((question: any) => question.required) ?? false
			},
			displayData: commonDisplayData
		} as TGridItem;
	} else if (type === DATE_QUESTION_ITEM) {
		result = {
			type,
			validation: {
				isRequired: questionItem?.required ?? false
			},
			attributes: {
				yearIncluded: dateQuestion?.includeYear ?? false,
				timeIncluded: dateQuestion?.includeTime ?? false
			},
			displayData: commonDisplayData
		} as TDateItem;
	} else if (type === TIME_QUESTION_ITEM) {
		result = {
			type,
			validation: {
				isRequired: questionItem?.required ?? false
			},
			attributes: {
				isDuration: timeQuestion?.duration ?? false
			},
			displayData: commonDisplayData
		} as TTimeItem;
	} else if (type === TEXT_QUESTION_ITEM || type === PARAGRAPH_QUESTION_ITEM) {
		result = {
			type,
			validation: {
				isRequired: questionItem?.required ?? false
			},
			attributes: {
				isParagraph: questionItem?.textQuestion?.paragraph ?? false
			},
			displayData: commonDisplayData
		} as TTextItem;
	} else {
		throw new Error(`Unsupported item type: ${type}`);
	}

	return result;
}

export function constructFormQuestionItemsDataFromAPI(
	apiData: TGoogleFormAPIResponse
): TFormItem[] {
	const apiFormItemsData: TFormItem[] = [];
	for (let item of apiData.items) {
		const type = determineItemType(item);
		const formQuestionItemData = constructFormItemDataFromAPI(item, type);
		apiFormItemsData.push(formQuestionItemData);
	}
	return apiFormItemsData;
}

export async function constructFormInfoDataFromAPI(apiData: any) {
	const formInfo = {
		formId: apiData.formId,
		responderUri: apiData.responderUri,
		title: apiData.info.title,
		description: apiData.info.description,
		documentTitle: apiData.info.documentTitle
	};

	return formInfo;
}
