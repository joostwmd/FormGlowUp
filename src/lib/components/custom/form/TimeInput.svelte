<script lang="ts">
	import Input from '$lib/components/shadcn/ui/input/input.svelte';
	import {
		HOUR_SUFFIX,
		MINUTE_SUFFIX,
		SECOND_SUFFIX,
		SUBMIT_KEY_PREFIX
	} from '$lib/form/constants';
	import { formDataStore } from '$lib/form/stores';
	import type { TTimeItem } from '$lib/form/types';

	export let handleFormValueChange: (value: string | number, submitId: string) => void;
	export let item: TTimeItem;
</script>

<div class="flex w-full flex-col items-start space-y-4">
	{#if item.displayData.description}
		<p class="text-sm text-gray-500">{item.displayData.description}</p>
	{/if}

	<div class="flex items-center space-x-2">
		<Input
			on:change={(e) => handleFormValueChange(e.target.value, `${item.submitId}${HOUR_SUFFIX}`)}
			placeholder="HH"
			class="w-14 text-center"
		/>

		<span>:</span>
		<Input
			on:change={(e) => handleFormValueChange(e.target.value, `${item.submitId}${HOUR_SUFFIX}`)}
			placeholder="MM"
			class="w-14 text-center"
		/>
		{#if item.attributes.isDuration}
			<span>:</span>
			<Input
				on:change={(e) => handleFormValueChange(e.target.value, `${item.submitId}${HOUR_SUFFIX}`)}
				placeholder="SS"
				class="w-14 text-center"
			/>
		{/if}
	</div>
</div>
