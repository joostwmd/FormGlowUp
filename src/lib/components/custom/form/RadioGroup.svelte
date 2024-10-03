<script lang="ts">
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import {
		OTHER_OPTION_VALUE,
		OTHER_RESPONSE_SUFFIX,
		SUBMIT_KEY_PREFIX
	} from '$lib/google-forms/constants';
	import { formDataStore } from '$lib/google-forms/store';
	import Input from '../ui/input/input.svelte';
	import { Label } from '../ui/label';

	export let description: string | null = null;
	export let randomizeOrder: boolean = false;
	export let options: string[];
	export let submitId: string;

	$: options = randomizeOrder ? options.sort(() => Math.random() - 0.5) : options;
</script>

<div class="w-full">
	{#if description}
		<p class="text-sm text-gray-500">{description}</p>
	{/if}

	<RadioGroup.Root bind:value={$formDataStore[`${SUBMIT_KEY_PREFIX}${submitId}`]}>
		{#each options as option}
			<div class="mb-1 flex h-8 items-center space-x-2">
				{#if option === OTHER_OPTION_VALUE}
					<RadioGroup.Item value={OTHER_OPTION_VALUE} id={OTHER_OPTION_VALUE} />
					<Input
						class="p-2"
						bind:value={$formDataStore[`${submitId}${OTHER_RESPONSE_SUFFIX}`]}
						type="text"
					/>
				{:else}
					<RadioGroup.Item value={option} id={option} />
					<Label for={option}>{option}</Label>
				{/if}
			</div>
		{/each}
	</RadioGroup.Root>
</div>
