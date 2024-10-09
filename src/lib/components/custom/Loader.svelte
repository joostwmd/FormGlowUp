<script lang="ts">
	import Grid from './loaders/Grid.svelte';
	import Spiral from './loaders/Spiral.svelte';
	import Zoomies from './loaders/Zoomies.svelte';

	export let variant: string;
	export let color: string = 'black';
</script>

<div class="flex h-24 w-full flex-col items-center justify-center">
	{#if variant === 'SPIRAL'}
		<Spiral {color} />
	{:else if variant === 'ZOOMIES'}
		<Zoomies {color} />
	{:else if variant === 'GRID'}
		<Grid {color} />
	{/if}
</div>
