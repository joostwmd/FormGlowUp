import type { Writable } from 'svelte/store';

export const FORM_THEME_CONTEXT_KEY = Symbol('formGlowupTheme');

export type FormThemeContext = {
	fontFamily: Writable<string>;
};
