import { writable } from 'svelte/store';
import { SUBMIT_KEY_PREFIX } from './constants';

export const formDataStore = writable({});

export function handleFormValueChange(value, submitId) {
	const entryId = SUBMIT_KEY_PREFIX + submitId;
	formDataStore.update((currentData) => {
		currentData[entryId] = value;
		return currentData;
	});
}

export const formStructureStore = writable({});
