import {
	DAY_SUFFIX,
	HOUR_SUFFIX,
	MINUTE_SUFFIX,
	MONTH_SUFFIX,
	YEAR_SUFFIX
} from '$lib/form/constants';
import type { TDateItem } from '$lib/form/types';
import { isValidTime } from './time';

export function validateDate(
	item: TDateItem,
	formData: Record<string, string>
): { valid: boolean; message: string } {
	console.log('form data', formData);
	const month = formData[`${item.submitId}${MONTH_SUFFIX}`];
	const day = formData[`${item.submitId}${DAY_SUFFIX}`];
	const year = item.attributes.yearIncluded ? formData[`${item.submitId}${YEAR_SUFFIX}`] : null;
	const hour = item.attributes.timeIncluded ? formData[`${item.submitId}${HOUR_SUFFIX}`] : null;
	const minute = item.attributes.timeIncluded ? formData[`${item.submitId}${MINUTE_SUFFIX}`] : null;

	if (!month || !day || !year || !hour || !minute) {
		return { valid: false, message: 'This field is required' };
	}

	if (!isValidDate(day, month, year)) {
		return { valid: false, message: 'Invalid date' };
	}

	if (item.attributes.timeIncluded && !isValidTime(hour, minute)) {
		return { valid: false, message: 'Invalid time' };
	}

	return { valid: true, message: '' };
}

function isValidDate(day: string, month: string, year: string): boolean {
	const date = new Date(`${year}-${month}-${day}`);
	return (
		date.getFullYear() === parseInt(year) &&
		date.getMonth() + 1 === parseInt(month) &&
		date.getDate() === parseInt(day)
	);
}
