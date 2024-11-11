<script lang="ts">
	import Button from '$lib/components/shadcn/ui/button/button.svelte';

	export let isPreview: boolean = false;
	export let state: 'WELCOME' | 'FORM' | 'END' = 'WELCOME';
	export let totalPages: number;
	export let currentItem: number;

	export let handleOnSubmit: () => void;
	export let handleOnNext: () => void;
	export let handleOnPrevious: () => void;
</script>

<div class="flex w-full justify-between">
	{#if state === 'WELCOME'}
		<Button class="ml-auto" on:click={handleOnNext}>Start</Button>
	{:else if state === 'FORM'}
		{#if currentItem === 0 && !isPreview}
			<Button variant="ghost" disabled>Previous</Button>
		{:else}
			<Button variant="outline" on:click={handleOnPrevious}>Previous</Button>
		{/if}

		{#if currentItem === totalPages - 1}
			<Button on:click={handleOnSubmit}>Submit</Button>
		{:else}
			<Button on:click={handleOnNext}>Next</Button>
		{/if}
	{:else if state === 'END' && isPreview}
		<Button on:click={handleOnPrevious}>Back</Button>
	{/if}
</div>
