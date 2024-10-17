import { z, ZodSchema } from 'zod';
import {
	CHECKBOX_GRID_QUESTION_ITEM,
	DATE_QUESTION_ITEM,
	PARAGRAPH_QUESTION_ITEM,
	RADIO_GRID_QUESTION_ITEM,
	TEXT_QUESTION_ITEM,
	TIME_QUESTION_ITEM
} from '../constants';
import { formDataStore, formStructureStore } from '../stores';

export const CATEGORY_NUMBER = 'NUMBER';
export const CATEGORY_TEXT = 'TEXT';
export const CATEGORY_LENGTH = 'LENGTH';
export const CATEGORY_REGEX = 'REGEX';

export const GREATER_THAN = 'GREATER_THAN';
export const GREATER_THAN_OR_EQUAL = 'GREATER_THAN_OR_EQUAL';
export const LESS_THAN = 'LESS_THAN';
export const LESS_THAN_OR_EQUAL = 'LESS_THAN_OR_EQUAL';
export const EQUAL = 'EQUAL';
export const NOT_EQUAL = 'NOT_EQUAL';
export const BETWEEN = 'BETWEEN';
export const NOT_BETWEEN = 'NOT_BETWEEN';
export const IS_NUMBER = 'IS_NUMBER';
export const IS_INTEGER = 'IS_INTEGER';
export const CONTAINS = 'CONTAINS';
export const NOT_CONTAINS = 'NOT_CONTAINS';
export const IS_EMAIL = 'IS_EMAIL';
export const IS_URL = 'IS_URL';
export const MAX_LENGTH = 'MAX_LENGTH';
export const MIN_LENGTH = 'MIN_LENGTH';
export const EQUALS = 'EQUALS';
export const NOT_EQUALS = 'NOT_EQUALS';

export const VALIDATION_PARAMETERS_MAP = {
	1: {
		// Zahlen
		category: CATEGORY_NUMBER,
		validations: {
			1: GREATER_THAN,
			2: GREATER_THAN_OR_EQUAL,
			3: LESS_THAN,
			4: LESS_THAN_OR_EQUAL,
			5: EQUAL,
			6: NOT_EQUAL,
			7: BETWEEN,
			8: NOT_BETWEEN,
			9: IS_NUMBER,
			10: IS_INTEGER
		}
	},
	2: {
		// Text
		category: CATEGORY_TEXT,
		validations: {
			100: CONTAINS,
			101: NOT_CONTAINS,
			102: IS_EMAIL,
			103: IS_URL
		}
	},
	6: {
		// Länge
		category: CATEGORY_LENGTH,
		validations: {
			202: MAX_LENGTH,
			203: MIN_LENGTH
		}
	},
	4: {
		// Regular Expression
		category: CATEGORY_REGEX,
		validations: {
			299: CONTAINS,
			300: NOT_CONTAINS,
			301: EQUALS,
			302: NOT_EQUALS
		}
	}
};

export function generateFormSchema(questionItems: any) {
	console.log('generateFormSchema', questionItems);
}

export function validateFormItemData(item: any, data: any) {
	const test = formDataStore.subscribe((val) => {
		console.log('formDataStore', val);
	});
	console.log('validateFormItemData', item, data);

	// const isRequired = formStructure.questions[currentQuestion].data.isRequired;
	// const currentVal =
	// 	$formDataStore[SUBMIT_KEY_PREFIX + formStructure.questions[currentQuestion].data.submitId];

	// if (isRequired && !currentVal) {
	// 	console.log('Field required');
	// 	isRequiredError = true;
	// 	return;
	// } else {
	// 	isRequiredError = false;
	// 	currentQuestion++;
	// }
}
