<script lang="ts">
	import { goto } from '$app/navigation';
	import * as Card from '$lib/components/shadcn/ui/card/index.js';
	import { createForm, getAccessTokens } from '$lib/firebase/utils';
	import { constructFormStructure, extractFormId, fetchFormItems } from '$lib/form/utils';
	import Button from '../shadcn/ui/button/button.svelte';
	import Input from '../shadcn/ui/input/input.svelte';

	export let userId: any;
	export let session: any;

	let editUrl: string =
		'https://docs.google.com/forms/d/1Skdmho8WN2RkylRuCPVhveobNVlwn-YoPjkMcwu0Zmc/edit';

	async function handleCreateForm() {
		if (!userId) {
			console.error('no user id');
			return;
		}

		const formId = extractFormId(editUrl);

		if (!formId) {
			console.error('no form id');
			return;
		}
		console.log('formId', formId);
		console.log('session', session);

		const accessToken = await getAccessTokens(userId);
		console.log('accessToken', accessToken);

		// const est = await fetchFormItems(formId, accessToken);
		// console.log('est', est);

		const { html, formData } = await fetchFormItems();
		const form = await constructFormStructure(html, formData);

		const res = await createForm(userId, formId, form.formInfo, JSON.stringify(form.formItems));

		if (res.success) {
			await goto(`/form/${res.uid}/edit`);
		} else {
			console.error('error creating form');
		}
	}
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>10x your Google Form</Card.Title>
		<Card.Description>Simply Input the Edit URL of your Google Form</Card.Description>
	</Card.Header>
	<Card.Content class="flex flex-col items-center">
		<Input placeholder="Edit Url of your Google form" bind:value={editUrl} />
		<Button on:click={handleCreateForm} class="mt-4">BetterForm</Button>
	</Card.Content>
</Card.Root>
