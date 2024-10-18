<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import Button from '../../shadcn/ui/button/button.svelte';
	import Input from '../../shadcn/ui/input/input.svelte';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';

	export let isCreating: boolean = false;
	export let handleEnhanceCreateForm: (formData: FormData) => void;

	let editUrl: string =
		'https://docs.google.com/forms/d/1qJwjEP7NVbhzhTB1jaU4muQMwZov3m1RWJAf7iqHX_A/edit';
</script>

<form
	method="POST"
	action="?/createForm"
	use:enhance={({ formData }) => handleEnhanceCreateForm(formData)}
	class="flex w-full flex-col items-center"
>
	<Input name="editUrl" placeholder="Edit Url of your Google form" bind:value={editUrl} />
	<Button class="mt-4" type="submit" disabled={isCreating || !editUrl}>
		{#if isCreating}
			<LoaderCircle class="mr-1 h-4 w-4 animate-spin" />
			Enhances Form
		{:else}
			Better Form
		{/if}
	</Button>
</form>
