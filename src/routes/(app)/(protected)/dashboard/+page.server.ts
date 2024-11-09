import { createForm, deleteForm, getFormsOfUserById } from '$lib/firebase/utils';
import {
	DEFAULT_FORM_STYLE,
	DEFAULT_FORM_PAGES,
	CREATE_FORM_ERROR_MESSAGES
} from '$lib/form/constants';
import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { constructFormData, fetchFormData } from '$lib/form';
import {
	checkIfFormIsSupported,
	extractFormId,
	validateGoogleFormEditUrl
} from '$lib/form/utils/helpers';
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
		const editUrl = data.get('editUrl') as string;

		const res = await handleCreateForm(fetch, userId, editUrl);

		if (res.success) {
			return redirect(302, `/form/${res.uid}/edit`);
		} else {
			return fail(422, { message: res.message });
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

async function handleCreateForm(fetch: any, userId: string, editUrl: string) {
	const validationRes = validateGoogleFormEditUrl(editUrl);

	if (!validationRes.valid) {
		return { success: false, message: validationRes.message };
	}

	const formId = extractFormId(editUrl);

	const fetchRes = await fetchFormData(fetch, userId, formId!);

	if (!fetchRes.success) {
		return { success: false, message: CREATE_FORM_ERROR_MESSAGES.FORM_NOT_FOUND };
	}

	const formData = await constructFormData(fetchRes.data!.htmlData, fetchRes.data!.apiData);

	const analyzeRes = checkIfFormIsSupported(
		fetchRes.data!.htmlData,
		fetchRes.data!.apiData,
		formData
	);

	if (!analyzeRes.isSupported) {
		return { success: false, message: analyzeRes.message };
	}

	const createRes = await createForm(
		userId,
		formId!,
		formData.info,
		formData.items,
		DEFAULT_FORM_STYLE,
		DEFAULT_FORM_PAGES
	);

	if (createRes.success) {
		return { success: true, uid: createRes.uid };
	} else {
		return { success: false, message: 'Failed to create form' };
	}
}

async function handleDeleteForm(userId: string, formId: string) {
	try {
		const res = await deleteForm(userId, formId);
		return res;
	} catch (e) {
		return fail(422, { message: 'Failed to delete form' });
	}
}
