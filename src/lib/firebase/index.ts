import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyBoGv6I88j-Tim0lUCCx8urhqioN9cytfU',
	authDomain: 'form-enhancement-test.firebaseapp.com',
	projectId: 'form-enhancement-test',
	storageBucket: 'form-enhancement-test.appspot.com',
	messagingSenderId: '182251509760',
	appId: '1:182251509760:web:15cf1b5dd1a92b4e07a0e5'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
