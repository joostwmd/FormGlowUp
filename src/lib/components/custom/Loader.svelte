<script lang="ts">
	import Grid from './loaders/Grid.svelte';
	import Spiral from './loaders/Spiral.svelte';
	import Zoomies from './loaders/Zoomies.svelte';

	export let variant: string;
</script>

<div class="flex h-24 w-full flex-col items-center justify-center">
	{#if variant === 'SPIRAL'}
		<Spiral />
	{:else if variant === 'ZOOMIES'}
		<Zoomies />
	{:else if variant === 'GRID'}
		<Grid />
	{/if}
</div>
