import { SvelteKitAuth } from '@auth/sveltekit';
import { FirestoreAdapter, initFirestore } from '@auth/firebase-adapter';
import Google from '@auth/sveltekit/providers/google';
import { cert } from 'firebase-admin/app';
import {
	AUTH_FIREBASE_CLIENT_EMAIL,
	AUTH_FIREBASE_PROJECT_ID,
	AUTH_FIREBASE_PRIVATE_KEY
} from '$env/static/private';

export const firestore = initFirestore({
	credential: cert({
		projectId: AUTH_FIREBASE_PROJECT_ID,
		clientEmail: AUTH_FIREBASE_CLIENT_EMAIL,
		privateKey: AUTH_FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
	})
});

export const { handle, signIn } = SvelteKitAuth({
	providers: [
		Google({
			authorization: {
				params: {
					scope: [
						'https://www.googleapis.com/auth/userinfo.profile',
						'https://www.googleapis.com/auth/forms.body.readonly',
						'openid'
					].join(' ')
				}
			}
		})
	],
	callbacks: {
		async session({ session }) {
			return {
				...session
			};
		}
	},
	adapter: FirestoreAdapter(firestore),
	pages: {
		signIn: '/signin'
	}
});
