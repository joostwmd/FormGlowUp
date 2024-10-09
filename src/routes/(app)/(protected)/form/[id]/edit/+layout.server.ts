import { getFormById } from '$lib/firebase/utils.js';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params, fetch }) => {
	const uid = params.id;
	const formDoc = await getFormById(uid);

	if (!formDoc) {
		return {
			status: 404
		};
	}

	//console.log('formDoc:', formDoc);

	return {
		formId: uid,
		formData: formDoc
	};
};
