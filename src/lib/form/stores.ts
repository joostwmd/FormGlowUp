import { writable } from 'svelte/store';
import type { TFormInfo, TFormItem, TFormStyle } from './types';

//for submit
export type TFormDataStore = {
	[key: string]: string | number | null;
};

export const formDataStore = writable<TFormDataStore>({});

export type TFormStore = {
	info: TFormInfo;
	items: TFormItem[];
	style: TFormStyle;
};

const emptyFormStore = (): TFormStore => ({
	info: {
		description: '',
		documentTitle: '',
		formId: '',
		responderUri: '',
		title: '',
		collectsEmail: false
	},
	items: [],
	style: {
		theme: '',
		radius: 0,
		font: '',
		mode: 'light'
	}
});

export const localFormStore = writable<TFormStore>(emptyFormStore());
export const dbFormStore = writable<TFormStore>(emptyFormStore());
