<script lang="ts">
	import { config } from '$lib';
	import { TEST_FONTS, TEST_RADIUSES } from '$lib/form/test-data';
	import { themes } from '$lib/themes';
	import Button from '../shadcn/ui/button/button.svelte';
	import Label from '../shadcn/ui/label/label.svelte';
</script>

<div class="flex w-full flex-col items-start space-y-4 px-8">
	<Label class="text-xs">Theme</Label>

	{#each themes as theme}
		<Button
			on:click={() => {
				$config.theme = theme.name;
			}}
		>
			{theme.name}
		</Button>
	{/each}

	<Label class="text-xs">Font</Label>
	{#each TEST_FONTS as font, i}
		<Button
			on:click={() => {
				$config.font = font;
			}}
		>
			{i}
		</Button>
	{/each}

	<Label class="text-xs">Radius</Label>
	{#each TEST_RADIUSES as radius, i}
		<Button
			on:click={() => {
				$config.radius = radius;
			}}
		>
			{radius}
		</Button>
	{/each}

	<Label class="text-xs">Mode</Label>

	{#each ['light', 'dark'] as mode}
		<Button
			on:click={() => {
				$config.mode = mode;
			}}
		>
			{mode}
		</Button>
	{/each}
</div>
