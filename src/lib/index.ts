import { writable } from 'svelte/store';
import { themes } from './themes';
import { DEFAULT_MODE } from './form/constants';
import { TEST_THEME_CONFIG } from './form/test-data';

export type StyleConfig = {
	theme: string;
	radius: number;
	font: string;
	mode: 'light' | 'dark';
};

export const config = writable<StyleConfig>(TEST_THEME_CONFIG);

export function updateTheme(config: StyleConfig) {
	const isBrowser = typeof document !== 'undefined';
	if (!isBrowser) return;

	document.body.classList.forEach((className) => {
		if (className.match(/^theme.*/)) {
			document.body.classList.remove(className);
		}
	});

	document.body.classList.add(`theme-${config.theme}`);

	const theme = themes.find((theme) => theme.name === config.theme);
	if (!theme) return;

	const cssVars = theme.cssVars[config.mode];

	for (const [key, value] of Object.entries(cssVars)) {
		document.documentElement.style.setProperty(`--${key}`, value);
	}
}
