import { writable } from 'svelte/store';
import { themes } from './themes';

export type StyleConfig = {
	theme: string;
	radius: number;
	font: string;
	mode: 'light' | 'dark';
};

export const config = writable<StyleConfig>({
	theme: 'neutral',
	radius: 0.5,
	font: 'Roboto, sans-serif',
	mode: 'light'
});

export function updateTheme(config: StyleConfig) {
	const isBrowser = typeof document !== 'undefined';
	if (!isBrowser) return;

	//console.log('activeTheme', activeTheme);
	document.body.classList.forEach((className) => {
		console.log('className test', className);
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
