<script lang="ts">
	import { SUBMIT_KEY_PREFIX } from '$lib/form/constants';
	import { formDataStore } from '$lib/form/stores';

	import Slider from '$lib/components/shadcn/ui/slider/slider.svelte';

	export let description: string | null = null;
	export let minValue: number;
	export let maxValue: number;
	export let minLabel: string | null = null;
	export let maxLabel: string | null = null;
	export let submitId: string;
</script>

<div class="flex w-full flex-col items-start space-y-4">
	{#if description}
		<p class="text-sm text-gray-500">{description}</p>
	{/if}

	<div class="flex w-full max-w-96 flex-col">
		<div class="mb-4 flex w-full justify-between">
			{#if minLabel}
				<p class="text-xs text-gray-500">{minLabel}</p>
			{/if}
			{#if maxLabel}
				<p class="text-xs text-gray-500">{maxLabel}</p>
			{/if}
		</div>
		<Slider
			class="bg-secondary"
			bind:value={$formDataStore[`${SUBMIT_KEY_PREFIX}${submitId}`]}
			min={minValue}
			max={maxValue}
		/>
	</div>
</div>
