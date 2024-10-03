<script lang="ts">
	import { config } from '$lib';

	import { cn } from '$lib/components/shadcn/utils';
	import { DEFAULT_MODE } from '$lib/form/constants';
	import { ModeWatcher } from 'mode-watcher';

	export let styleConfig: any;
</script>

<div
	class={cn(`theme-${$config.theme}`, 'w-full')}
	style="--radius: {styleConfig.radius}rem; font-family: {styleConfig.font};"
>
	<ModeWatcher defaultMode={DEFAULT_MODE} />
	<slot />
</div>
