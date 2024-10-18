<script lang="ts">
	import Button from '$lib/components/shadcn/ui/button/button.svelte';
	import { applyAction, enhance } from '$app/forms';
	import type { PageServerData } from './$types';
	import type { LayoutServerData } from '../$types';
	import PenIcon from 'lucide-svelte/icons/pen';
	import TrashIcon from 'lucide-svelte/icons/trash';
	import * as AlertDialog from '$lib/components/shadcn/ui/alert-dialog/index.js';
	import * as Card from '$lib/components/shadcn/ui/card/index.js';
	import Input from '$lib/components/shadcn/ui/input/input.svelte';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';
	import type { ActionResult } from '@sveltejs/kit';
	import { goto, invalidate, invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import ShareFormButton from '$lib/components/custom/ShareFormButton.svelte';

	export let data: LayoutServerData & PageServerData;

	let isCreating: boolean = false;

	let editUrl: string =
		'https://docs.google.com/forms/d/1Skdmho8WN2RkylRuCPVhveobNVlwn-YoPjkMcwu0Zmc/edit';

	async function handleEnhanceCreateForm(formData: FormData) {
		isCreating = true;
		formData.append('userId', data.session.user?.id!);
		return async ({ result }: { result: ActionResult }) => {
			await applyAction(result);
			isCreating = false;
		};
	}

	async function handleEnhanceDeleteForm(formData: FormData, formId: string) {
		formData.append('formId', formId);
		formData.append('userId', data.session.user?.id!);

		return async ({ result }: { result: ActionResult }) => {
			await invalidate((url) => url.pathname === $page.url.pathname);
			await applyAction(result);
		};
	}

	async function handleEditClick(formId: string) {
		await goto(`${$page.url.origin}/form/${formId}/edit`);
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
	</Card.Content>
</Card.Root>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
	{#each data.forms as form}
		<Card.Root class="sm:col-span-2">
			<Card.Header>
				<Card.Title>{form.info.title}</Card.Title>
				<Card.Description>{form.info.description}</Card.Description>
			</Card.Header>

			<Card.Content class="flex space-x-2">
				<AlertDialog.Root>
					<AlertDialog.Trigger asChild let:builder>
						<Button builders={[builder]} variant="outline">
							<TrashIcon class="h-4 w-4" />
						</Button>
					</AlertDialog.Trigger>
					<AlertDialog.Content>
						<AlertDialog.Header>
							<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
							<AlertDialog.Description>
								This action cannot be undone. This will permanently delete your account and remove
								your data from our servers.
							</AlertDialog.Description>
						</AlertDialog.Header>
						<AlertDialog.Footer>
							<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
							<form
								method="POST"
								action="?/deleteForm"
								use:enhance={({ formData }) => handleEnhanceDeleteForm(formData, form.uid)}
							>
								<AlertDialog.Action class="w-full" type="submit">Delete</AlertDialog.Action>
							</form>
						</AlertDialog.Footer>
					</AlertDialog.Content>
				</AlertDialog.Root>

				<Button variant="outline" on:click={() => handleEditClick(form.uid)}>
					<PenIcon class="mr-2 h-4 w-4" />
					Edit
				</Button>

				<ShareFormButton />
			</Card.Content>
		</Card.Root>
	{/each}
</div>
