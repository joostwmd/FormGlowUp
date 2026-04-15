import { describe, it, expect } from 'vitest';
import {
	extractFormId,
	constructUserEmailItem,
	constructGoogleFormSubmitUrl,
	constructSubmitData
} from '$lib/form/utils/helpers';
import { USER_EMAIL_VALUE } from '$lib/form/constants';

const testEditUrl =
	'https://docs.google.com/forms/d/1ifsMl1Eq4ZUitM0CV5IPIt2Yta2mKIAuj25MWQebSmg/edit';
const testResponderUrl =
	'https://docs.google.com/forms/d/e/1FAIpQLScm0ugipVINExs_Gf99wi6E7prJG7ZIT3P91_tnIjg17Ami-g/viewform';
describe('extractFormId', () => {
	it('should extract form ID from URL', () => {
		const formId = extractFormId(testEditUrl);
		console.log(formId);
		expect(formId).toBe('1ifsMl1Eq4ZUitM0CV5IPIt2Yta2mKIAuj25MWQebSmg');
	});

	it('should return null for invalid URL', () => {
		const url = 'https://docs.google.com/forms/u/0/';
		const formId = extractFormId(url);
		expect(formId).toBeNull();
	});
});

describe('constructUserEmailItem', () => {
	it('should construct a user email item with correct attributes', () => {
		const emailItem = constructUserEmailItem();
		console.log(emailItem);
		expect(emailItem.type).toBe('TEXT_QUESTION');
		expect(emailItem.submitId).toBe(USER_EMAIL_VALUE);
		expect(emailItem.displayData.title).toBe('Your Email Adress');
		expect(emailItem.validation.isRequired).toBe(true);
		expect(emailItem.attributes.isParagraph).toBe(false);
	});
});

describe('constructGoogleFormSubmitUrl', () => {
	it('should transform responder URL to submission URL', () => {
		const submitUrl = constructGoogleFormSubmitUrl(testResponderUrl);
		expect(submitUrl).toBe(
			'https://docs.google.com/forms/u/0/d/e/1FAIpQLScm0ugipVINExs_Gf99wi6E7prJG7ZIT3P91_tnIjg17Ami-g/formResponse'
		);
	});
});

describe('constructSubmitData', () => {
	it('should construct URL-encoded form submission data', () => {
		const formData = {
			[USER_EMAIL_VALUE]: 'user@example.com',
			'123': 'Answer 1',
			'456': ['Option 1', 'Option 2']
		};
		const submitData = constructSubmitData(formData);
		console.log(submitData);
		expect(submitData).toBe(
			'entry.123=Answer+1&entry.456=Option+1&entry.456=Option+2&emailAddress=user%40example.com'
		);
	});
});
