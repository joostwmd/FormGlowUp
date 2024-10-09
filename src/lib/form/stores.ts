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
	pages: object;
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
	[key: string]: any;
};

export const formDataStore = writable<TFormDataStore>({});

export type TFormState = {
	formInfo: TFormInfoStore;
	formStyle: TFormStyle;
	formStructure: string;
};

export const formStateStore = writable<TFormState>({
	formInfo: {
		description: '',
		documentTitle: '',
		formId: '',
		responderUri: '',
		title: ''
	},
	formStyle: {
		theme: '',
		radius: 0,
		font: '',
		mode: 'light'
	},
	formStructure: ''
});
