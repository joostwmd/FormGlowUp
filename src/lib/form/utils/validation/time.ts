import type { TTimeItem } from '$lib/form/types';

export function validateTime(
	item: TTimeItem,
	formData: Record<string, string>
): { valid: boolean; message: string } {
	const hour = formData[`${item.submitId}_hour`];
	const minute = formData[`${item.submitId}_minute`];
	const second = item.attributes.isDuration ? formData[`${item.submitId}_second`] : '0'; // Default second if not included

	if (!hour || !minute || !second) {
		return { valid: false, message: 'This field is required' };
	}

	if (!isValidTime(hour, minute, second)) {
		return { valid: false, message: 'Invalid time' };
	}

	return { valid: true, message: '' };
}

export function isValidTime(hour: string, minute: string, second?: string): boolean {
	const h = parseInt(hour);
	const m = parseInt(minute);
	const s = second ? parseInt(second) : 0;
	return h >= 0 && h < 24 && m >= 0 && m < 60 && s >= 0 && s < 60;
}
