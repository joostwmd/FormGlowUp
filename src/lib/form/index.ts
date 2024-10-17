import { getAccessTokens } from '$lib/firebase/utils';
import type { TFormInfo, TFormItem, TGETFormResponse } from './types';
import {
	constructFormInfoDataFromAPI,
	constructFormQuestionItemsDataFromAPI
} from './utils/google-api';
import type { TGoogleFormAPIResponse } from './utils/google-api/types';
import { mergeQuestionItemsData } from './utils/helpers';
import { constructQuestionItemsDataFromHTML } from './utils/html-parsing';

export async function fetchFormData(
	fetch: any,
	userId: string,
	formId: string
): Promise<TGETFormResponse> {
	const accessToken = await getAccessTokens(userId);

	const res = await fetch('/api/get-form', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ accessToken, formId })
	});

	const data: TGETFormResponse = await res.json();
	return data;
}

export async function submitForm() {
	console.log('submit form');
}

export async function constructFormData(
	htmlData: string,
	apiData: TGoogleFormAPIResponse
): Promise<{ info: TFormInfo; items: TFormItem[] }> {
	const htmlQuestionItemsData = constructQuestionItemsDataFromHTML(htmlData);
	const apiFormItemsData = constructFormQuestionItemsDataFromAPI(apiData);
	const items = mergeQuestionItemsData(htmlQuestionItemsData, apiFormItemsData);
	const info = await constructFormInfoDataFromAPI(apiData);

	return { info, items };
}
