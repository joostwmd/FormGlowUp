import {
	RADIO_QUESTION_ITEM,
	CHECKBOX_QUESTION_ITEM,
	DROPDOWN_QUESTION_ITEM,
	OTHER_OPTION_VALUE,
	SCALE_QUESTION_ITEM,
	CHECKBOX_GRID_QUESTION_ITEM,
	RADIO_GRID_QUESTION_ITEM,
	DATE_QUESTION_ITEM,
	TIME_QUESTION_ITEM,
	TEXT_QUESTION_ITEM,
	PARAGRAPH_QUESTION_ITEM
} from '../constants';
import type {
	FormItem,
	TGoogleFormAPIResponse,
	ChoicesItem,
	ScaleItem,
	GridItem,
	DateItem,
	TimeItem,
	TextItem,
	TGoogleFormItemAPIData,
	ItemDisplayData
} from '../types';
import { replaceUndefinedWithNull, determineItemType } from './helpers';

export function constructFormItemDataFromAPI(
	itemData: TGoogleFormItemAPIData,
	type: string
): FormItem {
	const questionItem = itemData.questionItem?.question;
	const choiceQuestion = questionItem?.choiceQuestion;
	const scaleQuestion = questionItem?.scaleQuestion;
	const dateQuestion = questionItem?.dateQuestion;
	const timeQuestion = questionItem?.timeQuestion;

	const commonDisplayData: ItemDisplayData = {};

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
			alignmnet: itemData.questionItem.image.properties.alignment
		};
	}

	let result: FormItem;

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
		} as ChoicesItem;
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
		} as ScaleItem;
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
		} as GridItem;
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
		} as DateItem;
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
		} as TimeItem;
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
		} as TextItem;
	} else {
		throw new Error(`Unsupported item type: ${type}`);
	}

	return replaceUndefinedWithNull(result);
}

export function constructFormQuestionItemsDataFromAPI(apiData: TGoogleFormAPIResponse): FormItem[] {
	const apiFormItemsData: FormItem[] = [];
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
