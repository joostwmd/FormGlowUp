//import { getFormById } from '$lib/firebase/utils.ts';
import { fetchFormItems } from '$lib/form/utils.js';
import { getFormById } from '$lib/firebase/utils.js';

export async function load({ params, locals }) {
	const session = await locals.auth();
	console.log('session', session);
	const uid = params.id;
	const formDoc = await getFormById(uid);

	if (!formDoc) {
		return {
			status: 404
		};
	}

	console.log('formDoc', formDoc);

	//extract formInfo from formDoc

	//fetch form items
	// const googleFormId = 'test';
	// const form = await fetchFormItems(googleFormId, session.);
	// return {
	// 	uid: uid
	// };

	// return {
	// 	uid: uid,
	// 	googleFormId: formDoc.googleFormId,
	// 	form: form
	// };
}
