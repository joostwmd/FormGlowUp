import {
	ADDITIONAL_TITLE_ITEM,
	IMAGE_ITEM,
	PAGEBREAK_ITEM,
	PARAGRAPH_QUESTION_ITEM,
	TEXT_QUESTION_ITEM,
	RADIO_QUESTION_ITEM,
	CHECKBOX_QUESTION_ITEM,
	DROPDOWN_QUESTION_ITEM,
	SCALE_QUESTION_ITEM,
	DATE_QUESTION_ITEM,
	TIME_QUESTION_ITEM,
	RADIO_GRID_QUESTION_ITEM,
	CHECKBOX_GRID_QUESTION_ITEM
} from '$lib/form/constants';
import { GOOGLE_API_CHECKBOX, GOOGLE_API_DROP_DOWN, GOOGLE_API_RADIO } from './constants';

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
				case GOOGLE_API_RADIO:
					return RADIO_QUESTION_ITEM;
				case GOOGLE_API_CHECKBOX:
					return CHECKBOX_QUESTION_ITEM;
				case GOOGLE_API_DROP_DOWN:
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
			case GOOGLE_API_RADIO:
				return RADIO_GRID_QUESTION_ITEM;
			case GOOGLE_API_CHECKBOX:
				return CHECKBOX_GRID_QUESTION_ITEM;
		}
	}

	return '';
}
