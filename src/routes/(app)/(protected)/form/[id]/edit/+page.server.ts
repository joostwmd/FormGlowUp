import { getFormById, updateForm } from '$lib/firebase/utils.js';
import { constructFormData, fetchFormData } from '$lib/form';
import { fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { TForm, TFormInfo, TFormItem, TFormStyle } from '$lib/form/types';
import type { TFormStore } from '$lib/form/stores';
import {
	checkForHMTLParsingError,
	checkIfFormIsSupported
} from '$lib/form/utils/form-creation-validation';

export const load: PageServerLoad = async ({ params }) => {
	const uid = params.id;
	const formDoc = (await getFormById(uid)) as TForm;

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

		if (res.success) {
			return { ...res };
		} else {
			return fail(422, { message: res.message });
		}
	},

	updateForm: async ({ request }) => {
		const data = await request.formData();
		const userId = data.get('userId') as string;
		const formId = data.get('formId') as string;

		const formData = JSON.parse(data.get('formData') as unknown as string) as TFormStore;

		const res = await handleUpdateForm(
			userId,
			formId,
			formData.info,
			formData.items,
			formData.style
		);

		if (res.success && res.data) {
			return {
				...res.data
			};
		} else {
			return fail(422, {
				message: 'Failed to update form. This is an error on our end, please contact us.'
			});
		}
	}
};

async function handleRefreshForm(fetch: any, userId: string, formId: string) {
	const fetchRes = await fetchFormData(fetch, userId, formId);
	if (fetchRes.success && fetchRes.data) {
		const isSupportedRes = checkIfFormIsSupported(
			fetchRes.data!.htmlData.firstFetch,
			fetchRes.data!.apiData
		);

		if (!isSupportedRes.isSupported) {
			return { success: false, message: isSupportedRes.message };
		}

		const formData = await constructFormData(
			fetchRes.data.htmlData.firstFetch,
			fetchRes.data.apiData
		);

		if (!formData.success) {
			return { success: false, message: 'Failed to construct form data' };
		} else {
			const couldBeParsedRes = checkForHMTLParsingError(fetchRes.data.apiData, formData.items);

			if (!couldBeParsedRes.isParsed) {
				return { success: false, message: couldBeParsedRes.message };
			} else {
				return { success: true, info: formData.info, items: formData.items };
			}
		}
	} else {
		return { success: false, message: 'Failed to update form' };
	}
}

async function handleUpdateForm(
	userId: string,
	formId: string,
	info: TFormInfo,
	items: TFormItem[],
	style: TFormStyle
) {
	const res = await updateForm(userId, formId, info, items, style);

	if (res.success) {
		return { success: true, data: res.data };
	} else {
		return { success: false };
	}
}
