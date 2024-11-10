<script lang="ts">
	import { localFormStore, dbFormStore } from '$lib/form/stores';
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
	let changedCategories: string[] = [];

	$: {
		const dbFormState = $dbFormStore;
		const localFormState = $localFormStore;

		changedCategories = [];

		const formInfoChanged = !deepEqual(dbFormState.info, localFormState.info);
		const formItemsChanged = !deepEqual(dbFormState.items, localFormState.items);
		const formStyleChanged = !deepEqual(dbFormState.style, localFormState.style);
		const formPagesChanged = !deepEqual(dbFormState.pages, localFormState.pages);

		if (formInfoChanged) changedCategories.push('Info');
		if (formItemsChanged) changedCategories.push('Items');
		if (formStyleChanged) changedCategories.push('Style');
		if (formPagesChanged) changedCategories.push('Pages');

		needsUpdate = changedCategories.length > 0;
	}
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		<div class="relative">
			{#if needsUpdate}
				<div
					class="absolute -left-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white"
				>
					{changedCategories.length}
				</div>
			{/if}
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
		</div>
	</Tooltip.Trigger>
	<Tooltip.Content>
		{#if needsUpdate}
			<p>You have unsaved changes:</p>
			<ul>
				{#each changedCategories as category}
					<li>{category}</li>
				{/each}
			</ul>
		{:else}
			<p>Form is up to date</p>
		{/if}
	</Tooltip.Content>
</Tooltip.Root>
