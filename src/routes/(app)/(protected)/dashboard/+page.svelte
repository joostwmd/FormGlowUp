<script lang="ts">
	import Button from '$lib/components/shadcn/ui/button/button.svelte';
	import { applyAction, enhance } from '$app/forms';
	import type { PageServerData } from './$types';
	import type { LayoutServerData } from '../$types';
	import FormCard from '$lib/components/custom/FormCard.svelte';
	import NewFormCard from '$lib/components/custom/NewFormCard.svelte';

	export let data: LayoutServerData & PageServerData;

	import * as Card from '$lib/components/shadcn/ui/card/index.js';

	import Input from '$lib/components/shadcn/ui/input/input.svelte';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';
	import type { ActionResult } from '@sveltejs/kit';

	let isCreating: boolean = false;
	let editUrl: string =
		'https://docs.google.com/forms/d/1qJwjEP7NVbhzhTB1jaU4muQMwZov3m1RWJAf7iqHX_A/edit';

	async function handleEnhanceForm(formData: FormData) {
		isCreating = true;
		formData.append('userId', data.session.user?.id!);
		return async ({ result }: { result: ActionResult }) => {
			await applyAction(result);
			isCreating = false;
		};
	}
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>10x your Google Form</Card.Title>
		<Card.Description>Simply Input the Edit URL of your Google Form</Card.Description>
	</Card.Header>
	<Card.Content class="flex flex-col items-center">
		<form
			method="POST"
			action="?/create"
			use:enhance={({ formData }) => handleEnhanceForm(formData)}
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
	</Card.Content>
</Card.Root>

{#each data.forms as form}
	<FormCard formData={form} />
{/each}

<!-- <Button on:click={() => signOut()} class="mb-4">SignOut</Button> -->
