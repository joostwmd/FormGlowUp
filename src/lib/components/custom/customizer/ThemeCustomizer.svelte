<script lang="ts">
	import { localFormStore } from '$lib/form/stores';
	import { themes } from '$lib/components/shadcn/themes';
	import Button from '../../shadcn/ui/button/button.svelte';
	import Label from '../../shadcn/ui/label/label.svelte';
	import { cn } from '../../shadcn/utils';
	import { mode } from 'mode-watcher';
	import Check from 'lucide-svelte/icons/check';
	import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down';
	import * as Command from '$lib/components/shadcn/ui/command/index.js';
	import * as Popover from '$lib/components/shadcn/ui/popover/index.js';
	import { tick } from 'svelte';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import Reset from 'svelte-radix/Reset.svelte';
	import { FONTS, RADIUSES } from '$lib/form/constants';

	let open = false;
	let value = FONTS[0].value;
	$: selectedFontValue =
		FONTS.find((option) => option.value === value)?.display ?? 'No FONT Selected';

	function closeAndFocusTrigger(triggerId: string) {
		open = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}
</script>

<div class="flex flex-col space-y-4 md:space-y-6">
	<div class="flex items-center">
		<div class="text-xs text-muted-foreground">Pick a style and color for your components.</div>
		<Button
			variant="ghost"
			size="icon"
			class="ml-auto rounded-[0.5rem]"
			on:click={() => {
				localFormStore.update((prev) => ({
					...prev,
					style: { ...prev.style, radius: 0.5, theme: 'zinc' }
				}));
			}}
		>
			<Reset />
			<span class="sr-only"> Reset </span>
		</Button>
	</div>
	<div class="flex flex-1 flex-col space-y-4 md:space-y-6">
		<div class="space-y-1">
			<Label class="text-xs">Color</Label>
			<div class="grid grid-cols-3 gap-2">
				{#each themes as theme (theme.name)}
					{@const isActive = $localFormStore.style.theme === theme.name}
					<Button
						variant="outline"
						size="sm"
						on:click={() => {
							localFormStore.update((prev) => ({
								...prev,
								style: { ...prev.style, theme: theme.name }
							}));
						}}
						class={cn('justify-start', isActive && 'border-2 border-primary')}
						style="--theme-primary: hsl({theme.activeColor[$mode ?? 'dark']})"
					>
						<span
							class="mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[--theme-primary]"
						>
							{#if isActive}
								<Check class="h-4 w-4 text-white" />
							{/if}
						</span>
						{theme.label}
					</Button>
				{/each}
			</div>
		</div>

		<div class="space-y-1.5">
			<Label class="text-xs">Radius</Label>
			<div class="grid grid-cols-5 gap-2">
				{#each RADIUSES as radius}
					<Button
						variant="outline"
						size="sm"
						on:click={() => {
							localFormStore.update((prev) => ({
								...prev,
								style: { ...prev.style, radius }
							}));
						}}
						class={cn($localFormStore.style.radius === radius && 'border-2 border-primary')}
					>
						{radius}
					</Button>
				{/each}
			</div>
		</div>

		<div class="space-y-1.5">
			<Label class="text-xs">Mode</Label>
			<div class="grid grid-cols-3 gap-2">
				<Button
					variant="outline"
					size="sm"
					on:click={() =>
						localFormStore.update((prev) => ({
							...prev,
							style: { ...prev.style, mode: 'light' }
						}))}
					class={cn($localFormStore.style.mode === 'light' && 'border-2 border-primary')}
				>
					<Sun class="mr-1 -translate-x-1" />
					Light
				</Button>
				<Button
					variant="outline"
					size="sm"
					on:click={() =>
						localFormStore.update((prev) => ({
							...prev,
							style: { ...prev.style, mode: 'dark' }
						}))}
					class={cn($localFormStore.style.mode === 'dark' && 'border-2 border-primary')}
				>
					<Moon class="mr-1 -translate-x-1" />
					Dark
				</Button>
			</div>
		</div>

		<div class="space-y-1.5">
			<Label class="text-xs">Font</Label>
			<Popover.Root bind:open let:ids>
				<Popover.Trigger asChild let:builder>
					<Button
						builders={[builder]}
						variant="outline"
						role="combobox"
						aria-expanded={open}
						class="w-full justify-between"
					>
						{selectedFontValue}
						<ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</Popover.Trigger>
				<Popover.Content class="w-80 p-0">
					<Command.Root>
						<Command.Group>
							{#each FONTS as option}
								<Command.Item
									value={option.value}
									onSelect={(currentValue) => {
										value = currentValue;
										localFormStore.update((prev) => ({
											...prev,
											style: { ...prev.style, font: currentValue }
										}));
										closeAndFocusTrigger(ids.trigger);
									}}
								>
									<Check class={cn('mr-2 h-4 w-4', value !== option.value && 'text-transparent')} />
									{option.display}
								</Command.Item>
							{/each}
						</Command.Group>
					</Command.Root>
				</Popover.Content>
			</Popover.Root>
		</div>
	</div>
</div>
