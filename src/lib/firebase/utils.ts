import type { TFormInfo, TFormItem, TFormStyle } from '$lib/form/types';
import { firestore } from './auth';

export async function getFormsOfUserById(userId: string) {
	try {
		const formsRef = firestore.collection('users').doc(userId).collection('forms');
		const formsSnapshot = await formsRef.get();
		const data = formsSnapshot.docs.map((doc) => doc.data());
		return data;
	} catch (e) {
		console.log('Error getting user forms:', e);
		return { forms: [] };
	}
}

/** Direct read — no composite / collection-group index (path: users/{userId}/forms/{formUid}). */
export async function getFormForUser(userId: string, formUid: string) {
	try {
		const snap = await firestore
			.collection('users')
			.doc(userId)
			.collection('forms')
			.doc(formUid)
			.get();

		if (!snap.exists) {
			console.log('Form not found');
			return null;
		}
		return snap.data();
	} catch (e) {
		console.log('Error getting form:', e);
		return null;
	}
}

/**
 * Resolve a form by its public `uid` across all users (collection group).
 * Requires a single-field index override for `uid` on collection group `forms`
 * (see `firestore.indexes.json` — deploy with Firebase CLI or add the same override in console).
 */
export async function getFormById(uid: string) {
	try {
		const formsCollectionGroup = firestore.collectionGroup('forms');
		const querySnapshot = await formsCollectionGroup.where('uid', '==', uid).get();

		if (!querySnapshot.empty) {
			const doc = querySnapshot.docs[0];
			return doc.data();
		} else {
			console.log('Form not found');
			return null;
		}
	} catch (e: unknown) {
		const err = e as { message?: string; details?: string; cause?: { message?: string } };
		const parts = [err.message, err.details, err.cause?.message].filter(Boolean);
		const text = parts.join('\n');
		console.error('Error getting form (collection group):', text || e);
		const urlMatch = text.match(/https:\/\/console\.firebase\.google\.com[^\s"'<>]+/);
		if (urlMatch) {
			console.error('Open this URL to create the required Firestore index:\n', urlMatch[0]);
		}
		return null;
	}
}

export async function createForm(
	userId: string,
	info: TFormInfo,
	items: TFormItem[],
	style: TFormStyle
) {
	try {
		const newFormRef = firestore.collection(`users/${userId}/forms`).doc();
		await newFormRef.set({
			uid: newFormRef.id,
			public: true,
			info: info,
			items: items,
			style: style
		});

		return { success: true, uid: newFormRef.id };
	} catch (e) {
		console.error('Error adding document: ', e);
		return { success: false };
	}
}

export async function updateForm(
	userId: string,
	uid: string,
	info: TFormInfo,
	items: TFormItem[],
	style: TFormStyle
) {
	try {
		const formRef = firestore.collection(`users/${userId}/forms`).doc(uid);
		await formRef.set({ info, items, style }, { merge: true });

		const updatedDoc = await formRef.get();

		if (!updatedDoc.exists) {
			throw new Error('Document does not exist after update');
		}
		return { success: true, data: updatedDoc.data() };
	} catch (e: any) {
		console.error('Error updating document: ', e);
		return { success: false, error: e.message };
	}
}

export async function getUserById(userId: string) {
	try {
		const userDocRef = firestore.collection('users').doc(userId);
		const userDoc = await userDocRef.get();

		if (!userDoc.exists) {
			return null;
		}

		return userDoc.data();
	} catch (e) {
		console.log('Error getting user:', e);
		return null;
	}
}

export async function getAccessTokens(userId: string) {
	console.log('userId', userId);
	try {
		const accountCollectionRef = firestore.collection('accounts');
		const querySnapshot = await accountCollectionRef.where('userId', '==', userId).get();

		if (querySnapshot.empty) {
			console.log('No documents found for user ID:', userId);
			return null;
		}

		const accountDoc = querySnapshot.docs[0];
		const accountData = accountDoc.data();
		return accountData.access_token;
	} catch (e) {
		console.log('Error getting user:', e);
		return null;
	}
}

export async function createUser(userId: string) {
	try {
		const userRef = firestore.collection('users').doc(userId);
		await userRef.set({
			uid: userId
		});

		return { success: true };
	} catch (e) {
		console.error('Error adding document: ', e);
		return { success: false };
	}
}

export async function deleteForm(userId: string, formId: string) {
	try {
		const formRef = firestore.collection(`users/${userId}/forms`).doc(formId);
		await formRef.delete();

		return { success: true };
	} catch (e) {
		console.error('Error deleting document: ', e);
		return { success: false };
	}
}
