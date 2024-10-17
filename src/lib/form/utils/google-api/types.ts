import {
	GOOGLE_API_CHOICE_QUESTION,
	GOOGLE_API_IMAGE_ITEM,
	GOOGLE_API_PAGE_BREAK_ITEM,
	GOOGLE_API_QUESTION_GROUP_ITEM,
	GOOGLE_API_TEXT_ITEM,
	GOOGLE_API_VIDEO_ITEM,
	GOOGLE_API_TEXT_QUESTION,
	GOOGLE_API_SCALE_QUESTION,
	GOOGLE_API_DATE_QUESTION,
	GOOGLE_API_TIME_QUESTION,
	GOOGLE_API_FILE_UPLOAD_QUESTION,
	GOOGLE_API_ROW_QUESTION,
	GOOGLE_API_RADIO,
	GOOGLE_API_CHECKBOX,
	GOOGLE_API_DROP_DOWN,
	GOOGLE_API_LEFT,
	GOOGLE_API_RIGHT,
	GOOGLE_API_CENTER,
	GOOGLE_API_NEXT_SECTION,
	GOOGLE_API_RESTART_FORM,
	GOOGLE_API_SUBMIT_FORM
} from './constants';

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
		| typeof GOOGLE_API_CHOICE_QUESTION
		| typeof GOOGLE_API_QUESTION_GROUP_ITEM
		| typeof GOOGLE_API_PAGE_BREAK_ITEM
		| typeof GOOGLE_API_TEXT_ITEM
		| typeof GOOGLE_API_IMAGE_ITEM
		| typeof GOOGLE_API_VIDEO_ITEM;
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
				alignment: typeof GOOGLE_API_LEFT | typeof GOOGLE_API_RIGHT | typeof GOOGLE_API_CENTER;
				width: number;
			};
		};
	};
	videoItem?: {
		video: {
			youtubeUri: string;
			properties: {
				alignment: typeof GOOGLE_API_LEFT | typeof GOOGLE_API_RIGHT | typeof GOOGLE_API_CENTER;
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
			alignment: typeof GOOGLE_API_LEFT | typeof GOOGLE_API_RIGHT | typeof GOOGLE_API_CENTER;
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
		| typeof GOOGLE_API_CHOICE_QUESTION
		| typeof GOOGLE_API_TEXT_QUESTION
		| typeof GOOGLE_API_SCALE_QUESTION
		| typeof GOOGLE_API_DATE_QUESTION
		| typeof GOOGLE_API_TIME_QUESTION
		| typeof GOOGLE_API_FILE_UPLOAD_QUESTION
		| typeof GOOGLE_API_ROW_QUESTION;
	choiceQuestion?: TGoogleFormChoiceQuestion;
	textQuestion?: TGoogleFormTextQuestion;
	scaleQuestion?: TGoogleFormScaleQuestion;
	dateQuestion?: TGoogleFormDateQuestion;
	timeQuestion?: TGoogleFormTimeQuestion;
	fileUploadQuestion?: TGoogleFormFileUploadQuestion;
	rowQuestion?: TGoogleFormRowQuestion;
};

export type TGoogleFormChoiceQuestion = {
	type: typeof GOOGLE_API_RADIO | typeof GOOGLE_API_CHECKBOX | typeof GOOGLE_API_DROP_DOWN;
	options: Array<{
		value: string;
		image?: {
			contentUri: string;
			altText: string;
			properties: {
				alignment: typeof GOOGLE_API_LEFT | typeof GOOGLE_API_RIGHT | typeof GOOGLE_API_CENTER;
				width: number;
			};
		};
		//Not supported yet
		isOther?: boolean;
		goToAction?:
			| typeof GOOGLE_API_NEXT_SECTION
			| typeof GOOGLE_API_RESTART_FORM
			| typeof GOOGLE_API_SUBMIT_FORM;
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

export type TGoogleFormFileUploadQuestion = {
	maxFileSize: number;
	maxFiles: number;
	fileTypes: string[];
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
			alignment: typeof GOOGLE_API_LEFT | typeof GOOGLE_API_RIGHT | typeof GOOGLE_API_CENTER;
			width: number;
		};
	};
	grid?: {
		columns: {
			type: typeof GOOGLE_API_RADIO | typeof GOOGLE_API_CHECKBOX;
			options: Array<{
				value: string;
				image?: {
					contentUri: string;
					altText: string;
					properties: {
						alignment: typeof GOOGLE_API_LEFT | typeof GOOGLE_API_RIGHT | typeof GOOGLE_API_CENTER;
						width: number;
					};
				};
				isOther?: boolean;
				goToAction?:
					| typeof GOOGLE_API_NEXT_SECTION
					| typeof GOOGLE_API_RESTART_FORM
					| typeof GOOGLE_API_SUBMIT_FORM;
				goToSectionId?: string;
			}>;
			shuffle: boolean;
		};
		shuffleQuestions: boolean;
	};
};

export type TGoogleApiAlignment =
	| typeof GOOGLE_API_LEFT
	| typeof GOOGLE_API_RIGHT
	| typeof GOOGLE_API_CENTER;
