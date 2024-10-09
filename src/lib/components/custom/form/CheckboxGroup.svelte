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
	import { handleFormValueChange } from '$lib/form/utils';

	export let description: string | null = null;
	export let randomizeOrder: boolean = false;
	export let options: string[];
	export let submitId: string;

	function handleCheckboxChange(option: string) {
		const currentValues = $formDataStore[`${SUBMIT_KEY_PREFIX}${submitId}`] || [];
		let updatedValues = [];

		if (currentValues.includes(option)) {
			updatedValues = currentValues.filter((value) => value !== option);
		} else {
			updatedValues = [...currentValues, option];
		}

		handleFormValueChange(updatedValues, submitId);
	}

	let otherResponseEnabled: boolean = false;

	$: {
		if ($formDataStore[`${SUBMIT_KEY_PREFIX}${submitId}`]) {
			otherResponseEnabled =
				$formDataStore[`${SUBMIT_KEY_PREFIX}${submitId}`].includes(OTHER_OPTION_VALUE);
		} else {
			otherResponseEnabled = false;
		}
	}
</script>

<div class="w-full">
	{#if description}
		<p class="text-sm text-gray-500">{description}</p>
	{/if}

	<div>
		{#each options as option}
			<div class="mb-2 flex flex h-8 items-center space-x-2">
				{#if option === OTHER_OPTION_VALUE}
					<Checkbox onCheckedChange={() => handleCheckboxChange(OTHER_OPTION_VALUE)} />
					<Input
						type="text"
						class="p-2"
						disabled={!otherResponseEnabled}
						bind:value={$formDataStore[`${SUBMIT_KEY_PREFIX}${submitId}${OTHER_RESPONSE_SUFFIX}`]}
					/>
				{:else}
					<Checkbox onCheckedChange={() => handleCheckboxChange(option)} />
					<Label for={option}>{option}</Label>
				{/if}
			</div>
		{/each}
	</div>
</div>
