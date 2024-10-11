<script lang="ts">
	import { goto } from '$app/navigation';
	import * as Card from '$lib/components/shadcn/ui/card/index.js';
	// import { createForm } from '$lib/firebase/utils';
	import { DEFAULT_END_TEXT, DEFAULT_LOADER } from '$lib/form/constants';
	// import {
	// 	constructFormInfoData,
	// 	constructFormItemsData,
	// 	extractFormId,
	// 	fetchFormData
	// } from '$lib/form/utils';
	import Button from '../shadcn/ui/button/button.svelte';
	import Input from '../shadcn/ui/input/input.svelte';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';

	export let userId: any;

	let isCreating: boolean = false;
	let editUrl: string =
		'https://docs.google.com/forms/d/1qJwjEP7NVbhzhTB1jaU4muQMwZov3m1RWJAf7iqHX_A/edit';

	async function handleCreateForm() {
		console.log('editUrl create form', editUrl);
		// if (!userId) {
		// 	console.error('no user id');
		// 	return;
		// }

		// const formId = extractFormId(editUrl);

		// if (!formId) {
		// 	console.error('no form id');
		// 	return;
		// }

		// isCreating = true;

		// const { htmlData, formData } = await fetchFormData(userId, formId);
		// const formInfo = await constructFormInfoData(formData);
		// const formItems = await constructFormItemsData(htmlData, formData);
		// console.log('formItems', formItems);

		// const formStructure = {
		// 	loader: DEFAULT_LOADER,
		// 	endText: DEFAULT_END_TEXT,
		// 	pages: formItems
		// };

		// const res = await createForm(userId, formId, formInfo, formStructure);

		// if (res.success) {
		// 	await goto(`/form/${res.uid}/edit`);
		// } else {
		// 	console.error('error creating form');
		// }

		// isCreating = false;
	}
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>10x your Google Form</Card.Title>
		<Card.Description>Simply Input the Edit URL of your Google Form</Card.Description>
	</Card.Header>
	<Card.Content class="flex flex-col items-center">
		<Input placeholder="Edit Url of your Google form" bind:value={editUrl} />
		<Button class="mt-4" disabled={isCreating || !editUrl} on:click={handleCreateForm}>
			{#if isCreating}
				<LoaderCircle class="mr-1 h-4 w-4 animate-spin" />
				Enhances Form
			{:else}
				Better Form
			{/if}
		</Button>
	</Card.Content>
</Card.Root>
