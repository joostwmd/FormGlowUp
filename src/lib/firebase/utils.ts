import {
	collection,
	collectionGroup,
	doc,
	getDoc,
	getDocs,
	query,
	setDoc,
	where
} from 'firebase/firestore';
import { db } from './index';

export async function getFormsOfUserById(userId: string) {
	try {
		const userFormsCollection = collection(db, `users/${userId}/forms`);
		const userFormDocs = await getDocs(userFormsCollection);

		const forms: any[] = [];
		userFormDocs.forEach((doc) => {
			forms.push(doc.data());
		});

		return {
			forms
		};
	} catch (e) {
		console.log('Error getting user forms:', e);
		return { forms: [] };
	}
}

export async function getFormById(uid: string) {
	try {
		const formsCollectionGroup = collectionGroup(db, 'forms');
		const q = query(formsCollectionGroup, where('uid', '==', uid));
		const querySnapshot = await getDocs(q);

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
	formInfo: object,
	formItems: string
) {
	try {
		const newFormRef = doc(collection(db, `users/${userId}/forms`));
		await setDoc(newFormRef, {
			googleFormId: googleFormId,
			uid: newFormRef.id,
			public: false,
			formInfo,
			formItems
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
	formItems: string,
	formStyle: object
) {
	try {
		const formRef = doc(db, `users/${userId}/forms/${uid}`);
		await setDoc(formRef, { formInfo, formItems, formStyle }, { merge: true });

		return { success: true };
	} catch (e) {
		console.error('Error updating document: ', e);
		return { success: false };
	}
}

export async function getUserById(userId: string) {
	try {
		const userDocRef = doc(db, `users/${userId}`);
		const userDoc = await getDoc(userDocRef);

		if (!userDoc.exists()) {
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
		// Reference the collection
		const accountCollectionRef = collection(db, 'accounts');
		console.log('Collection reference:', accountCollectionRef);

		// Construct the query
		const q = query(accountCollectionRef, where('userId', '==', userId));
		console.log('Query:', q);

		// Execute the query
		const querySnapshot = await getDocs(q);
		console.log('Query snapshot:', querySnapshot);

		// Check if the query returned any documents
		if (querySnapshot.empty) {
			console.log('No documents found for user ID:', userId);
			return null;
		}

		// Log the document data
		const accountDoc = querySnapshot.docs[0];
		const accountData = accountDoc.data();
		return accountData.access_token;
		return accountDoc.data();
	} catch (e) {
		console.log('Error getting user:', e);
		return null;
	}
}

export async function createUser(userId: string) {
	try {
		const userRef = doc(db, `users/${userId}`);
		await setDoc(userRef, {
			uid: userId
		});

		return { success: true };
	} catch (e) {
		console.error('Error adding document: ', e);
		return { success: false };
	}
}
