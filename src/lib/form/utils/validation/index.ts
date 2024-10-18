import {
	DATE_QUESTION_ITEM,
	TIME_QUESTION_ITEM,
	TEXT_QUESTION_ITEM,
	PARAGRAPH_QUESTION_ITEM
} from '$lib/form/constants';
import type { TFormDataStore } from '$lib/form/stores';
import type { TDateItem, TTimeItem, TTextItem, TFormItem } from '$lib/form/types';
import { validateCustomParameters } from './custom';
import { validateDate } from './date';
import { validateTime } from './time';

export function validateFormItemData(
	item: TFormItem,
	formData: TFormDataStore
): { valid: boolean; message: string } {
	const value = formData[item.submitId] as string;

	if (item.validation.isRequired && (value === '' || value === undefined)) {
		return { valid: false, message: 'This field is required' };
	}

	if (item.type === DATE_QUESTION_ITEM) {
		return validateDate(item as TDateItem, formData);
	} else if (item.type === TIME_QUESTION_ITEM) {
		return validateTime(item as TTimeItem, formData);
	} else if (
		TEXT_QUESTION_ITEM.includes(item.type) ||
		PARAGRAPH_QUESTION_ITEM.includes(item.type)
	) {
		console.log('item as TTextItem', item as TTextItem);
		return validateCustomParameters(item as TTextItem, value);
	}

	return { valid: true, message: '' };
}
