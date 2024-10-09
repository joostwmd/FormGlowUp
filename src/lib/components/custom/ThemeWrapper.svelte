<script lang="ts">
	import { cn, updateTheme } from '$lib/components/shadcn/utils';
	import { DEFAULT_MODE } from '$lib/form/constants';
	import type { TFormStyle } from '$lib/form/stores';
	import { ModeWatcher } from 'mode-watcher';
	import { onMount } from 'svelte';

	export let styleConfig: TFormStyle;
	let themeWrapperElement: HTMLElement;

	$: {
		if (themeWrapperElement) {
			updateTheme(themeWrapperElement, styleConfig);
		}
	}
</script>

<div
	bind:this={themeWrapperElement}
	class={cn(`theme-${styleConfig.theme}`, 'w-full')}
	style="--radius: {styleConfig.radius}rem; font-family: {styleConfig.font};"
>
	<ModeWatcher defaultMode={styleConfig.mode} />
	<slot />
</div>
