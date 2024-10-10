import { signIn } from '$lib/firebase/auth';
import type { Actions } from './$types';

export const actions: Actions = { default: signIn };
