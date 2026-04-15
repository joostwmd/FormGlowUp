import { getFormById, getFormForUser } from '$lib/firebase/utils.js';
import type { TForm } from '$lib/form/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {
	const uid = params.id;
	const session = await locals.auth();
	const userId = session?.user?.id;

	// Prefer direct path when signed in (preview from editor) — no collection-group index.
	let formDoc = userId ? ((await getFormForUser(userId, uid)) as TForm | null) : null;
	if (!formDoc) {
		formDoc = (await getFormById(uid)) as TForm | null;
	}

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
