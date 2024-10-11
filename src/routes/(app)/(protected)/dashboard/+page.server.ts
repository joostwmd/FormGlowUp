import { createForm, getFormsOfUserById } from '$lib/firebase/utils';
import { DEFAULT_LOADER, DEFAULT_END_TEXT } from '$lib/form/constants';
import {
	constructFormInfoData,
	constructFormItemsData,
	extractFormId
} from '$lib/form/utils/client';

import { fetchFormData } from '$lib/form/utils/server';

import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (events) => {
	const session = await events.locals.auth();
	const forms = await getFormsOfUserById(session!.user!.id!);
	return forms;
};

export const actions = {
	create: async ({ request, fetch }) => {
		const data = await request.formData();

		const userId = data.get('userId') as string;
		const formId = extractFormId(data.get('editUrl') as string);

		const res = await handleCreateForm(fetch, userId!, formId!);

		if (res.success) {
			return redirect(302, `/form/${res.uid}/edit`);
		} else {
			return fail(422, { message: 'Failed to create form' });
		}
	}
};

async function handleCreateForm(fetch: any, userId: string, formId: string) {
	const { htmlData, formData } = await fetchFormData(fetch, userId, formId);
	const formInfo = await constructFormInfoData(formData);
	const formItems = await constructFormItemsData(htmlData, formData);

	const formStructure = {
		loader: DEFAULT_LOADER,
		endText: DEFAULT_END_TEXT,
		pages: formItems
	};

	const res = await createForm(userId, formId, formInfo, formStructure);
	return res;
}
