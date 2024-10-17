import { writable } from 'svelte/store';
import type { TFormInfo, TFormItem, TFormTheme } from './types';

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
	questions: {
		type: string;
		title: string | null;
		data: { submitId: string; [key: string]: any };
	}[];
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

type TFormPage = {
	heading: string;
	message: string;
};

type TFormPages = {
	welcome: TFormPage;
	goodbye: TFormPage;
};

export type TFormStore = {
	info: TFormInfo;
	item: TFormItem[];
	theme: TFormTheme;
	pages: TFormPages;
};
