import { fetchFormItems } from '$lib/form/utils.js';
import { getFormById } from '$lib/firebase/utils.js';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params, fetch }) => {
	const uid = params.id;
	const formDoc = await getFormById(uid);
	console.log('formDoc', formDoc);

	if (!formDoc) {
		return {
			status: 404
		};
	}

	//TYP=: formStlye
	const formStyle = formDoc.formStlye;
	const form = await fetchFormItems(fetch);
	//console.log('form', form);
	return {
		formId: uid,
		form: form,
		formStyle: formStyle
	};
};
