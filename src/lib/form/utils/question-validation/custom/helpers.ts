export function greaterThan(value: string, comparison: string): boolean {
	return parseFloat(value) > parseFloat(comparison);
}

export function greaterThanOrEqual(value: string, comparison: string): boolean {
	return parseFloat(value) >= parseFloat(comparison);
}

export function lessThan(value: string, comparison: string): boolean {
	return parseFloat(value) < parseFloat(comparison);
}

export function lessThanOrEqual(value: string, comparison: string): boolean {
	return parseFloat(value) <= parseFloat(comparison);
}

export function equal(value: string, comparison: string): boolean {
	return value === comparison;
}

export function notEqual(value: string, comparison: string): boolean {
	return value !== comparison;
}

export function between(value: string, min: string, max: string): boolean {
	const numValue = parseFloat(value);
	return numValue > parseFloat(min) && numValue < parseFloat(max);
}

export function notBetween(value: string, min: string, max: string): boolean {
	const numValue = parseFloat(value);
	return numValue < parseFloat(min) || numValue > parseFloat(max);
}

export function isNumber(value: string): boolean {
	return !isNaN(parseFloat(value));
}

export function isInteger(value: string): boolean {
	return Number.isInteger(parseFloat(value));
}

export function contains(value: string, substring: string): boolean {
	return value.includes(substring);
}

export function notContains(value: string, substring: string): boolean {
	return !value.includes(substring);
}

export function isEmail(value: string): boolean {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(value);
}

export function isUrl(value: string): boolean {
	try {
		new URL(value);
		return true;
	} catch (_) {
		return false;
	}
}

export function maxLength(value: string, length: string): boolean {
	return value.length <= parseInt(length);
}

export function minLength(value: string, length: string): boolean {
	return value.length >= parseInt(length);
}

export function equals(value: string, comparison: string): boolean {
	return value === comparison;
}

export function notEquals(value: string, comparison: string): boolean {
	return value !== comparison;
}
