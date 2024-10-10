import { SvelteKitAuth } from '@auth/sveltekit';
import { FirestoreAdapter, initFirestore } from '@auth/firebase-adapter';
import Google from '@auth/sveltekit/providers/google';
import { cert } from 'firebase-admin/app';
import {
	AUTH_FIREBASE_CLIENT_EMAIL,
	AUTH_FIREBASE_PROJECT_ID,
	AUTH_FIREBASE_PRIVATE_KEY,
	AUTH_GOOGLE_ID,
	AUTH_GOOGLE_SECRET
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
					access_type: 'offline',
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
		async session({ session, user }) {
			const googleAccount = await firestore
				.collection('accounts')
				.where('userId', '==', user.id)
				.where('provider', '==', 'google')
				.get();

			if (googleAccount.empty) {
				console.error('No matching account found');
				return session;
			}

			const accountDoc = googleAccount.docs[0];
			const account = accountDoc.data();

			if (account && account.expires_at * 1000 < Date.now()) {
				try {
					const response = await fetch('https://oauth2.googleapis.com/token', {
						method: 'POST',
						body: new URLSearchParams({
							client_id: AUTH_GOOGLE_ID,
							client_secret: AUTH_GOOGLE_SECRET,
							grant_type: 'refresh_token',
							refresh_token: account.refresh_token
						})
					});

					if (!response.ok) {
						console.error('Failed to refresh token');
						return {
							...session
						};
					}

					const data = await response.json();

					await firestore
						.collection('accounts')
						.doc(accountDoc.id)
						.update({
							access_token: data.access_token,
							refresh_token: data.refresh_token ?? account.refresh_token,
							expires_at: Date.now() + data.expires_in
						});
				} catch (error) {
					console.error('Error refreshing access_token', error);
				}
			} else {
				console.log('token is still valid');
			}

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
