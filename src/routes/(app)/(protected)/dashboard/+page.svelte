<script lang="ts">
	import ErrorToast from '$lib/components/custom/toasts/ErrorToast.svelte';
	import Button from '$lib/components/shadcn/ui/button/button.svelte';
	import { applyAction, enhance } from '$app/forms';
	import type { PageServerData } from './$types';
	import type { LayoutServerData } from '../$types';
	import TrashIcon from 'lucide-svelte/icons/trash';
	import * as AlertDialog from '$lib/components/shadcn/ui/alert-dialog/index.js';
	import * as Card from '$lib/components/shadcn/ui/card/index.js';
	import Input from '$lib/components/shadcn/ui/input/input.svelte';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';
	import type { ActionResult } from '@sveltejs/kit';
	import { goto, invalidate } from '$app/navigation';
	import { page } from '$app/stores';
	import { toast } from 'svelte-sonner';
	import { CREATE_FORM_ERROR_MESSAGES } from '$lib/form/constants';
	import PreviewFormButton from '$lib/components/custom/buttons/PreviewFormButton.svelte';
	import ShareFormButton from '$lib/components/custom/buttons/ShareFormButton.svelte';
	import EditFormButton from '$lib/components/custom/buttons/EditFormButton.svelte';
	import DeleteFormButton from '$lib/components/custom/buttons/DeleteFormButton.svelte';

	export let data: LayoutServerData & PageServerData;

	let isCreating: boolean = false;

	let editUrl: string =
		'https://docs.google.com/forms/d/1ifsMl1Eq4ZUitM0CV5IPIt2Yta2mKIAuj25MWQebSmg/edit';
	//'https://docs.google.com/forms/d/1ifsMl1Eq4ZUitM0CV5IPIt2Yta2mKIAuj25MWQebSmg/edit';

	async function handleEnhanceCreateForm(formData: FormData) {
		isCreating = true;
		formData.append('userId', data.session.user?.id!);
		return async ({ result }: { result: ActionResult }) => {
			if (result.type === 'failure') {
				isCreating = false;
				showErrorToast(result.data!.message);
				return;
			} else if (result.type === 'error') {
				showErrorToast(CREATE_FORM_ERROR_MESSAGES.UNEXPECTED_ERROR);
				isCreating = false;
				return;
			} else {
				isCreating = false;
				await applyAction(result);
			}
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

	function showErrorToast(message: string) {
		toast.custom(ErrorToast, {
			componentProps: {
				heading: 'Could not create form',
				description: message
			}
		});
	}
</script>

<div class="flex w-full flex-col items-center">
	<Card.Root class="mt-8 w-full max-w-96">
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
</div>

<div class="mt-12 grid grid-cols-1 gap-4 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
	{#each data.forms as form}
		<Card.Root class="sm:col-span-2">
			<Card.Header>
				<div class="flex w-full items-center justify-between">
					<div>
						<Card.Title>{form.info.title}</Card.Title>
						<Card.Description>{form.info.description}</Card.Description>
					</div>

					<DeleteFormButton formId={form.uid} handleDeleteForm={handleEnhanceDeleteForm} />
				</div>
			</Card.Header>

			<Card.Content class="flex space-x-2">
				<EditFormButton formId={form.uid} />

				<PreviewFormButton formId={form.uid} />

				<ShareFormButton formId={form.uid} />
			</Card.Content>
		</Card.Root>
	{/each}
</div>
