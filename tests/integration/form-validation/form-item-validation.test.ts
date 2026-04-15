import { describe, it, expect } from 'vitest';
import { validateFormItemData } from '$lib/form/utils/question-validation';
import {
	DATE_QUESTION_ITEM,
	TIME_QUESTION_ITEM,
	TEXT_QUESTION_ITEM,
	RADIO_GRID_QUESTION_ITEM,
	MONTH_SUFFIX,
	DAY_SUFFIX,
	YEAR_SUFFIX,
	HOUR_SUFFIX,
	MINUTE_SUFFIX
} from '$lib/form/constants';

describe('Form Item Validation Integration Tests', () => {
	const mockSubmitId = 'test_form_item';

	describe('Grid Item Validation', () => {
		it('should validate required grid items', () => {
			const result = validateFormItemData(
				{
					type: RADIO_GRID_QUESTION_ITEM,
					submitId: mockSubmitId,
					validation: {
						isRequired: true
					},
					rows: [
						{ submitId: 'row1', title: 'Row 1' },
						{ submitId: 'row2', title: 'Row 2' }
					],
					columns: ['Col 1', 'Col 2'],
					displayData: {
						title: 'Test Grid',
						description: 'Please fill out all rows'
					},
					attributes: {
						isParagraph: false
					}
				},
				{
					row1: '1',
					row2: '2'
				}
			);
			expect(result.valid).toBe(true);
			expect(result.message).toBe('');
		});

		it('should fail validation when grid has empty rows', () => {
			const result = validateFormItemData(
				{
					type: RADIO_GRID_QUESTION_ITEM,
					submitId: mockSubmitId,
					validation: {
						isRequired: true
					},
					rows: [
						{ submitId: 'row1', title: 'Row 1' },
						{ submitId: 'row2', title: 'Row 2' }
					],
					columns: ['1', '2'],
					displayData: {
						title: 'Test Grid',
						description: 'Please fill out all rows'
					},
					attributes: {
						isParagraph: false
					}
				},
				{
					row1: '1',
					row2: '' // Empty row
				}
			);
			expect(result.valid).toBe(false);
			expect(result.message).toBe('Every row is required');
		});
	});

	describe('Date Item Validation', () => {
		it('should validate date item', () => {
			const result = validateFormItemData(
				{
					type: DATE_QUESTION_ITEM,
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
			expect(result.message).toBe('');
		});
	});

	describe('Time Item Validation', () => {
		it('should validate time item', () => {
			const result = validateFormItemData(
				{
					type: TIME_QUESTION_ITEM,
					submitId: mockSubmitId,
					validation: {
						isRequired: true
					},
					attributes: {
						isDuration: false
					},
					displayData: {
						title: 'Test Time',
						description: 'Please enter a time'
					}
				},
				{
					[`${mockSubmitId}${HOUR_SUFFIX}`]: '01',
					[`${mockSubmitId}${MINUTE_SUFFIX}`]: '01'
				}
			);
			console.log(result);
			expect(result.valid).toBe(true);
			expect(result.message).toBe('');
		});
	});

	describe('Text Item Validation', () => {
		it('should validate text item with custom validation', () => {
			const result = validateFormItemData(
				{
					type: TEXT_QUESTION_ITEM,
					submitId: mockSubmitId,
					validation: {
						isRequired: true,
						category: 2, // Text category
						type: 102, // Email validation
						value: [],
						message: 'Invalid email format'
					},
					attributes: {
						isParagraph: false
					},
					displayData: {
						title: 'Test Email',
						description: 'Please enter an email'
					}
				},
				{
					[mockSubmitId]: 'test@example.com'
				}
			);
			expect(result.valid).toBe(true);
			expect(result.message).toBe('');
		});

		it('should fail validation for invalid text input', () => {
			const result = validateFormItemData(
				{
					type: TEXT_QUESTION_ITEM,
					submitId: mockSubmitId,
					validation: {
						isRequired: true,
						category: 2, // Text category
						type: 102, // Email validation
						value: [],
						message: 'Invalid email format'
					},
					attributes: {
						isParagraph: false
					},
					displayData: {
						title: 'Test Email',
						description: 'Please enter an email'
					}
				},
				{
					[mockSubmitId]: 'invalid-email'
				}
			);
			expect(result.valid).toBe(false);
			expect(result.message).toBe('Invalid email format');
		});
	});

	describe('Required Field Validation', () => {
		it('should fail validation for empty required field', () => {
			const result = validateFormItemData(
				{
					type: TEXT_QUESTION_ITEM,
					submitId: mockSubmitId,
					validation: {
						isRequired: true
					},
					attributes: {
						isParagraph: false
					},
					displayData: {
						title: 'Test Required',
						description: 'This field is required'
					}
				},
				{
					[mockSubmitId]: ''
				}
			);
			expect(result.valid).toBe(false);
			expect(result.message).toBe('This field is required');
		});

		it('should pass validation for empty non-required field', () => {
			const result = validateFormItemData(
				{
					type: TEXT_QUESTION_ITEM,
					submitId: mockSubmitId,
					validation: {
						isRequired: false
					},
					attributes: {
						isParagraph: false
					},
					displayData: {
						title: 'Test Optional',
						description: 'This field is optional'
					}
				},
				{
					[mockSubmitId]: ''
				}
			);
			expect(result.valid).toBe(true);
			expect(result.message).toBe('');
		});
	});
});
