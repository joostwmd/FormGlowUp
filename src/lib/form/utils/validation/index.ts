import {
	DATE_QUESTION_ITEM,
	TIME_QUESTION_ITEM,
	TEXT_QUESTION_ITEM,
	PARAGRAPH_QUESTION_ITEM,
	GRID_ITEM_TYPES
} from '$lib/form/constants';
import type { TFormDataStore } from '$lib/form/stores';
import type { TDateItem, TTimeItem, TTextItem, TFormItem, TGridItem } from '$lib/form/types';
import { validateCustomParameters } from './custom';
import { validateDate } from './date';
import { validateTime } from './time';

export function validateFormItemData(
	item: TFormItem,
	formData: TFormDataStore
): { valid: boolean; message: string } {
	// Validate grid item types
	if (GRID_ITEM_TYPES.includes(item.type) && item.validation.isRequired) {
		const gridItem = item as TGridItem;
		const submitIds = gridItem.rows.map((row) => row.submitId);
		const values = submitIds.map((id) => formData[id] as string);
		const hasEmptyValues = values.filter((value) => value === '' || value === undefined).length > 0;
		if (hasEmptyValues) {
			return { valid: false, message: 'Every row is required' };
		} else {
			return { valid: true, message: '' };
		}
	} else {
		// Validate required fields
		const value = formData[item.submitId] as string;
		if (item.validation.isRequired && (value === '' || value === undefined)) {
			return { valid: false, message: 'This field is required' };
		}

		// Validate date question item
		if (item.type === DATE_QUESTION_ITEM) {
			return validateDate(item as TDateItem, formData);
		}

		// Validate time question item
		if (item.type === TIME_QUESTION_ITEM) {
			return validateTime(item as TTimeItem, formData);
		}

		// Validate text and paragraph question items
		if (TEXT_QUESTION_ITEM.includes(item.type) || PARAGRAPH_QUESTION_ITEM.includes(item.type)) {
			return validateCustomParameters(item as TTextItem, value);
		}

		return { valid: true, message: '' };
	}
}
