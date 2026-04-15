import { MONTH_SUFFIX, DAY_SUFFIX, YEAR_SUFFIX, HOUR_SUFFIX, MINUTE_SUFFIX } from '$lib/form/constants';
import { validateDate } from '$lib/form/utils/question-validation/date';
import { describe, it, expect } from 'vitest';

describe('Date Validation', () => {
    const mockSubmitId = 'test_date';

    it('should validate a date', () => {
        const result = validateDate(
            {
                type: 'date',
                submitId: mockSubmitId,
                validation: {
                    isRequired: true
                },
                attributes: {
                    yearIncluded: true,
                    timeIncluded: false
                },
                displayData: {
                    title: 'Test Date',
                    description: 'Please enter a date'
                }
            },
            {
                [`${mockSubmitId}${MONTH_SUFFIX}`]: '01',
                [`${mockSubmitId}${DAY_SUFFIX}`]: '01',
                [`${mockSubmitId}${YEAR_SUFFIX}`]: '2023'
            }
        );
        expect(result.valid).toBe(true);
    });


    it('should validate a date with time', () => {
        const result = validateDate(
            {
                type: 'date',
                submitId: mockSubmitId,
                validation: {
                    isRequired: true
                },
                attributes: {
                    yearIncluded: true,
                    timeIncluded: true
                },
                displayData: {
                    title: 'Test Date',
                    description: 'Please enter a date'
                }
            },
            {
                [`${mockSubmitId}${MONTH_SUFFIX}`]: '01',
                [`${mockSubmitId}${DAY_SUFFIX}`]: '01',
                [`${mockSubmitId}${YEAR_SUFFIX}`]: '2023',
                [`${mockSubmitId}${HOUR_SUFFIX}`]: '12',
                [`${mockSubmitId}${MINUTE_SUFFIX}`]: '00'
            }
        );
        expect(result.valid).toBe(true);
    })
});
