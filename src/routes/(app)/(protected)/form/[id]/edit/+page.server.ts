import { getFormById } from '$lib/firebase/utils.js';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const uid = params.id;
	const formDoc = await getFormById(uid);

	if (!formDoc) {
		return {
			status: 404
		};
	}

	return {
		formId: uid,
		formData: formDoc
	};
};
