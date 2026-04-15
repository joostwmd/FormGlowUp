import { describe, it, expect } from 'vitest';
import { constructQuestionItemsDataFromHTML } from '$lib/form/utils/html-parsing';
import { mockHtmlData, mockParsedHtmlData } from '../../mockData';

describe('constructQuestionItemsDataFromHTML', () => {
	it('should parse HTML and construct question items data', () => {
		const result = constructQuestionItemsDataFromHTML(mockHtmlData);
		expect(result).toEqual(mockParsedHtmlData);
	});
});
