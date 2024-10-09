<script lang="ts">
	import { updateTheme, type StyleConfig } from '$lib';
	import { cn } from '$lib/components/shadcn/utils';
	import { DEFAULT_MODE } from '$lib/form/constants';
	import { ModeWatcher } from 'mode-watcher';
	import { onMount } from 'svelte';

	export let styleConfig: StyleConfig;
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
	<ModeWatcher defaultMode={'dark'} />
	<slot />
</div>
