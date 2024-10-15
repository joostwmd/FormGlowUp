import { getAccessTokens } from '$lib/firebase/utils';
import { constructQuestionItemsDataFromHTML } from './html';
import { constructFormInfoDataFromAPI, constructFormQuestionItemsDataFromAPI } from './api';
import { mergeQuestionItemsData } from './helpers';

export async function fetchFormData(fetch: any, userId: string, formId: string) {
	const accessToken = await getAccessTokens(userId);

	const res = await fetch('/api/get-form', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ accessToken, formId })
	});

	const data = await res.json();
	return data;
}

export async function constructForm(htmlString: string, apiData: any) {
	const htmlQuestionItemsData = constructQuestionItemsDataFromHTML(htmlString);
	const apiFormItemsData = constructFormQuestionItemsDataFromAPI(apiData);
	const formQuestionItems = mergeQuestionItemsData(htmlQuestionItemsData, apiFormItemsData);
	const formInfo = await constructFormInfoDataFromAPI(apiData);

	console.log('formQuestionItems:', formQuestionItems);
	console.log('formInfo:', formInfo);
}
