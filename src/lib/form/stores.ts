import { writable } from 'svelte/store';

export type TFormStyle = {
	theme: string;
	radius: number;
	font: string;
	mode: 'light' | 'dark';
};

export const formStyleStore = writable<TFormStyle>();

export type TFormStrucutre = {
	loader: string;
	endText: string;
	items: object[];
};

export const formStructureStore = writable<TFormStrucutre>();

export type TFormInfoStore = {
	description: string;
	documentTitle: string;
	formId: string;
	responderUri: string;
	title: string;
};

export const formInfoStore = writable<TFormInfoStore>();

//for submit
export type TFormDataStore = {
	[key: string]: any; // Adjust the type according to your form structure
};

export const formDataStore = writable<TFormDataStore>({});
