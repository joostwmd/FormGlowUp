<script lang="ts">
	import { tick } from 'svelte';
	import { cn } from '$lib/components/shadcn/utils';
	import Check from 'lucide-svelte/icons/check';
	import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down';
	import * as Command from '$lib/components/shadcn/ui/command/index.js';
	import * as Popover from '$lib/components/shadcn/ui/popover/index.js';
	import Button from '$lib/components/shadcn/ui/button/button.svelte';
	import { formDataStore } from '$lib/form/stores';
	import { SUBMIT_KEY_PREFIX } from '$lib/form/constants';
	import type { TChoicesItem } from '$lib/form/types';

	export let item: TChoicesItem;

	let options = item.options;
	$: options = item.attributes.randomizeOrder ? options.sort(() => Math.random() - 0.5) : options;

	let open = false;
	let value = '';
	$: selectedValue = options.find((option) => option === value) ?? 'No Option Selected';

	// rest of the form with the keyboard.
	function closeAndFocusTrigger(triggerId: string) {
		open = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}
</script>

<Popover.Root bind:open let:ids>
	<Popover.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			variant="outline"
			role="combobox"
			aria-expanded={open}
			class="w-full justify-between"
		>
			{selectedValue}
			<ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
		</Button>
	</Popover.Trigger>
	<Popover.Content class="w-80 p-0">
		<Command.Root bind:value={$formDataStore[`${SUBMIT_KEY_PREFIX}${item.submitId}`]}>
			<Command.Group>
				<Command.Item
					value="No Option Selected"
					onSelect={(currentValue) => {
						value = currentValue;
						closeAndFocusTrigger(ids.trigger);
					}}
				>
					<Check class={cn('mr-2 h-4 w-4', value !== null && 'text-transparent')} />
					No Option Selected
				</Command.Item>
				{#each options as option}
					<Command.Item
						value={option}
						onSelect={(currentValue) => {
							value = currentValue;
							closeAndFocusTrigger(ids.trigger);
						}}
					>
						<Check class={cn('mr-2 h-4 w-4', value !== option && 'text-transparent')} />
						{option}
					</Command.Item>
				{/each}
			</Command.Group>
		</Command.Root>
	</Popover.Content>
</Popover.Root>
