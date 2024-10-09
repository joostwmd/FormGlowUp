import { DEFAULT_SYTLE_CONFIG } from '$lib/form/constants.js';

export async function load({ params }) {
	return {
		formStyleTest: DEFAULT_SYTLE_CONFIG
	};
}
