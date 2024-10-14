import { createForm, deleteForm, getFormsOfUserById } from '$lib/firebase/utils';
import { DEFAULT_LOADER, DEFAULT_END_TEXT } from '$lib/form/constants';
import { fetchFormData } from '$lib/form/utils/server';
import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import {
	constructFormInfoData,
	constructFormItemsData,
	extractFormId
} from '$lib/form/utils/client';

export const load: PageServerLoad = async ({ locals, url, depends }) => {
	depends(url.pathname);
	const session = await locals.auth();
	const forms = await getFormsOfUserById(session!.user!.id!);

	return forms;
};

export const actions = {
	createForm: async ({ request, fetch }) => {
		const data = await request.formData();
		const userId = data.get('userId') as string;
		const formId = extractFormId(data.get('editUrl') as string);
		const res = await handleCreateForm(fetch, userId!, formId!);

		if (res.success) {
			return redirect(302, `/form/${res.uid}/edit`);
		} else {
			return fail(422, { message: 'Failed to create form' });
		}
	},

	deleteForm: async ({ request }) => {
		const data = await request.formData();
		const userId = data.get('userId') as string;
		const formId = data.get('formId') as string;

		try {
			const res = await handleDeleteForm(userId, formId);
			return res;
		} catch (e) {
			return fail(422, { message: 'Failed to delete form' });
		}
	}
};

async function handleCreateForm(fetch: any, userId: string, formId: string) {
	const { htmlData, formData } = await fetchFormData(fetch, userId, formId);
	const formInfo = await constructFormInfoData(formData);
	const formItems = await constructFormItemsData(htmlData, formData);
	console.log('form items', formItems);

	const formStructure = {
		loader: DEFAULT_LOADER,
		endText: DEFAULT_END_TEXT,
		questions: formItems
	};

	const res = await createForm(userId, formId, formInfo, formStructure);
	return res;
}

async function handleDeleteForm(userId: string, formId: string) {
	try {
		const res = await deleteForm(userId, formId);
		return res;
	} catch (e) {
		return fail(422, { message: 'Failed to delete form' });
	}
}
