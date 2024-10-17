import { getAccessTokens } from '$lib/firebase/utils';
import { constructQuestionItemsDataFromHTML } from './html';
import { constructFormInfoDataFromAPI, constructFormQuestionItemsDataFromAPI } from './api';
import { mergeQuestionItemsData } from './helpers';
import type { TGetFormResponse } from '../types';

export async function fetchFormData(
	fetch: any,
	userId: string,
	formId: string
): Promise<TGetFormResponse> {
	const accessToken = await getAccessTokens(userId);

	const res = await fetch('/api/get-form', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ accessToken, formId })
	});

	const data: TGetFormResponse = await res.json();
	return data;
}

export async function constructForm(htmlString: string, apiData: any) {
	const htmlQuestionItemsData = constructQuestionItemsDataFromHTML(htmlString);
	const apiFormItemsData = constructFormQuestionItemsDataFromAPI(apiData);
	const formQuestionItems = mergeQuestionItemsData(htmlQuestionItemsData, apiFormItemsData);
	console.log('formQuestionItems', formQuestionItems);
	// const formInfo = await constructFormInfoDataFromAPI(apiData);
}
