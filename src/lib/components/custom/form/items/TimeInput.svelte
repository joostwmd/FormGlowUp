<script lang="ts">
	import Input from '$lib/components/shadcn/ui/input/input.svelte';
	import { HOUR_SUFFIX, MINUTE_SUFFIX, SECOND_SUFFIX } from '$lib/form/constants';
	import type { TTimeItem } from '$lib/form/types';
	import { handleFormValueChange } from '$lib/form/utils/helpers';

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
			on:change={(e) => handleFormValueChange(e.target.value, `${item.submitId}${MINUTE_SUFFIX}`)}
			placeholder="MM"
			class="w-14 text-center"
		/>
		{#if item.attributes.isDuration}
			<span>:</span>
			<Input
				on:change={(e) => handleFormValueChange(e.target.value, `${item.submitId}${SECOND_SUFFIX}`)}
				placeholder="SS"
				class="w-14 text-center"
			/>
		{/if}
	</div>
</div>
