import { createForm, deleteForm, getFormsOfUserById } from '$lib/firebase/utils';
import { DEFAULT_FORM_STYLE, CREATE_FORM_ERROR_MESSAGES } from '$lib/form/constants';
import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { constructFormData, fetchFormData } from '$lib/form';
import {
	checkForHMTLParsingError,
	checkIfFormIsSupported,
	checkIfFormShufflesQuestions,
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
	const validateLinkRes = validateGoogleFormEditUrl(editUrl);

	if (!validateLinkRes.valid) {
		return { success: false, message: validateLinkRes.message };
	}

	const formId = extractFormId(editUrl);
	const fetchRes = await fetchFormData(fetch, userId, formId!);

	if (fetchRes.success && fetchRes.data) {
		const isSupportedRes = checkIfFormIsSupported(
			fetchRes.data!.htmlData.firstFetch,
			fetchRes.data!.apiData
		);

		if (!isSupportedRes.isSupported) {
			return { success: false, message: isSupportedRes.message };
		}

		// const isShuffelingQuestionRes = checkIfFormShufflesQuestions(fetchRes.data.htmlData);
		// console.log('isSHuffleing', isShuffelingQuestionRes);

		// if (!isShuffelingQuestionRes.success) {
		// 	return { success: false, message: isShuffelingQuestionRes.message };
		// }

		const formData = await constructFormData(
			fetchRes.data.htmlData.firstFetch,
			fetchRes.data.apiData
		);

		if (!formData.success) {
			return { success: false, message: CREATE_FORM_ERROR_MESSAGES.FORM_CONSTRUCTION_ERROR };
		} else {
			const couldBeParsedRes = checkForHMTLParsingError(fetchRes.data.apiData, formData.items);

			if (!couldBeParsedRes.isParsed) {
				return { success: false, message: couldBeParsedRes.message };
			} else {
				const createRes = await createForm(
					userId,
					formData.info,
					formData.items,
					DEFAULT_FORM_STYLE
				);

				if (createRes.success) {
					return { success: true, uid: createRes.uid };
				} else {
					return { success: false, message: CREATE_FORM_ERROR_MESSAGES.UNEXPECTED_ERROR };
				}
			}
		}
	} else {
		return { success: false, message: 'Failed to update form' };
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
