// src/routes/signin/+page.server.ts
import { signIn } from '$lib/auth';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const actions: Actions = { default: signIn };

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth();
	if (session) {
		//throw redirect(302, '/dashboard');
	}
};
