import { describe, it, expect } from 'vitest';
import { determineItemType } from '$lib/form/utils/google-api/helpers';
import {
	ADDITIONAL_TITLE_ITEM,
	IMAGE_ITEM,
	PAGEBREAK_ITEM,
	PARAGRAPH_QUESTION_ITEM,
	TEXT_QUESTION_ITEM,
	RADIO_QUESTION_ITEM,
	CHECKBOX_QUESTION_ITEM,
	DROPDOWN_QUESTION_ITEM,
	SCALE_QUESTION_ITEM,
	DATE_QUESTION_ITEM,
	TIME_QUESTION_ITEM,
	RADIO_GRID_QUESTION_ITEM,
	CHECKBOX_GRID_QUESTION_ITEM
} from '$lib/form/constants';

describe('determineItemType', () => {
	it('should return ADDITIONAL_TITLE_ITEM for text items', () => {
		const item = { textItem: {} };
		const result = determineItemType(item);
		expect(result).toBe(ADDITIONAL_TITLE_ITEM);
	});

	it('should return IMAGE_ITEM for image items', () => {
		const item = { imageItem: {} };
		const result = determineItemType(item);
		expect(result).toBe(IMAGE_ITEM);
	});

	it('should return PAGEBREAK_ITEM for page break items', () => {
		const item = { pageBreakItem: {} };
		const result = determineItemType(item);
		expect(result).toBe(PAGEBREAK_ITEM);
	});

	it('should return TEXT_QUESTION_ITEM for text questions', () => {
		const item = { questionItem: { question: { textQuestion: { paragraph: false } } } };
		const result = determineItemType(item);
		expect(result).toBe(TEXT_QUESTION_ITEM);
	});

	it('should return PARAGRAPH_QUESTION_ITEM for paragraph questions', () => {
		const item = { questionItem: { question: { textQuestion: { paragraph: true } } } };
		const result = determineItemType(item);
		expect(result).toBe(PARAGRAPH_QUESTION_ITEM);
	});

	it('should return RADIO_QUESTION_ITEM for radio choice questions', () => {
		const item = { questionItem: { question: { choiceQuestion: { type: 'RADIO' } } } };
		const result = determineItemType(item);
		expect(result).toBe(RADIO_QUESTION_ITEM);
	});

	it('should return CHECKBOX_QUESTION_ITEM for checkbox choice questions', () => {
		const item = { questionItem: { question: { choiceQuestion: { type: 'CHECKBOX' } } } };
		const result = determineItemType(item);
		expect(result).toBe(CHECKBOX_QUESTION_ITEM);
	});

	it('should return DROPDOWN_QUESTION_ITEM for dropdown choice questions', () => {
		const item = { questionItem: { question: { choiceQuestion: { type: 'DROP_DOWN' } } } };
		const result = determineItemType(item);
		expect(result).toBe(DROPDOWN_QUESTION_ITEM);
	});

	it('should return SCALE_QUESTION_ITEM for scale questions', () => {
		const item = { questionItem: { question: { scaleQuestion: {} } } };
		const result = determineItemType(item);
		expect(result).toBe(SCALE_QUESTION_ITEM);
	});

	it('should return DATE_QUESTION_ITEM for date questions', () => {
		const item = { questionItem: { question: { dateQuestion: {} } } };
		const result = determineItemType(item);
		expect(result).toBe(DATE_QUESTION_ITEM);
	});

	it('should return TIME_QUESTION_ITEM for time questions', () => {
		const item = { questionItem: { question: { timeQuestion: {} } } };
		const result = determineItemType(item);
		expect(result).toBe(TIME_QUESTION_ITEM);
	});

	it('should return RADIO_GRID_QUESTION_ITEM for radio grid questions', () => {
		const item = { questionGroupItem: { grid: { columns: { type: 'RADIO' } } } };
		const result = determineItemType(item);
		expect(result).toBe(RADIO_GRID_QUESTION_ITEM);
	});

	it('should return CHECKBOX_GRID_QUESTION_ITEM for checkbox grid questions', () => {
		const item = { questionGroupItem: { grid: { columns: { type: 'CHECKBOX' } } } };
		const result = determineItemType(item);
		expect(result).toBe(CHECKBOX_GRID_QUESTION_ITEM);
	});
});
