<script lang="ts">
	import { formDataStore } from '$lib/form/stores';
	import Slider from '$lib/components/shadcn/ui/slider/slider.svelte';
	import type { TScaleItem } from '$lib/form/types';

	export let item: TScaleItem;
</script>

<div class="flex w-full flex-col items-start space-y-4">
	<div class="flex w-full max-w-96 flex-col">
		<div class="mb-4 flex w-full justify-between">
			{#if item.attributes.minLabel}
				<p class="text-xs text-gray-500">{item.attributes.minLabel}</p>
			{/if}
			{#if item.attributes.maxLabel}
				<p class="text-xs text-gray-500">{item.attributes.maxLabel}</p>
			{/if}
		</div>
		<Slider
			class="bg-secondary"
			bind:value={$formDataStore[`${item.submitId}`]}
			min={item.attributes.min}
			max={item.attributes.max}
		/>
	</div>
</div>
