import { getFormById, updateForm } from '$lib/firebase/utils.js';
import { constructFormInfoData, constructFormItemsData } from '$lib/form/utils/client';
import { constructForm, fetchFormData } from '$lib/form/utils';
import { fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { TFormInfoStore, TFormStrucutre, TFormStyle } from '$lib/form/stores';

export const load: PageServerLoad = async ({ params }) => {
	const uid = params.id;
	const formDoc = await getFormById(uid);

	if (!formDoc) {
		return {
			status: 404
		};
	}

	return {
		uid: uid,
		form: formDoc
	};
};

export const actions = {
	refreshForm: async ({ request, fetch }) => {
		const data = await request.formData();
		const userId = data.get('userId') as string;
		const formId = data.get('formId') as string;

		const res = await handleRefreshForm(fetch, userId, formId);
		if (res) {
			return {
				formInfo: res.formInfo,
				formItems: res.formItems,
				htmlData: res.htmlData
			};
		} else {
			return fail(422, { message: 'Failed to refresh form' });
		}
	},

	updateForm: async ({ request }) => {
		const data = await request.formData();
		const userId = data.get('userId') as string;
		const formId = data.get('formId') as string;
		const formInfo = JSON.parse(data.get('formInfo') as string);
		const formStructure = JSON.parse(data.get('formStructure') as string);
		console.log('form structure', formStructure);
		const formStyle = JSON.parse(data.get('formStyle') as string);
		const res = await handleUpdateForm(userId, formId, formInfo, formStructure, formStyle);

		if (res.success && res.data) {
			return {
				...res.data
			};
		} else {
			return fail(422, { message: 'Failed to update form' });
		}
	}
};

async function handleRefreshForm(fetch: any, userId: string, formId: string) {
	const { htmlData, formData } = await fetchFormData(fetch, userId, formId);
	const formInfo = await constructFormInfoData(formData);
	const formItems = await constructFormItemsData(htmlData, formData);

	const test = await constructForm(htmlData, formData);
	console.log('test construct form', test);

	return { formInfo, formItems };
}

async function handleUpdateForm(
	userId: string,
	formId: string,
	formInfo: TFormInfoStore,
	formStructure: TFormStrucutre,
	formStyle: TFormStyle
) {
	const res = await updateForm(userId, formId, formInfo, formStructure, formStyle);

	if (res.success) {
		return { success: true, data: res.data };
	} else {
		return { success: false };
	}
}
