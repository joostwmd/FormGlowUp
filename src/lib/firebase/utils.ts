import type { TFormInfo, TFormItem, TFormPages, TFormStyle } from '$lib/form/types';
import { firestore } from './auth';

export async function getFormsOfUserById(userId: string) {
	try {
		const formsRef = firestore.collection('users').doc(userId).collection('forms');
		const formsSnapshot = await formsRef.get();
		const data = formsSnapshot.docs.map((doc) => doc.data());

		return {
			forms: data
		};
	} catch (e) {
		console.log('Error getting user forms:', e);
		return { forms: [] };
	}
}

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
	} catch (e) {
		console.log('Error getting form:', e);
		return null;
	}
}

export async function createForm(
	userId: string,
	googleFormId: string,
	info: TFormInfo,
	items: TFormItem[],
	style: TFormStyle,
	pages: TFormPages
) {
	try {
		const newFormRef = firestore.collection(`users/${userId}/forms`).doc();
		await newFormRef.set({
			//googleFormId: googleFormId,
			uid: newFormRef.id,
			public: false,
			info: info,
			items: items,
			style: style,
			pages: pages
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
	formInfo: object,
	formStructure: object,
	formStyle: object
) {
	try {
		const formRef = firestore.collection(`users/${userId}/forms`).doc(uid);
		await formRef.set({ formInfo, formStructure, formStyle }, { merge: true });

		const updatedDoc = await formRef.get();

		if (!updatedDoc.exists) {
			throw new Error('Document does not exist after update');
		}

		console.log('Document data after update:', updatedDoc.data());

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
