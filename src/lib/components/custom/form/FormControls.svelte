<script lang="ts">
	import Button from '$lib/components/shadcn/ui/button/button.svelte';

	export let totalPages: number;
	export let currentPage: number;

	export let handleOnSubmit: () => void;
	export let handleOnNext: () => void;
	export let handleOnPrevious: () => void;
</script>

<div class="flex w-full justify-between">
	{#if currentPage === 0}
		<Button variant="ghost" disabled>Previous</Button>
	{:else}
		<Button variant="outline" on:click={handleOnPrevious}>Previous</Button>
	{/if}

	{#if currentPage === totalPages - 1}
		<Button on:click={handleOnSubmit}>Submit</Button>
	{:else}
		<Button on:click={handleOnNext}>Next</Button>
	{/if}
</div>
