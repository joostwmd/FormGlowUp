import { constructFormData } from '$lib/form';
import { describe, it, expect } from 'vitest';
import { mockHtmlData, mockApiData, mockConstructedFormData } from '../../mockData';

describe('constrcutFormData', () => {
	it('construct final form data from html and api data', async () => {
		//@ts-ignore
		const result = await constructFormData(mockHtmlData, mockApiData);
		expect(result.success).toBe(true);
		//@ts-ignore
		expect(result.info).toEqual(mockConstructedFormData.info);
		//@ts-ignore
		expect(result.items).toEqual(mockConstructedFormData.items);
	});
});
