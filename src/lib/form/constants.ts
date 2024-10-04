export const OTHER_OPTION_VALUE = '__other_option__';

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
	CHECKBOX_GRID_QUESTION_ITEM
];

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

export const LOADERS = [
	{
		display: 'Spiral',
		value: 'SPIRAL'
	},
	{
		display: 'Zoomies',
		value: 'ZOOMIES'
	},
	{
		display: 'Grid',
		value: 'GRID'
	}
];
