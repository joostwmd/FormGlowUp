export type TForm = {
	uid: string;
	items: FormItem[];
	info: FormInfo;
	theme: FormTheme;
};

export type FormItem = GridItem | ChoicesItem | DateItem | TimeItem | ScaleItem | TextItem;

export type FinalFormItem = FormItem & {
	submitId: string;
};

export type GridItem = {
	type: string;
	columns: string[];
	rows: { title: string; submitId: string }[];
	validation: {
		isRequired: boolean;
	};
	displayData: ItemDisplayData;
};

export type ChoicesItem = {
	type: string;
	options: string[];
	validation: {
		isRequired: boolean;
	};
	displayData: ItemDisplayData;
};

export type DateItem = {
	type: string;
	validation: {
		isRequired: boolean;
	};
	attributes: {
		yearIncluded: boolean;
		timeIncluded: boolean;
	};
	displayData: ItemDisplayData;
};

export type TimeItem = {
	type: string;
	validation: {
		isRequired: boolean;
	};
	attributes: {
		isDuration: boolean;
	};
	displayData: ItemDisplayData;
};

export type ScaleItem = {
	type: string;
	validation: {
		isRequired: boolean;
	};
	attributes: {
		min: number;
		minLabel: string;
		max: number;
		maxLabel: string;
	};
	displayData: ItemDisplayData;
};

export type TextItem = {
	type: string;
	validation: {
		isRequired: boolean;
	};
	attributes: {
		isParagraph: boolean;
	};
	validation: {
		category?: string;
		type?: string;
		value?: string[];
		message?: string;
	};

	displayData: ItemDisplayData;
};

export type ItemDisplayData = {
	title?: string;
	description?: string;
	image?: {
		src: string;
		width: number?;
		alignmnet: string?;
	};
};

export type TGetFormResponse = {
	apiData: TGoogleFormAPIResponse;
	htmlData: string;
};

export type TConstructedHTMLData = {
	submitId: string;
	validation: {
		category?: string;
		type?: string;
		value?: string[];
		message?: string;
	};
};

export type TGoogleFormAPIResponse = {
	formId: string;
	info: {
		title: string;
		description: string;
		documentTitle: string;
	};
	settings: {
		quizSettings: {
			isQuiz: boolean;
		};
	};
	items: Array<TGoogleFormItemAPIData>;
	revisionId: string;
	responderUri: string;
	linkedSheetId: string;
};

export type TGoogleFormItemAPIData = {
	itemId: string;
	title: string;
	description: string;
	kind:
		| 'questionItem'
		| 'questionGroupItem'
		| 'pageBreakItem'
		| 'textItem'
		| 'imageItem'
		| 'videoItem';
	questionItem?: TGoogleFormQuestionItem;
	questionGroupItem?: TGoogleFormQuestionGroupItem;

	//cannot support page break item
	pageBreakItem?: {
		title: string;
		description: string;
	};
	//additional items not supported yet

	textItem?: {
		title: string;
		description: string;
	};
	imageItem?: {
		image: {
			contentUri: string;
			altText: string;
			properties: {
				alignment: 'LEFT' | 'RIGHT' | 'CENTER';
				width: number;
			};
		};
	};
	videoItem?: {
		video: {
			youtubeUri: string;
			properties: {
				alignment: 'LEFT' | 'RIGHT' | 'CENTER';
				width: number;
			};
		};
		caption: string;
	};
};

export type TGoogleFormQuestionItem = {
	question: TGoogleFormQuestion;
	image?: {
		contentUri: string;
		altText: string;
		properties: {
			alignment: 'LEFT' | 'RIGHT' | 'CENTER';
			width: number;
		};
	};
};

export type TGoogleFormQuestion = {
	questionId: string;
	required: boolean;
	grading?: {
		pointValue: number;
		correctAnswers: {
			answers: Array<{
				value: string;
			}>;
		};
		//can not support quizzes
		whenRight?: {
			text: string;
		};
		whenWrong?: {
			text: string;
		};
		generalFeedback?: {
			text: string;
		};
	};
	kind:
		| 'choiceQuestion'
		| 'textQuestion'
		| 'scaleQuestion'
		| 'dateQuestion'
		| 'timeQuestion'
		| 'fileUploadQuestion'
		| 'rowQuestion';
	choiceQuestion?: TGoogleFormChoiceQuestion;
	textQuestion?: TGoogleFormTextQuestion;
	scaleQuestion?: TGoogleFormScaleQuestion;
	dateQuestion?: TGoogleFormDateQuestion;
	timeQuestion?: TGoogleFormTimeQuestion;
	fileUploadQuestion?: TGoogleFormFileUploadQuestion;
	rowQuestion?: TGoogleFormRowQuestion;
};

export type TGoogleFormChoiceQuestion = {
	type: 'RADIO' | 'CHECKBOX' | 'DROP_DOWN';
	options: Array<{
		value: string;
		image?: {
			contentUri: string;
			altText: string;
			properties: {
				alignment: 'LEFT' | 'RIGHT' | 'CENTER';
				width: number;
			};
		};
		//Not supporet yet
		isOther?: boolean;
		goToAction?: 'NEXT_SECTION' | 'RESTART_FORM' | 'SUBMIT_FORM';
		goToSectionId?: string;
	}>;
	shuffle: boolean;
};

export type TGoogleFormTextQuestion = {
	paragraph: boolean;
};

export type TGoogleFormScaleQuestion = {
	low: number;
	high: number;
	lowLabel: string;
	highLabel: string;
};

export type TGoogleFormDateQuestion = {
	includeTime: boolean;
	includeYear: boolean;
};

export type TGoogleFormTimeQuestion = {
	duration: boolean;
};

export type TGoogleFormRowQuestion = {
	title: string;
};

export type TGoogleFormQuestionGroupItem = {
	questions: Array<TGoogleFormQuestion>;
	image?: {
		contentUri: string;
		altText: string;
		properties: {
			alignment: 'LEFT' | 'RIGHT' | 'CENTER';
			width: number;
		};
	};
	grid?: {
		columns: {
			type: 'RADIO' | 'CHECKBOX';
			options: Array<{
				value: string;
				image?: {
					contentUri: string;
					altText: string;
					properties: {
						alignment: 'LEFT' | 'RIGHT' | 'CENTER';
						width: number;
					};
				};
				isOther?: boolean;
				goToAction?: 'NEXT_SECTION' | 'RESTART_FORM' | 'SUBMIT_FORM';
				goToSectionId?: string;
			}>;
			shuffle: boolean;
		};
		shuffleQuestions: boolean;
	};
};
