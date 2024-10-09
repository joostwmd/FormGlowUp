import { getAccessTokens } from '$lib/firebase/utils';
import {
	ADDITIONAL_TITLE_ITEM,
	CHECKBOX_GRID_QUESTION_ITEM,
	CHECKBOX_QUESTION_ITEM,
	DATE_QUESTION_ITEM,
	DROPDOWN_QUESTION_ITEM,
	IMAGE_ITEM,
	OTHER_OPTION_VALUE,
	PAGEBREAK_ITEM,
	PARAGRAPH_QUESTION_ITEM,
	QUESTION_ITEM_TYPES,
	RADIO_GRID_QUESTION_ITEM,
	RADIO_QUESTION_ITEM,
	SCALE_QUESTION_ITEM,
	SUBMIT_KEY_PREFIX,
	TEXT_QUESTION_ITEM,
	TIME_QUESTION_ITEM
} from '$lib/form/constants';
import { formDataStore } from './stores';

export async function fetchFormData(userId: string, formId: string) {
	const accessToken = await getAccessTokens(userId);

	const res = await fetch('/api/get-form', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ accessToken, formId })
	});

	const data = await res.json();
	return data;
}

function extractSubmitIds(htmlString: string) {
	const ids = htmlString.match(/\b\d{9,10}\b/g) || [];
	return ids.length === 1 ? ids : ids.slice(1);
}

function replaceUndefinedWithNull(obj: any): any {
	if (Array.isArray(obj)) {
		return obj.map(replaceUndefinedWithNull);
	} else if (obj !== null && typeof obj === 'object') {
		return Object.fromEntries(
			Object.entries(obj).map(([key, value]) => [key, replaceUndefinedWithNull(value)])
		);
	} else {
		return obj === undefined ? null : obj;
	}
}

function parseItemData(data: any, type: string) {
	const choiceQuestion = data.questionItem?.question?.choiceQuestion;
	const scaleQuestion = data.questionItem?.question?.scaleQuestion;
	const dateQuestion = data.questionItem?.question?.dateQuestion;
	const timeQuestion = data.questionItem?.question?.timeQuestion;
	const imageItem = data.imageItem?.image;

	let result;

	switch (type) {
		case RADIO_QUESTION_ITEM:
		case CHECKBOX_QUESTION_ITEM:
		case DROPDOWN_QUESTION_ITEM:
			result = {
				isRequired: data.questionItem?.question?.required,
				description: data.description,
				shuffleOptions: choiceQuestion?.shuffle,
				options: choiceQuestion?.options.map((option: any) =>
					option.isOther ? OTHER_OPTION_VALUE : option.value
				)
			};
			break;
		case SCALE_QUESTION_ITEM:
			result = {
				isRequired: data.questionItem?.question?.required,
				description: data.description,
				minLabel: scaleQuestion?.lowLabel,
				maxLabel: scaleQuestion?.highLabel,
				minValue: scaleQuestion?.low,
				maxValue: scaleQuestion?.high
			};
			break;
		case CHECKBOX_GRID_QUESTION_ITEM:
		case RADIO_GRID_QUESTION_ITEM:
			result = {
				description: data.description,
				columns: data.questionGroupItem?.grid?.columns?.options.map((option: any) => option.value),
				rows: data.questionGroupItem?.questions.map((question: any) => ({
					isRequired: question.required,
					title: question.rowQuestion.title
				}))
			};
			break;
		case DATE_QUESTION_ITEM:
			result = {
				isRequired: dateQuestion?.required,
				description: data.description,
				yearIncluded: dateQuestion?.includeYear,
				timeIncluded: dateQuestion?.includeTime
			};
			break;
		case TIME_QUESTION_ITEM:
			result = {
				isRequired: timeQuestion?.required,
				description: data.description,
				isDuration: timeQuestion?.duration
			};
			break;
		case IMAGE_ITEM:
			result = {
				imageUrl: imageItem?.contentUri,
				properties: imageItem?.properties,
				title: data.title
			};
			break;
		default:
			result = {};
	}

	return replaceUndefinedWithNull(result);
}

