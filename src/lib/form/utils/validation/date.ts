import type { TDateItem } from '$lib/form/types';

export function validateDate(
	item: TDateItem,
	formData: Record<string, string>
): { valid: boolean; message: string } {
	const month = formData[`${item.submitId}_month`];
	const day = formData[`${item.submitId}_day`];
	const year = item.attributes.yearIncluded ? formData[`${item.submitId}_year`] : true;
	const hour = item.attributes.timeIncluded ? formData[`${item.submitId}_hour`] : true;
	const minute = item.attributes.timeIncluded ? formData[`${item.submitId}_minute`] : true;

	if (!month || !day || !year || !hour || !minute) {
		return { valid: false, message: 'This field is required' };
	}

	return { valid: true, message: '' };
}
