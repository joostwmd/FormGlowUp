import { describe, it, expect } from 'vitest';
import {
	constructFormItemDataFromAPI,
	constructFormQuestionItemsDataFromAPI,
	constructFormInfoDataFromAPI
} from '$lib/form/utils/google-api';
import type {
	TGoogleFormAPIResponse,
	TGoogleFormItemAPIData
} from '$lib/form/utils/google-api/types';
import {
	RADIO_QUESTION_ITEM,
	CHECKBOX_QUESTION_ITEM,
	DROPDOWN_QUESTION_ITEM,
	SCALE_QUESTION_ITEM,
	DATE_QUESTION_ITEM,
	TIME_QUESTION_ITEM,
	TEXT_QUESTION_ITEM,
	PARAGRAPH_QUESTION_ITEM,
	RADIO_GRID_QUESTION_ITEM,
	CHECKBOX_GRID_QUESTION_ITEM
} from '$lib/form/constants';
import {
	GOOGLE_API_CHOICE_QUESTION,
	GOOGLE_API_RADIO,
	GOOGLE_API_QUESTION_GROUP_ITEM,
	GOOGLE_API_ROW_QUESTION,
	GOOGLE_API_CHECKBOX,
	GOOGLE_API_DROP_DOWN,
	GOOGLE_API_SCALE_QUESTION,
	GOOGLE_API_DATE_QUESTION,
	GOOGLE_API_TIME_QUESTION,
	GOOGLE_API_TEXT_QUESTION
} from '$lib/form/utils/google-api/constants';
import type {
	TChoicesItem,
	TScaleItem,
	TGridItem,
	TDateItem,
	TTimeItem,
	TTextItem
} from '$lib/form/types';
import { mockApiData, mockedParsedApiData } from '../../mockData';

