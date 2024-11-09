import type { TGoogleFormAPIResponse } from './utils/google-api/types';

export type TForm = {
	uid: string;
	public: boolean;
	items: TFormItem[];
	info: TFormInfo;
	style: TFormStyle;
	pages: TFormPages;
};

export type TFormInfo = {
	formId: string;
	responderUri: string;
	collectsEmail: boolean;
	title: string;
	description: string;
	documentTitle: string;
};

export type TFormStyle = {
	theme: string;
	radius: number;
	font: string;
	mode: string;
};

export type TFormPage = {
	heading: string;
	message: string;
};

export type TFormPages = {
	welcome: TFormPage;
	goodbye: TFormPage;
};

export type TBaseFormItem = {
	submitId: string;
	type: string;
};

export type TFormItem = TGridItem | TChoicesItem | TDateItem | TTimeItem | TScaleItem | TTextItem;

export type TGridItem = TBaseFormItem & {
	columns: string[];
	rows: { title: string; submitId: string }[];
	validation: {
		isRequired: boolean;
	};
	attributes: {
		randomizeOrder: boolean;
		oneResponsePerColumn: boolean;
	};
	displayData: TItemDisplayData;
};

export type TChoicesItem = TBaseFormItem & {
	options: string[];
	validation: {
		isRequired: boolean;
	};
	attributes: {
		otherOption: boolean;
		randomizeOrder: boolean;
	};
	displayData: TItemDisplayData;
};

export type TDateItem = TBaseFormItem & {
	validation: {
		isRequired: boolean;
	};
	attributes: {
		yearIncluded: boolean;
		timeIncluded: boolean;
	};
	displayData: TItemDisplayData;
};

export type TTimeItem = TBaseFormItem & {
	validation: {
		isRequired: boolean;
	};
	attributes: {
		isDuration: boolean;
	};
	displayData: TItemDisplayData;
};

export type TScaleItem = TBaseFormItem & {
	validation: {
		isRequired: boolean;
	};
	attributes: {
		min: number;
		minLabel: string;
		max: number;
		maxLabel: string;
	};
	displayData: TItemDisplayData;
};

export type TTextItem = TBaseFormItem & {
	validation: {
		isRequired: boolean;
		category?: number;
		type?: number;
		value?: string[];
		message?: string;
	};
	attributes: {
		isParagraph: boolean;
	};
	displayData: TItemDisplayData;
};

export type TItemDisplayData = {
	title?: string;
	description?: string;
	image?: {
		src: string;
		width?: number;
		alignment?: string;
	};
};

export type TGETFormResponse = {
	apiData: TGoogleFormAPIResponse;
	htmlData: string;
};
