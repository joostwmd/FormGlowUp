<script lang="ts">
	import Input from '$lib/components/shadcn/ui/input/input.svelte';
	import {
		HOUR_SUFFIX,
		MINUTE_SUFFIX,
		SECOND_SUFFIX,
		SUBMIT_KEY_PREFIX
	} from '$lib/form/constants';
	import { formDataStore } from '$lib/form/stores';

	type TFormAttributes = {
		name: string;
		id: string;
		'data-fs-error': string | undefined;
		'aria-describedby': string | undefined;
		'aria-invalid': 'true' | undefined;
		'aria-required': 'true' | undefined;
		'data-fs-control': string;
	};

	export let formAttributes: TFormAttributes;

	export let handleFormValueChange: (value: string | number, submitId: string) => void;
	export let description: string | null = null;
	export let isDurationInput: boolean;
	export let submitId: string;
</script>

<div class="flex w-full flex-col items-start space-y-4">
	{#if description}
		<p class="text-sm text-gray-500">{description}</p>
	{/if}

	<div class="flex items-center space-x-2">
		<Input
			{...formAttributes}
			on:change={(e) => handleFormValueChange(e.target.value, `${submitId}${HOUR_SUFFIX}`)}
			placeholder="HH"
			class="w-14 text-center"
		/>

		<span>:</span>
		<Input
			{...formAttributes}
			on:change={(e) => handleFormValueChange(e.target.value, `${submitId}${HOUR_SUFFIX}`)}
			placeholder="MM"
			class="w-14 text-center"
		/>
		{#if isDurationInput}
			<span>:</span>
			<Input
				{...formAttributes}
				on:change={(e) => handleFormValueChange(e.target.value, `${submitId}${HOUR_SUFFIX}`)}
				placeholder="SS"
				class="w-14 text-center"
			/>
		{/if}
	</div>
</div>
