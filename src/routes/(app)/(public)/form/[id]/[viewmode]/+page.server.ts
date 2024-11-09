import { getFormById } from '$lib/firebase/utils.js';
import type { TForm } from '$lib/form/types';
import type { PageServerLoad } from './$types';

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
