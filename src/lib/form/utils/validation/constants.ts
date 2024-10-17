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
		// Numbers
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
		// Length
		category: CATEGORY_LENGTH,
		validations: {
			202: MAX_LENGTH,
			203: MIN_LENGTH
		}
	},
	4: {
		// Regex
		category: CATEGORY_REGEX,
		validations: {
			299: CONTAINS,
			300: NOT_CONTAINS,
			301: EQUALS,
			302: NOT_EQUALS
		}
	}
};

export const ERROR_MESSAGES = {
	[GREATER_THAN]: (value: string, comparison: string) =>
		`Value ${value} must be greater than ${comparison}.`,
	[GREATER_THAN_OR_EQUAL]: (value: string, comparison: string) =>
		`Value ${value} must be greater than or equal to ${comparison}.`,
	[LESS_THAN]: (value: string, comparison: string) =>
		`Value ${value} must be less than ${comparison}.`,
	[LESS_THAN_OR_EQUAL]: (value: string, comparison: string) =>
		`Value ${value} must be less than or equal to ${comparison}.`,
	[EQUAL]: (value: string, comparison: string) => `Value ${value} must be equal to ${comparison}.`,
	[NOT_EQUAL]: (value: string, comparison: string) =>
		`Value ${value} must not be equal to ${comparison}.`,
	[BETWEEN]: (value: string, min: string, max: string) =>
		`Value ${value} must be between ${min} and ${max}.`,
	[NOT_BETWEEN]: (value: string, min: string, max: string) =>
		`Value ${value} must not be between ${min} and ${max}.`,
	[IS_NUMBER]: (value: string) => `Value ${value} must be a number.`,
	[IS_INTEGER]: (value: string) => `Value ${value} must be an integer.`,
	[CONTAINS]: (value: string, substring: string) => `Value ${value} must contain ${substring}.`,
	[NOT_CONTAINS]: (value: string, substring: string) =>
		`Value ${value} must not contain ${substring}.`,
	[IS_EMAIL]: (value: string) => `Value ${value} must be a valid email address.`,
	[IS_URL]: (value: string) => `Value ${value} must be a valid URL.`,
	[MAX_LENGTH]: (value: string, length: string) =>
		`Value ${value} must not exceed ${length} characters.`,
	[MIN_LENGTH]: (value: string, length: string) =>
		`Value ${value} must be at least ${length} characters long.`,
	[EQUALS]: (value: string, comparison: string) => `Value ${value} must be equal to ${comparison}.`,
	[NOT_EQUALS]: (value: string, comparison: string) =>
		`Value ${value} must not be equal to ${comparison}.`
};
