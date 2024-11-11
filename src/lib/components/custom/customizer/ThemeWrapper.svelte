<script lang="ts">
	import { cn, updateTheme } from '$lib/components/shadcn/utils';
	import type { TFormStyle } from '$lib/form/types';
	export let style: TFormStyle;
	let themeWrapperElement: HTMLElement;

	$: {
		if (themeWrapperElement) {
			updateTheme(themeWrapperElement, style);
		}
	}
</script>

<div
	bind:this={themeWrapperElement}
	class={cn(`theme-${style.theme}`, 'w-full')}
	style="--radius: {style.radius}rem; font-family: {style.font};"
>
	<!-- <ModeWatcher defaultMode={style.mode} /> -->
	<slot />
</div>
