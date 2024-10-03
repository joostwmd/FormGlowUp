import type { StyleConfig } from '$lib';

export async function load({ params }) {
	const formStyleTest: StyleConfig = {
		theme: 'red',
		radius: 0.25,
		font: 'Roboto, sans-serif',
		mode: 'dark'
	};

	return {
		formStyleTest
	};
}
