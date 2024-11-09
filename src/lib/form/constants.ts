import type { TFormPages, TFormStyle } from './types';

export const OTHER_OPTION_VALUE = '__other_option__';
export const USER_EMAIL_VALUE = 'emailAddress';

export const TEXT_QUESTION_ITEM = 'TEXT_QUESTION';
export const PARAGRAPH_QUESTION_ITEM = 'PARAGRAPH_QUESTION';
export const RADIO_QUESTION_ITEM = 'RADIO_QUESTION';
export const CHECKBOX_QUESTION_ITEM = 'CHECKBOX_QUESTION';
export const SCALE_QUESTION_ITEM = 'SCALE_QUESTION';
export const DATE_QUESTION_ITEM = 'DATE_QUESTION';
export const TIME_QUESTION_ITEM = 'TIME_QUESTION';
export const DROPDOWN_QUESTION_ITEM = 'DROPDOWN_QUESTION';
export const RADIO_GRID_QUESTION_ITEM = 'RADIO_GRID_QUESTION';
export const CHECKBOX_GRID_QUESTION_ITEM = 'CHECKBOX_GRID_QUESTION';

export const QUESTION_ITEM_TYPES = [
	TEXT_QUESTION_ITEM,
	RADIO_QUESTION_ITEM,
	CHECKBOX_QUESTION_ITEM,
	SCALE_QUESTION_ITEM,
	DATE_QUESTION_ITEM,
	TIME_QUESTION_ITEM,
	DROPDOWN_QUESTION_ITEM,
	RADIO_GRID_QUESTION_ITEM,
	CHECKBOX_GRID_QUESTION_ITEM,
	PARAGRAPH_QUESTION_ITEM
];

export const CHOICE_ITEM_TYPES = [
	RADIO_QUESTION_ITEM,
	CHECKBOX_QUESTION_ITEM,
	DROPDOWN_QUESTION_ITEM
];
export const GRID_ITEM_TYPES = [RADIO_GRID_QUESTION_ITEM, CHECKBOX_GRID_QUESTION_ITEM];

export const TEXT_ITEM_TYPES = [TEXT_QUESTION_ITEM, PARAGRAPH_QUESTION_ITEM];

export const IMAGE_ITEM = 'IMAGE_ITEM';
export const ADDITIONAL_TITLE_ITEM = 'ADDITIONAL_TITLE_ITEM';
export const PAGEBREAK_ITEM = 'PAGEBREAK_ITEM';

export const OTHER_ITEM_TYPES = [IMAGE_ITEM, ADDITIONAL_TITLE_ITEM, PAGEBREAK_ITEM];

export const FORM_ITEM_TYPES = [...QUESTION_ITEM_TYPES, ...OTHER_ITEM_TYPES];

export const SUBMIT_KEY_PREFIX = 'entry.';
export const OTHER_RESPONSE_SUFFIX = '.other_option_response';

export const DAY_SUFFIX = '_day';
export const MONTH_SUFFIX = '_month';
export const YEAR_SUFFIX = '_year';
export const HOUR_SUFFIX = '_hour';
export const MINUTE_SUFFIX = '_minute';
export const SECOND_SUFFIX = '_second';

export const DEFAULT_MODE = 'light';
export const DEFAULT_LOADER = 'SPIRAL';

export const DEFAULT_GOODBYE_HEADING = 'You made it';
export const DEFAULT_GOODBYE_MESSAGE = 'Thank you for your submission!';

export const DEFAULT_WELCOME_HEADING = 'Welcome to this form';
export const DEFAULT_WELCOME_MESSAGE = 'Please fill it out';

export const RADIUSES = [0, 0.25, 0.5, 0.75, 1.0];
export const FONTS = [
	{
		display: 'Roboto',
		value: 'Roboto, sans-serif'
	},
	{
		display: 'Arial',
		value: 'Arial, sans-serif'
	},
	{
		display: 'Courier',
		value: 'Courier, monospace'
	}
];

export const DEFAULT_FORM_STYLE: TFormStyle = {
	theme: 'neutral',
	radius: 0,
	font: FONTS[0].value,
	mode: DEFAULT_MODE
};

export const DEFAULT_FORM_PAGES: TFormPages = {
	welcome: {
		heading: DEFAULT_WELCOME_HEADING,
		message: DEFAULT_WELCOME_MESSAGE
	},
	goodbye: {
		heading: DEFAULT_GOODBYE_HEADING,
		message: DEFAULT_GOODBYE_MESSAGE
	}
};

export const CREATE_FORM_ERROR_MESSAGES = {
	SHARE_LINK_PASTED: 'The share link has been pasted. Please try again with the edit link.',
	INVALID_LINK: 'The provided link is invalid.',
	FORM_NOT_FOUND: 'The form could not be found.',
	FORM_IS_PRIVATE: 'The form is private and cannot be accessed.',
	FORM_USES_PAGEBREAKS: 'The form uses page breaks, which are not supported.',
	HTML_PARSING_ERROR: 'There was an error parsing the HTML data.'
};
