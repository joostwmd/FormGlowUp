import { writable } from 'svelte/store';
import type { TFormInfo, TFormItem, TFormPages, TFormStyle } from './types';

export type TFormStyleOld = {
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
	formStyle: TFormStyleOld;
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

export type TFormStore = {
	info: TFormInfo;
	items: TFormItem[];
	style: TFormStyle;
	pages: TFormPages;
};
