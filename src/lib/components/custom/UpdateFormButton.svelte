<script lang="ts">
	import { formStore } from '$lib/form/stores';
	import * as Tooltip from '$lib/components/shadcn/ui/tooltip/index.js';
	import { Button } from '$lib/components/shadcn/ui/button/index';
	import SaveIcon from 'lucide-svelte/icons/arrow-down-to-line';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';

	function deepEqual(obj1: any, obj2: any): boolean {
		if (obj1 === obj2) return true;

		if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
			return false;
		}

		const keys1 = Object.keys(obj1);
		const keys2 = Object.keys(obj2);

		if (keys1.length !== keys2.length) return false;

		for (const key of keys1) {
			if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
				return false;
			}
		}

		return true;
	}

	export let isUpdating: boolean = false;
	let needsUpdate: boolean = false;

	$: {
		const savedFormState = $formStore;
		const localFormInfo = $formStore.info;
		const localFormItems = $formStore.items;
		const localFormStyle = $formStore.style;

		const formInfoChanged = !deepEqual(savedFormState.info, localFormInfo);
		const formItemsChanged = !deepEqual(savedFormState.items, localFormItems);
		const formStyleChanged = !deepEqual(savedFormState.style, localFormStyle);

		if (formInfoChanged || formItemsChanged || formStyleChanged) {
			needsUpdate = true;
		} else {
			needsUpdate = false;
		}
	}
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		<Button
			disabled={!needsUpdate || isUpdating}
			type="submit"
			variant={needsUpdate ? 'outline' : 'ghost'}
		>
			{#if isUpdating}
				<LoaderCircle class="mr-1 h-4 w-4 animate-spin" />
				Please Wait
			{:else}
				<SaveIcon class="mr-1 h-4 w-4" />
				Update
			{/if}
		</Button>
	</Tooltip.Trigger>
	<Tooltip.Content>
		{#if needsUpdate}
			<p>Save the current state of the form</p>
		{:else}
			<p>Form is up to date</p>
		{/if}
	</Tooltip.Content>
</Tooltip.Root>
