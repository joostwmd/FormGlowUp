import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (events) => {
	const session = await events.locals.auth();
	if (!session) {
		redirect(303, `/signin`);
	}

	return {
		session
	};
};
