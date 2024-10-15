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
import { replaceUndefinedWithNull, determineItemType } from './helpers';

export function constructQuestionItemDataFromAPI(apiData: any, type: string) {
	const choiceQuestion = apiData.questionItem?.question?.choiceQuestion;
	const scaleQuestion = apiData.questionItem?.question?.scaleQuestion;
	const dateQuestion = apiData.questionItem?.question?.dateQuestion;
	const timeQuestion = apiData.questionItem?.question?.timeQuestion;

	let result;

	switch (type) {
		case RADIO_QUESTION_ITEM:
		case CHECKBOX_QUESTION_ITEM:
		case DROPDOWN_QUESTION_ITEM:
			result = {
				type,
				isRequired: apiData.questionItem?.question?.required ?? null,
				description: apiData.description,
				shuffleOptions: choiceQuestion?.shuffle,
				options: choiceQuestion?.options.map((option: any) =>
					option.isOther ? OTHER_OPTION_VALUE : option.value
				)
			};
			break;
		case SCALE_QUESTION_ITEM:
			result = {
				type,
				isRequired: apiData.questionItem?.question?.required ?? null,
				description: apiData.description,
				minLabel: scaleQuestion?.lowLabel,
				maxLabel: scaleQuestion?.highLabel,
				minValue: scaleQuestion?.low,
				maxValue: scaleQuestion?.high
			};
			break;
		case CHECKBOX_GRID_QUESTION_ITEM:
		case RADIO_GRID_QUESTION_ITEM:
			result = {
				type,
				description: apiData.description,
				columns: apiData.questionGroupItem?.grid?.columns?.options.map(
					(option: any) => option.value
				),
				rows: apiData.questionGroupItem?.questions.map((question: any) => ({
					isRequired: question.required ?? null,
					title: question.rowQuestion.title
				}))
			};
			break;
		case DATE_QUESTION_ITEM:
			result = {
				type,
				isRequired: dateQuestion?.required ?? null,
				description: apiData.description,
				yearIncluded: dateQuestion?.includeYear,
				timeIncluded: dateQuestion?.includeTime
			};
			break;
		case TIME_QUESTION_ITEM:
			result = {
				type,
				isRequired: timeQuestion?.required ?? null,
				description: apiData.description,
				isDuration: timeQuestion?.duration
			};
			break;
		case TEXT_QUESTION_ITEM:
		case PARAGRAPH_QUESTION_ITEM:
			result = {
				type,
				isRequired: apiData.questionItem?.question?.required ?? null,
				description: apiData.description,
				paragraph: apiData.questionItem?.question?.textQuestion?.paragraph
			};
			break;

		//result = { type: 'UNSUPPORTED_ITEM' };
	}

	return replaceUndefinedWithNull(result);
}

export function constructFormQuestionItemsDataFromAPI(apiData: any) {
	const apiFormItemsData = [];
	for (let item of apiData.items) {
		const type = determineItemType(item);
		const formQuestionItemData = constructQuestionItemDataFromAPI(item, type);
		apiFormItemsData.push({ ...formQuestionItemData });
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
