<script lang="ts">
	import * as Card from '$lib/components/shadcn/ui/card/index.js';
	import { LOADERS } from '$lib/form/constants';
	import Loader from './Loader.svelte';
	import { cn } from '../shadcn/utils';

	let loacelTestValue: any;

	function selectLoader(loaderValue: string) {
		loacelTestValue = { loader: loaderValue };
		//config.update((prev) => ({ ...prev, loader: loaderValue }));
	}
</script>

<div class="flex flex-col space-y-4 md:space-y-6">
	<div class="text-xs text-muted-foreground">Choose Loading Animation</div>

	<div class="grid grid-cols-2 gap-4">
		{#each LOADERS as loader}
			<button on:click={() => selectLoader(loader.value)} class="">
				<Card.Root class={cn(loacelTestValue.loader === loader.value && 'border-2 border-primary')}>
					<Card.Content>
						<Loader variant={loader.value} />
					</Card.Content>
				</Card.Root>
			</button>
		{/each}
	</div>
</div>
