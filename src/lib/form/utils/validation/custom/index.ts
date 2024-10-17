import type { TTextItem } from '$lib/form/types';
import {
	VALIDATION_PARAMETERS_MAP,
	GREATER_THAN,
	ERROR_MESSAGES,
	GREATER_THAN_OR_EQUAL,
	LESS_THAN,
	LESS_THAN_OR_EQUAL,
	EQUAL,
	NOT_EQUAL,
	BETWEEN,
	NOT_BETWEEN,
	IS_NUMBER,
	IS_INTEGER,
	CONTAINS,
	NOT_CONTAINS,
	IS_EMAIL,
	IS_URL,
	MAX_LENGTH,
	MIN_LENGTH,
	EQUALS,
	NOT_EQUALS
} from '../constants';
import {
	greaterThan,
	greaterThanOrEqual,
	lessThan,
	lessThanOrEqual,
	equal,
	notEqual,
	between,
	notBetween,
	isNumber,
	isInteger,
	contains,
	notContains,
	isEmail,
	isUrl,
	maxLength,
	minLength,
	equals,
	notEquals
} from './helpers';

// Main validation function
export function validateCustomParameters(item: TTextItem, value: string) {
	if (!item.validation.category || !item.validation.type || !item.validation.value) {
		// returns valid if no custom validation is set
		return {
			valid: true,
			message: ''
		};
	}

	const categoryMap = Object.values(VALIDATION_PARAMETERS_MAP).find(
		(cat) => cat.category === item.validation.category
	);
	if (!categoryMap) {
		return { valid: false, message: `Unknown category: ${item.validation.category}` };
	}

	const validationType = Object.entries(categoryMap.validations).find(
		([key, val]) => val === item.validation.type
	);
	if (!validationType) {
		return { valid: false, message: `Unknown validation type: ${item.validation.type}` };
	}

	const [validationKey, validationFunction] = validationType;

	let isValid = false;
	let errorMessage = '';
	switch (validationFunction) {
		case GREATER_THAN:
			isValid = greaterThan(value, item.validation.value[0]);
			errorMessage = ERROR_MESSAGES[GREATER_THAN](value, item.validation.value[0]);
			break;
		case GREATER_THAN_OR_EQUAL:
			isValid = greaterThanOrEqual(value, item.validation.value[0]);
			errorMessage = ERROR_MESSAGES[GREATER_THAN_OR_EQUAL](value, item.validation.value[0]);
			break;
		case LESS_THAN:
			isValid = lessThan(value, item.validation.value[0]);
			errorMessage = ERROR_MESSAGES[LESS_THAN](value, item.validation.value[0]);
			break;
		case LESS_THAN_OR_EQUAL:
			isValid = lessThanOrEqual(value, item.validation.value[0]);
			errorMessage = ERROR_MESSAGES[LESS_THAN_OR_EQUAL](value, item.validation.value[0]);
			break;
		case EQUAL:
			isValid = equal(value, item.validation.value[0]);
			errorMessage = ERROR_MESSAGES[EQUAL](value, item.validation.value[0]);
			break;
		case NOT_EQUAL:
			isValid = notEqual(value, item.validation.value[0]);
			errorMessage = ERROR_MESSAGES[NOT_EQUAL](value, item.validation.value[0]);
			break;
		case BETWEEN:
			isValid = between(value, item.validation.value[0], item.validation.value[1]);
			errorMessage = ERROR_MESSAGES[BETWEEN](
				value,
				item.validation.value[0],
				item.validation.value[1]
			);
			break;
		case NOT_BETWEEN:
			isValid = notBetween(value, item.validation.value[0], item.validation.value[1]);
			errorMessage = ERROR_MESSAGES[NOT_BETWEEN](
				value,
				item.validation.value[0],
				item.validation.value[1]
			);
			break;
		case IS_NUMBER:
			isValid = isNumber(value);
			errorMessage = ERROR_MESSAGES[IS_NUMBER](value);
			break;
		case IS_INTEGER:
			isValid = isInteger(value);
			errorMessage = ERROR_MESSAGES[IS_INTEGER](value);
			break;
		case CONTAINS:
			isValid = contains(value, item.validation.value[0]);
			errorMessage = ERROR_MESSAGES[CONTAINS](value, item.validation.value[0]);
			break;
		case NOT_CONTAINS:
			isValid = notContains(value, item.validation.value[0]);
			errorMessage = ERROR_MESSAGES[NOT_CONTAINS](value, item.validation.value[0]);
			break;
		case IS_EMAIL:
			isValid = isEmail(value);
			errorMessage = ERROR_MESSAGES[IS_EMAIL](value);
			break;
		case IS_URL:
			isValid = isUrl(value);
			errorMessage = ERROR_MESSAGES[IS_URL](value);
			break;
		case MAX_LENGTH:
			isValid = maxLength(value, item.validation.value[0]);
			errorMessage = ERROR_MESSAGES[MAX_LENGTH](value, item.validation.value[0]);
			break;
		case MIN_LENGTH:
			isValid = minLength(value, item.validation.value[0]);
			errorMessage = ERROR_MESSAGES[MIN_LENGTH](value, item.validation.value[0]);
			break;
		case EQUALS:
			isValid = equals(value, item.validation.value[0]);
			errorMessage = ERROR_MESSAGES[EQUALS](value, item.validation.value[0]);
			break;
		case NOT_EQUALS:
			isValid = notEquals(value, item.validation.value[0]);
			errorMessage = ERROR_MESSAGES[NOT_EQUALS](value, item.validation.value[0]);
			break;
		default:
			return { valid: false, message: `Unhandled validation type: ${validationFunction}` };
	}

	return {
		valid: isValid,
		message: isValid ? '' : item.validation.message || errorMessage
	};
}
