<script lang="ts">
	import { cn, updateTheme } from '$lib/components/shadcn/utils';
	import {
		FORM_THEME_CONTEXT_KEY,
		type FormThemeContext
	} from '$lib/components/custom/form/form-theme-context';
	import type { TFormStyle } from '$lib/form/types';
	import { ModeWatcher, setMode } from 'mode-watcher';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let style: TFormStyle;
	let themeWrapperElement: HTMLElement;

	const fontFamily = writable(style.font);
	setContext<FormThemeContext>(FORM_THEME_CONTEXT_KEY, { fontFamily });
	$: fontFamily.set(style.font);

	$: {
		if (themeWrapperElement) {
			updateTheme(themeWrapperElement, style);
			setMode(style.mode);
		}
	}
</script>

<div
	bind:this={themeWrapperElement}
	class={cn(`theme-${style.theme}`, 'flex h-full min-h-0 w-full flex-col')}
	style="--radius: {style.radius}rem; font-family: {style.font};"
>
	<ModeWatcher defaultMode={style.mode} />
	<slot />
</div>
