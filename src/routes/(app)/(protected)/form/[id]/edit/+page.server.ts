import { getFormById, updateForm } from '$lib/firebase/utils.js';
import { constructFormData, fetchFormData } from '$lib/form';
import { fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { TForm, TFormInfo, TFormItem, TFormStyle } from '$lib/form/types';
import type { TFormStore } from '$lib/form/stores';

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
		if (res) {
			return {
				...res
			};
		} else {
			return fail(422, { message: 'Failed to refresh form' });
		}
	},

	updateForm: async ({ request }) => {
		const data = await request.formData();
		const userId = data.get('userId') as string;
		const formId = data.get('formId') as string;

		const formStore = JSON.parse(data.get('formStore') as unknown as string) as TFormStore;

		const res = await handleUpdateForm(
			userId,
			formId,
			formStore.info,
			formStore.items,
			formStore.style
		);

		if (res.success && res.data) {
			return {
				...res.data
			};
		} else {
			return fail(422, { message: 'Failed to update form' });
		}
	}
};

async function handleRefreshForm(
	fetch: any,
	userId: string,
	formId: string
): Promise<{ info: TFormInfo; items: TFormItem[] }> {
	const { htmlData, apiData } = await fetchFormData(fetch, userId, formId);
	const formData = await constructFormData(htmlData, apiData);

	return { info: formData.info, items: formData.items };
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
