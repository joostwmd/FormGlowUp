import type { StyleConfig } from '$lib';
import { DEFAULT_MODE } from '$lib/form/constants.js';
import { TEST_FONTS, TEST_THEME_CONFIG } from '$lib/form/test-data.js';

export async function load({ params }) {
	return {
		formStyleTest: TEST_THEME_CONFIG
	};
}
