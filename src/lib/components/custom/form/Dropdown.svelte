<script lang="ts">
	import { tick } from 'svelte';
	import { cn } from '$lib/utils.js';
	import Check from 'lucide-svelte/icons/check';
	import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down';
	import * as Command from '$lib/components/ui/command/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Button } from '../ui/button';
	import { formDataStore } from '$lib/google-forms/store';
	import { SUBMIT_KEY_PREFIX } from '$lib/google-forms/constants';

	export let description: string | null = null;
	export let randomizeOrder: boolean = false;
	export let options: string[];
	export let submitId: string;

	$: options = randomizeOrder ? options.sort(() => Math.random() - 0.5) : options;

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

{#if description}
	<p class="text-sm text-gray-500">{description}</p>
{/if}

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
		<Command.Root bind:value={$formDataStore[`${SUBMIT_KEY_PREFIX}${submitId}`]}>
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
