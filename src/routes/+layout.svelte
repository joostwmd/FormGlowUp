<script lang="ts">
	import '../app.css';
	import { cn } from '$lib/components/utils';
	import { config, updateTheme } from '$lib';
	import { themes } from '$lib/themes';
	import { ModeWatcher, mode } from 'mode-watcher';

	let className: string | undefined | null = undefined;
	export { className as class };

	$: updateTheme($config);
</script>

<ModeWatcher defaultMode="dark" />

<div
	class={cn(`theme-${$config.theme}`, 'w-full', className)}
	data-style={$config.style}
	style="--radius: {$config.radius}rem; font-family: {$config.font};"
>
	<slot />
</div>
