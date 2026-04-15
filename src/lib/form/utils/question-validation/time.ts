import { HOUR_SUFFIX, MINUTE_SUFFIX, SECOND_SUFFIX } from '$lib/form/constants';
import type { TFormDataStore } from '$lib/form/stores';
import type { TTimeItem } from '$lib/form/types';

export function validateTime(
	item: TTimeItem,
	formData: TFormDataStore
): { valid: boolean; message: string } {
	const hour = formData[`${item.submitId}${HOUR_SUFFIX}`];
	const minute = formData[`${item.submitId}${MINUTE_SUFFIX}`];
	const second = item.attributes.isDuration ? formData[`${item.submitId}${SECOND_SUFFIX}`] : '0'; // Default second if not included

	if (!hour || !minute) {
		return { valid: false, message: 'This field is required' };
	}

	if (!isValidTime(hour as string, minute as string, second as string)) {
		return { valid: false, message: 'Invalid time' };
	}

	if (item.attributes.isDuration && !second) {
		return { valid: false, message: 'This field is required' };
	}

	return { valid: true, message: '' };
}

export function isValidTime(hour: string, minute: string, second?: string): boolean {
	const h = parseInt(hour);
	const m = parseInt(minute);
	const s = second ? parseInt(second) : 0;
	return h >= 0 && h < 24 && m >= 0 && m < 60 && s >= 0 && s < 60;
}
