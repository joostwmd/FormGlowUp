<script lang="ts">
	import Checkbox from '$lib/components/shadcn/ui/checkbox/checkbox.svelte';
	import Input from '$lib/components/shadcn/ui/input/input.svelte';
	import Label from '$lib/components/shadcn/ui/label/label.svelte';
	import {
		OTHER_OPTION_VALUE,
		OTHER_RESPONSE_SUFFIX,
		SUBMIT_KEY_PREFIX
	} from '$lib/form/constants';
	import { formDataStore } from '$lib/form/stores';
	import type { TChoicesItem } from '$lib/form/types';
	import { handleFormValueChange } from '$lib/form/utils/client';

	export let item: TChoicesItem;

	function handleCheckboxChange(option: string) {
		const currentValues = $formDataStore[`${SUBMIT_KEY_PREFIX}${item.submitId}`] || [];
		let updatedValues = [];

		if (currentValues.includes(option)) {
			updatedValues = currentValues.filter((value: string) => value !== option);
		} else {
			updatedValues = [...currentValues, option];
		}

		handleFormValueChange(updatedValues, item.submitId);
	}

	let otherResponseEnabled: boolean = false;

	$: {
		if ($formDataStore[`${SUBMIT_KEY_PREFIX}${item.submitId}`]) {
			otherResponseEnabled =
				$formDataStore[`${SUBMIT_KEY_PREFIX}${item.submitId}`].includes(OTHER_OPTION_VALUE);
		} else {
			otherResponseEnabled = false;
		}
	}
</script>

<div class="w-full">
	{#if item.displayData.description}
		<p class="text-sm text-gray-500">{item.displayData.description}</p>
	{/if}

	<div>
		{#each item.options as option}
			<div class="mb-2 flex flex h-8 items-center space-x-2">
				{#if option === OTHER_OPTION_VALUE}
					<Checkbox onCheckedChange={() => handleCheckboxChange(OTHER_OPTION_VALUE)} />
					<Input
						type="text"
						class="p-2"
						disabled={!otherResponseEnabled}
						bind:value={$formDataStore[
							`${SUBMIT_KEY_PREFIX}${item.submitId}${OTHER_RESPONSE_SUFFIX}`
						]}
					/>
				{:else}
					<Checkbox onCheckedChange={() => handleCheckboxChange(option)} />
					<Label for={option}>{option}</Label>
				{/if}
			</div>
		{/each}
	</div>
</div>
