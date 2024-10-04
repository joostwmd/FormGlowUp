<script lang="ts">
	import * as Card from '$lib/components/shadcn/ui/card/index.js';
	import { LOADERS } from '$lib/form/constants';
	import Loader from './Loader.svelte';
	import { config } from '$lib';
	import { cn } from '../shadcn/utils';

	function selectLoader(loaderValue: string) {
		config.update((prev) => ({ ...prev, loader: loaderValue }));
	}
</script>

<div class="grid grid-cols-2 gap-4">
	{#each LOADERS as loader}
		<button on:click={() => selectLoader(loader.value)} class="">
			<Card.Root class={cn($config.loader === loader.value && 'border-2 border-primary')}>
				<Card.Content>
					<Loader variant={loader.value} />
				</Card.Content>
			</Card.Root>
		</button>
	{/each}
</div>
