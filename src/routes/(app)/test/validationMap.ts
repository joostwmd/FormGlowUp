export const CATEGORY_NUMBER = 'number';
export const CATEGORY_TEXT = 'text';
export const CATEGORY_LENGTH = 'length';
export const CATEGORY_REGEX = 'regex';

export const GREATER_THAN = 'greaterThan';
export const GREATER_THAN_OR_EQUAL = 'greaterThanOrEqual';
export const LESS_THAN = 'lessThan';
export const LESS_THAN_OR_EQUAL = 'lessThanOrEqual';
export const EQUAL = 'equal';
export const NOT_EQUAL = 'notEqual';
export const BETWEEN = 'between';
export const NOT_BETWEEN = 'notBetween';
export const IS_NUMBER = 'isNumber';
export const IS_INTEGER = 'isInteger';
export const CONTAINS = 'contains';
export const NOT_CONTAINS = 'notContains';
export const IS_EMAIL = 'isEmail';
export const IS_URL = 'isURL';
export const MAX_LENGTH = 'maxLength';
export const MIN_LENGTH = 'minLength';
export const EQUALS = 'equals';
export const NOT_EQUALS = 'notEquals';

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
