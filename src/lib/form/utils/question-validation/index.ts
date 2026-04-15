import {
	DATE_QUESTION_ITEM,
	TIME_QUESTION_ITEM,
	TEXT_QUESTION_ITEM,
	PARAGRAPH_QUESTION_ITEM,
	GRID_ITEM_TYPES,
	MONTH_SUFFIX,
	DAY_SUFFIX,
	YEAR_SUFFIX,
	HOUR_SUFFIX,
	MINUTE_SUFFIX,
	SECOND_SUFFIX
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
	} else if (item.type === DATE_QUESTION_ITEM || item.type === TIME_QUESTION_ITEM) {
		// Validate required fields
		const value = formData[item.submitId] as string;

		if (item.type === DATE_QUESTION_ITEM) {
			const month = formData[`${item.submitId}${MONTH_SUFFIX}`] as string;
			const day = formData[`${item.submitId}${DAY_SUFFIX}`] as string;
			//@ts-ignore
			const year = item.attributes.yearIncluded!
				? formData[`${item.submitId}${YEAR_SUFFIX}`]
				: null;

			if (item.validation.isRequired) {
				if (!month || !day) {
					return { valid: false, message: 'This field is required' };
				}

				//@ts-ignore
				if (item.attributes.yearIncluded && !year) {
					return { valid: false, message: 'This field is required' };
				}
			}

			return validateDate(item as TDateItem, formData);
		} else if (item.type === TIME_QUESTION_ITEM) {
			const hour = formData[`${item.submitId}${HOUR_SUFFIX}`];
			const minute = formData[`${item.submitId}${MINUTE_SUFFIX}`];
			//@ts-ignore
			const second = item.attributes.isDuration
				? formData[`${item.submitId}${SECOND_SUFFIX}`]
				: '0'; // Default second if not included
			if (item.validation.isRequired) {
				if (!hour || !minute) {
					return { valid: false, message: 'This field is required' };
				}

				//@ts-ignore
				if (item.attributes.isDuration && !second) {
					return { valid: false, message: 'This field is required' };
				}
			}

			return validateTime(item as TTimeItem, formData);
		}
	} else {
		// Validate text and paragraph question items
		const value = formData[item.submitId] as string;

		if (item.validation.isRequired && (value === '' || value === undefined)) {
			console.log('required field validation', item.type);
			return { valid: false, message: 'This field is required' };
		}

		if (TEXT_QUESTION_ITEM.includes(item.type) || PARAGRAPH_QUESTION_ITEM.includes(item.type)) {
			return validateCustomParameters(item as TTextItem, value);
		}
	}

	return { valid: true, message: '' };
}
