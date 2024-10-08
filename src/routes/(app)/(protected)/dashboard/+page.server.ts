import { getFormsOfUserById } from '$lib/firebase/utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (events) => {
	const session = await events.locals.auth();
	const forms = await getFormsOfUserById(session!.user!.id!);
	return forms;
};
