import type { StyleConfig } from '$lib';
import { TEST_FONTS } from '$lib/form/test-data.js';

export async function load({ params }) {
	const formStyleTest: StyleConfig = {
		theme: 'red',
		radius: 0.25,
		font: TEST_FONTS[2],
		mode: 'dark'
	};

	return {
		formStyleTest
	};
}
