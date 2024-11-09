import { getAccessTokens } from '$lib/firebase/utils';
import type { TFormInfo, TFormItem, TGETFormResponse } from './types';
import {
	constructFormInfoDataFromAPI,
	constructFormQuestionItemsDataFromAPI
} from './utils/google-api';
import type { TGoogleFormAPIResponse } from './utils/google-api/types';
import {
	checkForUserEmailCollection,
	constructUserEmailItem,
	mergeQuestionItemsData
} from './utils/helpers';
import { constructQuestionItemsDataFromHTML } from './utils/html-parsing';

export async function fetchFormData(
	fetch: any,
	userId: string,
	formId: string
): Promise<{ success: boolean; data?: TGETFormResponse }> {
	const accessToken = await getAccessTokens(userId);

	const res = await fetch('/api/get-form', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ accessToken, formId })
	});

	const data = await res.json();

	if (data.error) {
		return {
			success: false
		};
	}

	return {
		success: true,
		data: data
	};
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

	const collectsEmail = checkForUserEmailCollection(htmlData);
	if (collectsEmail) {
		const emailItem: TFormItem = constructUserEmailItem();
		items.unshift(emailItem);
	}

	const info = await constructFormInfoDataFromAPI(apiData);

	const formInfo: TFormInfo = {
		...info,
		collectsEmail
	};

	return { info: formInfo, items };
}
