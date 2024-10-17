import type { TTimeItem } from '$lib/form/types';

export function validateTime(
	item: TTimeItem,
	formData: Record<string, string>
): { valid: boolean; message: string } {
	const hour = formData[`${item.submitId}_hour`];
	const minute = formData[`${item.submitId}_minute`];
	const second = item.attributes.isDuration ? formData[`${item.submitId}_second`] : true;

	if (!hour || !minute || !second) {
		return { valid: false, message: 'This field is required' };
	}

	return { valid: true, message: '' };
}
