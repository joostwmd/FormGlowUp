<script lang="ts">
	import type { StyleConfig } from '$lib';
	import { cn } from '$lib/components/shadcn/utils';
	import { ModeWatcher } from 'mode-watcher';

	export let styleConfig: StyleConfig;
</script>

<div
	class={cn(`theme-${styleConfig.theme}`, 'w-full')}
	style="--radius: {styleConfig.radius}rem; font-family: {styleConfig.font};"
>
	<ModeWatcher defaultMode={styleConfig.mode} />
	<slot />
</div>