function findItemType(item: any) {
	if (item.textItem) return ADDITIONAL_TITLE_ITEM;
	if (item.imageItem) return IMAGE_ITEM;
	if (item.pageBreakItem) return PAGEBREAK_ITEM;

	const questionItem = item.questionItem?.question;
	if (questionItem) {
		if (questionItem.textQuestion)
			return questionItem.textQuestion.paragraph ? PARAGRAPH_QUESTION_ITEM : TEXT_QUESTION_ITEM;
		if (questionItem.choiceQuestion) {
			switch (questionItem.choiceQuestion.type) {
				case 'RADIO':
					return RADIO_QUESTION_ITEM;
				case 'CHECKBOX':
					return CHECKBOX_QUESTION_ITEM;
				case 'DROP_DOWN':
					return DROPDOWN_QUESTION_ITEM;
			}
		}
		if (questionItem.scaleQuestion) return SCALE_QUESTION_ITEM;
		if (questionItem.dateQuestion) return DATE_QUESTION_ITEM;
		if (questionItem.timeQuestion) return TIME_QUESTION_ITEM;
	}

	const questionGroupItem = item.questionGroupItem?.grid.columns.type;
	if (questionGroupItem) {
		switch (questionGroupItem) {
			case 'RADIO':
				return RADIO_GRID_QUESTION_ITEM;
			case 'CHECKBOX':
				return CHECKBOX_GRID_QUESTION_ITEM;
		}
	}

	return '';
}

function parseFormData(data: any, submitIds: string[]) {
	let submitIdIndex = 0;
	const pages: any[] = [];
	let currentPage: any[] = [];

	data.items.forEach((item: any) => {
		const type = findItemType(item);
		const itemData = parseItemData(item, type);

		if (QUESTION_ITEM_TYPES.includes(type)) {
			if (type === RADIO_GRID_QUESTION_ITEM || type === CHECKBOX_GRID_QUESTION_ITEM) {
				itemData.rows.forEach((row: any) => {
					row.submitId = submitIds[submitIdIndex++];
				});
			} else {
				// @ts-ignore
				itemData.submitId = submitIds[submitIdIndex++];
			}
		}

		if (type === PAGEBREAK_ITEM) {
			pages.push(currentPage);
			currentPage = [];
		} else {
			currentPage.push({
				title: item.title ?? null,
				type: type,
				data: itemData
			});
		}
	});

	if (currentPage.length > 0) {
		pages.push(currentPage);
	}

	const form = {
		formInfo: {
			title: data.info.title,
			description: data.info.description,
			documentTitle: data.info.documentTitle
		},
		formItems: pages
	};

	return form;
}
function parseFormItemsData(formData: any, submitIds: string[]) {
	let submitIdIndex = 0;
	let currentPage: any[] = [];
	const pages: { [key: number]: any[] } = {};
	let currentPageNumber = 1;

	formData.items.forEach((item: any) => {
		const type = findItemType(item);
		const itemData = parseItemData(item, type);

		if (QUESTION_ITEM_TYPES.includes(type)) {
			if (type === RADIO_GRID_QUESTION_ITEM || type === CHECKBOX_GRID_QUESTION_ITEM) {
				itemData.rows.forEach((row: any) => {
					row.submitId = submitIds[submitIdIndex++];
				});
			} else {
				// @ts-ignore
				itemData.submitId = submitIds[submitIdIndex++];
			}
		}

		if (type === PAGEBREAK_ITEM) {
			pages[currentPageNumber] = currentPage;
			currentPage = [];
			currentPageNumber++;
		} else {
			currentPage.push({
				title: item.title ?? null,
				type: type,
				data: itemData
			});
		}
	});

	if (currentPage.length > 0) {
		pages[currentPageNumber] = currentPage;
	}

	return pages;
}

export async function constructFormItemsData(htmlData: string, formData: any) {
	const submitIds = extractSubmitIds(htmlData);
	const formItems = parseFormItemsData(formData, submitIds);
	return formItems;
}

export async function constructFormInfoData(formData: any) {
	const formInfo = {
		formId: formData.formId,
		responderUri: formData.responderUri,
		title: formData.info.title,
		description: formData.info.description,
		documentTitle: formData.info.documentTitle
	};

	return formInfo;
}

export async function constructFormStructure(html: string, formData: any) {
	const submitIds = extractSubmitIds(html);
	const form = parseFormData(formData, submitIds);
	return form;
}

export function extractFormId(url: string): string | null {
	const editUrlPattern = /\/d\/([a-zA-Z0-9_-]+)\/edit/;
	const match = url.match(editUrlPattern);
	return match ? match[1] : null;
}

export function handleFormValueChange(value: string, submitId: string) {
	const entryId = SUBMIT_KEY_PREFIX + submitId;
	formDataStore.update((currentData) => {
		currentData[entryId] = value;
		return currentData;
	});
}
