import { HOUR_SUFFIX, MINUTE_SUFFIX, SECOND_SUFFIX } from '$lib/form/constants';
import { validateTime } from '$lib/form/utils/question-validation/time';
import { describe, it, expect } from 'vitest';

describe('Time Validation', () => {
	const mockSubmitId = 'test_time';

	it('should validate a time', () => {
		const result = validateTime(
			{
				type: 'date',
				submitId: mockSubmitId,
				validation: {
					isRequired: true
				},
				attributes: {
					isDuration: false
				},
				displayData: {
					title: 'Test Time',
					description: 'Please enter a date'
				}
			},
			{
				[`${mockSubmitId}${HOUR_SUFFIX}`]: '01',
				[`${mockSubmitId}${MINUTE_SUFFIX}`]: '01'
			}
		);

		expect(result.valid).toBe(true);
	});

	it('should validate a duration', () => {
		const result = validateTime(
			{
				type: 'date',
				submitId: mockSubmitId,
				validation: {
					isRequired: true
				},
				attributes: {
					isDuration: true
				},
				displayData: {
					title: 'Test Time',
					description: 'Please enter a date'
				}
			},
			{
				[`${mockSubmitId}${HOUR_SUFFIX}`]: '01',
				[`${mockSubmitId}${MINUTE_SUFFIX}`]: '01',
				[`${mockSubmitId}${SECOND_SUFFIX}`]: '01'
			}
		);

		expect(result.valid).toBe(true);
	});
});
