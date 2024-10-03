<script lang="ts">
	import '../app.css';
	import { cn } from '$lib/components/shadcn/utils';
	import { config, updateTheme } from '$lib';
	import { themes } from '$lib/themes';
	import { ModeWatcher, mode } from 'mode-watcher';

	let className: string | undefined | null = undefined;
	export { className as class };

	$: updateTheme($config);
</script>

<div
	class={cn(`theme-${$config.theme}`, 'w-full', className)}
	style="--radius: {$config.radius}rem; font-family: {$config.font};"
>
	<ModeWatcher defaultMode="dark" />
	<slot />
</div>
