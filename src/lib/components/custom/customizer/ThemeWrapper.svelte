<script lang="ts">
	import { cn, updateTheme } from '$lib/components/shadcn/utils';
	import type { TFormStyle } from '$lib/form/types';
	import { ModeWatcher } from 'mode-watcher';

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
	<!-- <ModeWatcher defaultMode={styleConfig.mode} /> -->
	<slot />
</div>
