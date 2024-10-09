import { writable } from 'svelte/store';
import { themes } from './themes';
import { DEFAULT_SYTLE_CONFIG } from './form/constants';

export type StyleConfig = {
	theme: string;
	radius: number;
	font: string;
	mode: 'light' | 'dark';
};

export const styleConfig = writable<StyleConfig>(DEFAULT_SYTLE_CONFIG);

// export function updateTheme(styleConfig: StyleConfig) {
// 	const isBrowser = typeof document !== 'undefined';
// 	if (!isBrowser) return;

// 	document.body.classList.forEach((className) => {
// 		if (className.match(/^theme.*/)) {
// 			document.body.classList.remove(className);
// 		}
// 	});

// 	document.body.classList.add(`theme-${styleConfig.theme}`);

// 	const theme = themes.find((theme) => theme.name === styleConfig.theme);
// 	if (!theme) return;

// 	const cssVars = theme.cssVars[styleConfig.mode];

// 	for (const [key, value] of Object.entries(cssVars)) {
// 		document.documentElement.style.setProperty(`--${key}`, value);
// 	}
// }

export function updateTheme(element: HTMLElement, styleConfig: StyleConfig) {
	const isBrowser = typeof document !== 'undefined';
	if (!isBrowser) return;

	element.classList.forEach((className) => {
		if (className.match(/^theme.*/)) {
			element.classList.remove(className);
		}
	});

	element.classList.add(`theme-${styleConfig.theme}`);

	const theme = themes.find((theme) => theme.name === styleConfig.theme);
	if (!theme) return;

	const cssVars = theme.cssVars[styleConfig.mode];

	for (const [key, value] of Object.entries(cssVars)) {
		element.style.setProperty(`--${key}`, value);
	}
}