describe('constructFormItemDataFromAPI', () => {
	it('should construct a radio question item', () => {
		const itemData: TGoogleFormItemAPIData = {
			itemId: '1',
			title: 'Radio Question',
			description: 'Select one option',
			kind: GOOGLE_API_CHOICE_QUESTION,
			questionItem: {
				question: {
					questionId: 'q1',
					required: true,
					kind: GOOGLE_API_CHOICE_QUESTION,
					choiceQuestion: {
						type: GOOGLE_API_RADIO,
						options: [{ value: 'Option 1' }, { value: 'Option 2', isOther: true }],
						shuffle: false
					}
				}
			}
		};

		const result = constructFormItemDataFromAPI(itemData, RADIO_QUESTION_ITEM) as unknown as {
			isSupported: boolean;
			item?: TChoicesItem;
		};
		console.log(result);
		expect(result.isSupported).toBe(true);
		expect(result.item!.type).toBe(RADIO_QUESTION_ITEM);
		expect(result.item!.options).toEqual(['Option 1', '__other_option__']);
		expect(result.item!.validation).toEqual({ isRequired: true });
		expect(result.item!.attributes).toEqual({ otherOption: true, randomizeOrder: false });
		expect(result.item!.displayData).toEqual({
			title: 'Radio Question',
			description: 'Select one option'
		});
	});

	it('should construct a checkbox question item', () => {
		const itemData: TGoogleFormItemAPIData = {
			itemId: '2',
			title: 'Checkbox Question',
			description: 'Select multiple options',
			kind: GOOGLE_API_CHOICE_QUESTION,
			questionItem: {
				question: {
					questionId: 'q2',
					required: false,
					kind: GOOGLE_API_CHOICE_QUESTION,
					choiceQuestion: {
						type: GOOGLE_API_CHECKBOX,
						options: [{ value: 'Option 1' }, { value: 'Option 2' }],
						shuffle: true
					}
				}
			}
		};

		const result = constructFormItemDataFromAPI(itemData, CHECKBOX_QUESTION_ITEM) as unknown as {
			isSupported: boolean;
			item?: TChoicesItem;
		};
		console.log(result);
		expect(result.isSupported).toBe(true);
		expect(result.item!.type).toBe(CHECKBOX_QUESTION_ITEM);
		expect(result.item!.options).toEqual(['Option 1', 'Option 2']);
		expect(result.item!.validation).toEqual({ isRequired: false });
		expect(result.item!.attributes).toEqual({ otherOption: false, randomizeOrder: true });
		expect(result.item!.displayData).toEqual({
			title: 'Checkbox Question',
			description: 'Select multiple options'
		});
	});

	it('should construct a dropdown question item', () => {
		const itemData: TGoogleFormItemAPIData = {
			itemId: '3',
			title: 'Dropdown Question',
			description: 'Select one option from dropdown',
			kind: GOOGLE_API_CHOICE_QUESTION,
			questionItem: {
				question: {
					questionId: 'q3',
					required: true,
					kind: GOOGLE_API_CHOICE_QUESTION,
					choiceQuestion: {
						type: GOOGLE_API_DROP_DOWN,
						options: [{ value: 'Option A' }, { value: 'Option B' }],
						shuffle: false
					}
				}
			}
		};

		const result = constructFormItemDataFromAPI(itemData, DROPDOWN_QUESTION_ITEM) as unknown as {
			isSupported: boolean;
			item?: TChoicesItem;
		};
		console.log(result);
		expect(result.isSupported).toBe(true);
		expect(result.item!.type).toBe(DROPDOWN_QUESTION_ITEM);
		expect(result.item!.options).toEqual(['Option A', 'Option B']);
		expect(result.item!.validation).toEqual({ isRequired: true });
		expect(result.item!.attributes).toEqual({ otherOption: false, randomizeOrder: false });
		expect(result.item!.displayData).toEqual({
			title: 'Dropdown Question',
			description: 'Select one option from dropdown'
		});
	});

	it('should construct a scale question item', () => {
		const itemData: TGoogleFormItemAPIData = {
			itemId: '4',
			title: 'Scale Question',
			description: 'Rate from 1 to 5',
			kind: GOOGLE_API_SCALE_QUESTION,
			questionItem: {
				question: {
					questionId: 'q4',
					required: true,
					kind: GOOGLE_API_SCALE_QUESTION,
					scaleQuestion: {
						low: 1,
						high: 5,
						lowLabel: 'Poor',
						highLabel: 'Excellent'
					}
				}
			}
		};

		const result = constructFormItemDataFromAPI(itemData, SCALE_QUESTION_ITEM) as unknown as {
			isSupported: boolean;
			item?: TScaleItem;
		};

		expect(result.isSupported).toBe(true);
		expect(result.item!.type).toBe(SCALE_QUESTION_ITEM);
		expect(result.item!.validation).toEqual({ isRequired: true });
		expect(result.item!.attributes).toEqual({
			min: 1,
			max: 5,
			minLabel: 'Poor',
			maxLabel: 'Excellent'
		});
		expect(result.item!.displayData).toEqual({
			title: 'Scale Question',
			description: 'Rate from 1 to 5'
		});
	});

	it('should construct a checkbox grid question item', () => {
		const itemData: TGoogleFormItemAPIData = {
			itemId: '5',
			title: 'Checkbox Grid',
			description: 'Select multiple options per row',
			kind: GOOGLE_API_QUESTION_GROUP_ITEM,
			questionGroupItem: {
				questions: [
					{
						questionId: 'q5',
						required: true,
						kind: GOOGLE_API_ROW_QUESTION,
						rowQuestion: { title: 'Row 1' }
					},
					{
						questionId: 'q6',
						required: false,
						kind: GOOGLE_API_ROW_QUESTION,
						rowQuestion: { title: 'Row 2' }
					}
				],
				grid: {
					columns: {
						type: GOOGLE_API_CHECKBOX,
						options: [{ value: 'Column 1' }, { value: 'Column 2' }],
						shuffle: false
					},
					shuffleQuestions: false
				}
			}
		};

		const result = constructFormItemDataFromAPI(
			itemData,
			CHECKBOX_GRID_QUESTION_ITEM
		) as unknown as {
			isSupported: boolean;
			item?: TGridItem;
		};

		expect(result.isSupported).toBe(true);
		expect(result.item!.type).toBe(CHECKBOX_GRID_QUESTION_ITEM);
		expect(result.item!.columns).toEqual(['Column 1', 'Column 2']);
		expect(result.item!.rows).toEqual([{ title: 'Row 1' }, { title: 'Row 2' }]);
		expect(result.item!.validation).toEqual({ isRequired: true });
		expect(result.item!.displayData).toEqual({
			title: 'Checkbox Grid',
			description: 'Select multiple options per row'
		});
	});

	it('should construct a radio grid question item', () => {
		const itemData: TGoogleFormItemAPIData = {
			itemId: '6',
			title: 'Radio Grid',
			description: 'Select one option per row',
			kind: GOOGLE_API_QUESTION_GROUP_ITEM,
			questionGroupItem: {
				questions: [
					{
						questionId: 'q7',
						required: true,
						kind: GOOGLE_API_ROW_QUESTION,
						rowQuestion: { title: 'Row 1' }
					},
					{
						questionId: 'q8',
						required: false,
						kind: GOOGLE_API_ROW_QUESTION,
						rowQuestion: { title: 'Row 2' }
					}
				],
				grid: {
					columns: {
						type: GOOGLE_API_RADIO,
						options: [{ value: 'Column 1' }, { value: 'Column 2' }],
						shuffle: false
					},
					shuffleQuestions: false
				}
			}
		};

		const result = constructFormItemDataFromAPI(itemData, RADIO_GRID_QUESTION_ITEM) as unknown as {
			isSupported: boolean;
			item?: TGridItem;
		};

		expect(result.isSupported).toBe(true);
		expect(result.item!.type).toBe(RADIO_GRID_QUESTION_ITEM);
		expect(result.item!.columns).toEqual(['Column 1', 'Column 2']);
		expect(result.item!.rows).toEqual([{ title: 'Row 1' }, { title: 'Row 2' }]);
		expect(result.item!.validation).toEqual({ isRequired: true });
		expect(result.item!.displayData).toEqual({
			title: 'Radio Grid',
			description: 'Select one option per row'
		});
	});

	it('should construct a date question item', () => {
		const itemData: TGoogleFormItemAPIData = {
			itemId: '7',
			title: 'Date Question',
			description: 'Select a date',
			kind: GOOGLE_API_DATE_QUESTION,
			questionItem: {
				question: {
					questionId: 'q9',
					required: true,
					kind: GOOGLE_API_DATE_QUESTION,
					dateQuestion: {
						includeYear: true,
						includeTime: false
					}
				}
			}
		};

		const result = constructFormItemDataFromAPI(itemData, DATE_QUESTION_ITEM) as unknown as {
			isSupported: boolean;
			item?: TDateItem;
		};

		expect(result.isSupported).toBe(true);
		expect(result.item!.type).toBe(DATE_QUESTION_ITEM);
		expect(result.item!.validation).toEqual({ isRequired: true });
		expect(result.item!.attributes).toEqual({ yearIncluded: true, timeIncluded: false });
		expect(result.item!.displayData).toEqual({
			title: 'Date Question',
			description: 'Select a date'
		});
	});

	it('should construct a time question item', () => {
		const itemData: TGoogleFormItemAPIData = {
			itemId: '8',
			title: 'Time Question',
			description: 'Select a time',
			kind: GOOGLE_API_TIME_QUESTION,
			questionItem: {
				question: {
					questionId: 'q10',
					required: true,
					kind: GOOGLE_API_TIME_QUESTION,
					timeQuestion: {
						duration: true
					}
				}
			}
		};

		const result = constructFormItemDataFromAPI(itemData, TIME_QUESTION_ITEM) as unknown as {
			isSupported: boolean;
			item?: TTimeItem;
		};

		expect(result.isSupported).toBe(true);
		expect(result.item!.type).toBe(TIME_QUESTION_ITEM);
		expect(result.item!.validation).toEqual({ isRequired: true });
		expect(result.item!.attributes).toEqual({ isDuration: true });
		expect(result.item!.displayData).toEqual({
			title: 'Time Question',
			description: 'Select a time'
		});
	});

	it('should construct a text question item', () => {
		const itemData: TGoogleFormItemAPIData = {
			itemId: '9',
			title: 'Text Question',
			description: 'Enter text',
			kind: GOOGLE_API_TEXT_QUESTION,
			questionItem: {
				question: {
					questionId: 'q11',
					required: true,
					kind: GOOGLE_API_TEXT_QUESTION,
					textQuestion: {
						paragraph: false
					}
				}
			}
		};

		const result = constructFormItemDataFromAPI(itemData, TEXT_QUESTION_ITEM) as unknown as {
			isSupported: boolean;
			item?: TTextItem;
		};

		expect(result.isSupported).toBe(true);
		expect(result.item!.type).toBe(TEXT_QUESTION_ITEM);
		expect(result.item!.validation).toEqual({ isRequired: true });
		expect(result.item!.attributes).toEqual({ isParagraph: false });
		expect(result.item!.displayData).toEqual({
			title: 'Text Question',
			description: 'Enter text'
		});
	});

	it('should construct a paragraph question item', () => {
		const itemData: TGoogleFormItemAPIData = {
			itemId: '10',
			title: 'Paragraph Question',
			description: 'Enter paragraph',
			kind: GOOGLE_API_TEXT_QUESTION,
			questionItem: {
				question: {
					questionId: 'q12',
					required: false,
					kind: GOOGLE_API_TEXT_QUESTION,
					textQuestion: {
						paragraph: true
					}
				}
			}
		};

		const result = constructFormItemDataFromAPI(itemData, PARAGRAPH_QUESTION_ITEM) as unknown as {
			isSupported: boolean;
			item?: TTextItem;
		};

		expect(result.isSupported).toBe(true);
		expect(result.item!.type).toBe(PARAGRAPH_QUESTION_ITEM);
		expect(result.item!.validation).toEqual({ isRequired: false });
		expect(result.item!.attributes).toEqual({ isParagraph: true });
		expect(result.item!.displayData).toEqual({
			title: 'Paragraph Question',
			description: 'Enter paragraph'
		});
	});
});

describe('constructFormQuestionItemsDataFromAPI', () => {
	it('should construct form items from API data', () => {
		//@ts-ignore
		const result = constructFormQuestionItemsDataFromAPI(mockApiData);
		expect(result).toEqual(mockedParsedApiData);
	});
});

describe('constructFormInfoDataFromAPI', () => {
	it('should construct form info from API data', async () => {
		const apiData = {
			formId: 'form2',
			responderUri: 'http://example.com/response',
			info: {
				title: 'Test Form',
				description: 'This is a test form',
				documentTitle: 'Test Document'
			}
		};

		const result = await constructFormInfoDataFromAPI(apiData);
		expect(result.formId).toBe('form2');
		expect(result.responderUri).toBe('http://example.com/response');
		expect(result.title).toBe('Test Form');
		expect(result.description).toBe('This is a test form');
		expect(result.documentTitle).toBe('Test Document');
	});
});
