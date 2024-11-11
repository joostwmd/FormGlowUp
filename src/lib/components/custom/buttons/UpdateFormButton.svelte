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

	function getChangedProperties(
		obj1: any,
		obj2: any,
		parentKey = ''
	): { prop: string; newValue: any }[] {
		const changes: { prop: string; newValue: any }[] = [];
		for (const key of Object.keys(obj1)) {
			const propPath = parentKey ? `${parentKey}.${key}` : key;
			if (!deepEqual(obj1[key], obj2[key])) {
				if (
					typeof obj1[key] === 'object' &&
					obj1[key] !== null &&
					typeof obj2[key] === 'object' &&
					obj2[key] !== null
				) {
					changes.push(...getChangedProperties(obj1[key], obj2[key], propPath));
				} else {
					changes.push({ prop: propPath, newValue: obj2[key] });
				}
			}
		}
		return changes;
	}

	export let isUpdating: boolean = false;
	let needsUpdate: boolean = false;
	let changedDetails: string[] = [];

	$: {
		const dbFormState = $dbFormStore;
		const localFormState = $localFormStore;

		changedDetails = [];

		// Check info changes
		const infoChanges = getChangedProperties(dbFormState.info, localFormState.info);
		infoChanges.forEach(({ prop, newValue }) => {
			changedDetails.push(`Info "${prop}" changed to "${newValue}"`);
		});

		// Check style changes
		const styleChanges = getChangedProperties(dbFormState.style, localFormState.style);
		styleChanges.forEach(({ prop, newValue }) => {
			changedDetails.push(`Style "${prop}" changed to "${newValue}"`);
		});

		// Check items changes
		const itemsChanges: { prop: string; newValue: any }[] = [];
		localFormState.items.forEach((item, index) => {
			const dbItem = dbFormState.items[index];
			if (!dbItem) {
				changedDetails.push(`Item added: ${item.displayData?.title || item.submitId}`);
			} else {
				const itemChanges = getChangedProperties(dbItem, item, `Question ${index + 1}`);
				itemChanges.forEach(({ prop, newValue }) => {
					changedDetails.push(`${prop} changed to "${newValue}"`);
				});
			}
		});

		// Handle removed items
		if (dbFormState.items.length > localFormState.items.length) {
			for (let i = localFormState.items.length; i < dbFormState.items.length; i++) {
				const removedItem = dbFormState.items[i];
				changedDetails.push(
					`Item removed: ${removedItem.displayData?.title || removedItem.submitId}`
				);
			}
		}

		needsUpdate = changedDetails.length > 0;
	}
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		<div class="relative">
			{#if needsUpdate}
				<div
					class="absolute -left-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white"
				>
					{changedDetails.length}
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
				{#each changedDetails as detail}
					<li>{detail}</li>
				{/each}
			</ul>
		{:else}
			<p>Form is up to date</p>
		{/if}
	</Tooltip.Content>
</Tooltip.Root>
