<script lang="ts">
	import { themes } from '$lib/themes';
	import { config } from '$lib';

	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import { cn } from '$lib/components/utils';
	import { mode, toggleMode } from 'mode-watcher';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';

	const RADIUSES = [0, 0.25, 0.5, 0.75, 1.0];
	const FONTS = ['Roboto, sans-serif', 'Arial, sans-serif', 'Courier, monospace'];

	function handleToggleMode() {
		if (!$mode) return;
		toggleMode();
		$config.mode = $mode;
	}
</script>

<div class="flex w-screen flex-col items-center">
	<div class="w-2/3">
		{#each themes as theme (theme.name)}
			{@const isActive = $config.theme === theme.name}
			<Button
				variant="outline"
				size="sm"
				on:click={() => {
					config.update((prev) => ({ ...prev, theme: theme.name }));
				}}
				class={cn('justify-start', isActive && 'border-2 border-primary')}
				style="--theme-primary: hsl({theme.activeColor[$mode ?? 'dark']})"
			>
				<span
					class="mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[--theme-primary]"
				>
				</span>
				{theme.label}
			</Button>
		{/each}

		{#each RADIUSES as radius}
			{@const isActive = $config.radius === radius}
			<Button
				variant="outline"
				size="sm"
				on:click={() => {
					config.update((prev) => ({ ...prev, radius }));
				}}
				class={cn('justify-start', isActive && 'border-2 border-primary')}
			>
				<span
					class="mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[--theme-primary]"
				>
				</span>
				{radius}
			</Button>
		{/each}

		{#each FONTS as font}
			{@const isActive = $config.font === font}
			<Button
				variant="outline"
				size="sm"
				on:click={() => {
					config.update((prev) => ({ ...prev, font }));
				}}
				class={cn('justify-start', isActive && 'border-2 border-primary')}
			>
				<span
					class="mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[--theme-primary]"
				>
				</span>
				{font}
			</Button>
		{/each}

		<Button on:click={handleToggleMode} variant="outline" size="icon">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>

		<Button>test</Button>
	</div>
</div>
