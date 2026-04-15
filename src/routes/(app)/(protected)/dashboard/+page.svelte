<script lang="ts">
	import ErrorToast from '$lib/components/custom/toasts/ErrorToast.svelte';
	import Button from '$lib/components/shadcn/ui/button/button.svelte';
	import { applyAction, enhance } from '$app/forms';
	import type { PageServerData } from './$types';
	import type { LayoutServerData } from '../$types';
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

	let editUrl: string;
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

<div class="dashboard-card-in flex w-full flex-col items-center">
	<Card.Root class="mt-8 w-full max-w-md border-border/80 shadow-sm">
		<Card.Header>
			<Card.Title>Import a Google Form</Card.Title>
			<Card.Description>
				Paste the editor URL from Google Forms (the long link that opens the form builder, with
				<code class="rounded bg-muted px-1 py-0.5 text-xs">/edit</code>
				in it).
			</Card.Description>
		</Card.Header>
		<Card.Content class="flex flex-col items-stretch">
			<form
				method="POST"
				action="?/createForm"
				use:enhance={({ formData }) => handleEnhanceCreateForm(formData)}
				class="flex w-full flex-col gap-4"
			>
				<Input
					name="editUrl"
					placeholder="https://docs.google.com/forms/d/…/edit"
					bind:value={editUrl}
					autocomplete="off"
					spellcheck="false"
				/>
				<Button class="transition-transform active:translate-y-px" type="submit" disabled={isCreating || !editUrl}>
					{#if isCreating}
						<LoaderCircle class="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
						Importing…
					{:else}
						Glow up this form
					{/if}
				</Button>
			</form>
		</Card.Content>
	</Card.Root>
</div>

{#if data.forms.length === 0}
	<p
		class="dashboard-empty-in mx-auto mt-10 max-w-md px-4 text-center text-sm leading-relaxed text-muted-foreground"
	>
		No forms yet. After you import one, it will show up here with shortcuts to edit, preview, and
		share.
	</p>
{:else}
	<div
		class="mt-12 grid grid-cols-1 gap-4 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
	>
		{#each data.forms as form, i}
			<div
				class="dashboard-form-card sm:col-span-2"
				style="animation-delay: {Math.min(i, 24) * 45}ms"
			>
				<Card.Root>
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
			</div>
		{/each}
	</div>
{/if}

<style>
	@media (prefers-reduced-motion: no-preference) {
		@keyframes dashboard-in {
			from {
				opacity: 0;
				transform: translate3d(0, 8px, 0);
			}
			to {
				opacity: 1;
				transform: translate3d(0, 0, 0);
			}
		}

		.dashboard-card-in {
			animation: dashboard-in 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
		}

		.dashboard-empty-in {
			animation: dashboard-in 0.45s cubic-bezier(0.22, 1, 0.36, 1) 0.08s both;
		}

		.dashboard-form-card {
			opacity: 0;
			animation: dashboard-in 0.42s cubic-bezier(0.22, 1, 0.36, 1) both;
		}
	}

	.dashboard-form-card {
		transition:
			border-color 0.2s ease,
			box-shadow 0.2s ease;
	}

	@media (hover: hover) and (pointer: fine) {
		.dashboard-form-card:hover {
			border-color: hsl(var(--primary) / 0.22);
			box-shadow: 0 12px 40px -28px hsl(var(--foreground) / 0.45);
		}
	}
</style>
