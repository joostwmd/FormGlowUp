<script lang="ts">
	import * as RadioGroup from '$lib/components/shadcn/ui/radio-group/index';
	import {
		OTHER_OPTION_VALUE,
		OTHER_RESPONSE_SUFFIX,
		SUBMIT_KEY_PREFIX
	} from '$lib/form/constants';
	import { formDataStore } from '$lib/form/stores';
	import Input from '$lib/components/shadcn/ui/input/input.svelte';
	import Label from '$lib/components/shadcn/ui/label/label.svelte';
	import type { TChoicesItem } from '$lib/form/types';

	export let item: TChoicesItem;
	let options = item.options;
	$: options = item.attributes.randomizeOrder ? options.sort(() => Math.random() - 0.5) : options;
</script>

<div class="w-full">
	<RadioGroup.Root bind:value={$formDataStore[`${SUBMIT_KEY_PREFIX}${item.submitId}`]}>
		{#each options as option}
			<div class="mb-1 flex h-8 items-center space-x-2">
				{#if option === OTHER_OPTION_VALUE}
					<RadioGroup.Item value={OTHER_OPTION_VALUE} id={OTHER_OPTION_VALUE} />
					<Input
						class="p-2"
						bind:value={$formDataStore[`${item.submitId}${OTHER_RESPONSE_SUFFIX}`]}
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
