import { createForm, deleteForm, getFormsOfUserById } from '$lib/firebase/utils';
import { DEFAULT_FORM_STYLE, DEFAULT_FORM_PAGES } from '$lib/form/constants';
import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { constructFormData, fetchFormData } from '$lib/form';
import { extractFormId } from '$lib/form/utils/helpers';
import type { TForm } from '$lib/form/types';

export const load: PageServerLoad = async ({ locals, url, depends }) => {
	depends(url.pathname);
	const session = await locals.auth();
	const forms = (await getFormsOfUserById(session!.user!.id!)) as TForm[];

	return {
		forms: forms
	};
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
	const { htmlData, apiData } = await fetchFormData(fetch, userId, formId);
	const formData = await constructFormData(htmlData, apiData);

	const res = await createForm(
		userId,
		formId,
		formData.info,
		formData.items,
		DEFAULT_FORM_STYLE,
		DEFAULT_FORM_PAGES
	);
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
