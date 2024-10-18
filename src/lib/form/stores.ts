import { writable } from 'svelte/store';
import type { TFormInfo, TFormItem, TFormPages, TFormStyle } from './types';

//for submit
export type TFormDataStore = {
	[key: string]: string | number | null;
};

export const formDataStore = writable<TFormDataStore>({});

export type TFormStore = {
	info: TFormInfo;
	items: TFormItem[];
	style: TFormStyle;
	pages: TFormPages;
};

export const formStore = writable<TFormStore>({
	info: {
		description: '',
		documentTitle: '',
		formId: '',
		responderUri: '',
		title: ''
	},
	items: [],
	style: {
		theme: '',
		radius: 0,
		font: '',
		mode: 'light'
	},
	pages: {
		welcome: {
			heading: '',
			message: ''
		},

		goodbye: {
			heading: '',
			message: ''
		}
	}
});

// export type TFormState = {
// 	formInfo: TFormInfoStore;
// 	formStyle: TFormStyleOld;
// 	formStructure: string;
// };

// export const formStateStore = writable<TFormState>({
// 	formInfo: {
// 		description: '',
// 		documentTitle: '',
// 		formId: '',
// 		responderUri: '',
// 		title: ''
// 	},
// 	formStyle: {
// 		theme: '',
// 		radius: 0,
// 		font: '',
// 		mode: 'light'
// 	},
// 	formStructure: ''
// });
