<script lang="ts">
	import ErrorToast from '$lib/components/custom/toasts/ErrorToast.svelte';
	import * as Accordion from '$lib/components/shadcn/ui/accordion/index.js';
	import * as Card from '$lib/components/shadcn/ui/card/index.js';
	import ThemeWrapper from '$lib/components/custom/customizer/ThemeWrapper.svelte';
	import { onMount } from 'svelte';
	import { localFormStore, dbFormStore } from '$lib/form/stores';
	import UpdateFormButton from '$lib/components/custom/buttons/UpdateFormButton.svelte';
	import RefreshFormButton from '$lib/components/custom/buttons/RefreshFormButton.svelte';
	import { applyAction, enhance } from '$app/forms';
	import Form from '$lib/components/custom/form/Form.svelte';
	import ShareFormButton from '$lib/components/custom/buttons/ShareFormButton.svelte';
	import type { PageServerData } from './$types';
	import type { LayoutServerData } from '../../../$types';
	import { toast } from 'svelte-sonner';
	import { CREATE_FORM_ERROR_MESSAGES } from '$lib/form/constants';
	import PreviewFormButton from '$lib/components/custom/buttons/PreviewFormButton.svelte';
	import SuccessToast from '$lib/components/custom/toasts/SuccessToast.svelte';
	import PaintbrushIcon from 'lucide-svelte/icons/paintbrush';
	import ThemeCustomizer from '$lib/components/custom/customizer/ThemeCustomizer.svelte';

	export let data: PageServerData & LayoutServerData;
	let isMounted: boolean = false;
	let isRefetching: boolean = false;
	let isUpdating: boolean = false;

	onMount(() => {
		if (data.form) {
			localFormStore.set({
				info: data.form.info,
				items: data.form.items,
				style: data.form.style
			});

			dbFormStore.set({
				info: data.form.info,
				items: data.form.items,
				style: data.form.style
			});
		}
		isMounted = true;
	});

	function showErrorToast(message: string) {
		toast.custom(ErrorToast, {
			componentProps: {
				heading: 'Could not refresh form',
				description: message
			}
		});
	}

	function showSuccessToast(heading: string, message: string) {
		toast.custom(SuccessToast, {
			componentProps: {
				heading: heading,
				description: message
			}
		});
	}

	async function handleEnhanceRefreshForm(formData: FormData) {
		isRefetching = true;
		formData.append('userId', data.session.user?.id!);
		formData.append('formId', data.form?.info.formId!);
		return async ({ result }: { result: any }) => {
			if (result.type === 'success') {
				showSuccessToast(
					'Form refreshed',
					'Preview now matches Google Forms. Save if you want to keep any style or layout changes.'
				);
				localFormStore.update((store) => ({
					info: result.data.info,
					items: result.data.items,
					style: store.style
				}));
			} else if (result.type === 'failure') {
				showErrorToast(result.data!.message);
				await applyAction(result);
			} else if (result.type === 'error') {
				showErrorToast(CREATE_FORM_ERROR_MESSAGES.UNEXPECTED_ERROR);
				await applyAction(result);
			}
			isRefetching = false;
		};
	}

	async function handleEnhanceUpdateForm(formData: FormData) {
		isUpdating = true;
		formData.append('userId', data.session.user?.id!);
		formData.append('formId', data.form!.uid);
		formData.append('formData', JSON.stringify($localFormStore));

		return async ({ result }: { result: any }) => {
			if (result.type === 'success') {
				console.log('Form Updated', result.data);
				showSuccessToast(
					'Changes saved',
					'Your glow-up is published. New respondents will see this version.'
				);

				localFormStore.set({
					info: result.data.info,
					items: result.data.items,
					style: result.data.style
				});

				dbFormStore.set({
					info: result.data.info,
					items: result.data.items,
					style: result.data.style
				});
			} else {
				await applyAction(result);
			}
			isUpdating = false;
		};
	}
</script>

{#if isMounted && data.form}
	<div class="edit-shell h-full w-full p-4">
		<div class="mb-4 flex w-full items-center justify-end">
			<div class="edit-toolbar mt-4 flex w-fit flex-row flex-wrap justify-end gap-2">
				<form
					method="POST"
					action="?/updateForm"
					use:enhance={({ formData }) => handleEnhanceUpdateForm(formData)}
				>
					<UpdateFormButton {isUpdating} />
				</form>

				<form
					method="POST"
					action="?/refreshForm"
					use:enhance={({ formData }) => handleEnhanceRefreshForm(formData)}
				>
					<RefreshFormButton {isRefetching} />
				</form>

				<PreviewFormButton formId={data.uid} />

				<ShareFormButton formId={data.uid} />
			</div>
		</div>
		<div class="flex items-start space-x-4 sm:flex-col sm:space-x-0 sm:space-y-4">
			<div class="w-1/3 sm:w-full">
				<Card.Root class="sm:col-span-2">
					<Card.Content>
						<Accordion.Root class="w-full">
							<Accordion.Item value="customization">
								<Accordion.Trigger class="transition-colors hover:text-foreground">
									<div class="flex items-center gap-2">
										<PaintbrushIcon class="h-4 w-4 shrink-0 opacity-80" aria-hidden="true" />
										Customize appearance
									</div>
								</Accordion.Trigger>
								<Accordion.Content>
									<ThemeCustomizer />
								</Accordion.Content>
							</Accordion.Item>
						</Accordion.Root>
					</Card.Content>
				</Card.Root>
			</div>

			<div class="w-2/3 sm:w-full">
				<div class="edit-preview-intro mb-8">
					<h1 class="text-2xl font-semibold tracking-tight">Live preview</h1>
					<p class="mt-2 max-w-prose text-pretty text-sm leading-relaxed text-muted-foreground">
						What you see here is how respondents will experience your form. Saving publishes theme
						and structure updates; refresh pulls the latest questions from Google Forms.
					</p>
				</div>
				<ThemeWrapper style={$localFormStore.style}>
					<Card.Root class="sm:col-span-2">
						<Card.Content
							class="flex h-[min(70vh,800px)] min-h-0 flex-col overflow-hidden"
						>
							<Form items={$localFormStore.items} info={$localFormStore.info} isPreview={true} />
						</Card.Content>
					</Card.Root>
				</ThemeWrapper>
			</div>
		</div>
	</div>
{/if}

<style>
	@media (prefers-reduced-motion: no-preference) {
		@keyframes edit-shell-in {
			from {
				opacity: 0;
				transform: translate3d(0, 6px, 0);
			}
			to {
				opacity: 1;
				transform: translate3d(0, 0, 0);
			}
		}

		.edit-shell {
			animation: edit-shell-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
		}

		.edit-preview-intro {
			animation: edit-shell-in 0.42s cubic-bezier(0.22, 1, 0.36, 1) 0.06s both;
		}
	}

	.edit-toolbar :global(button),
	.edit-toolbar :global([role='button']) {
		transition:
			transform 0.12s ease,
			box-shadow 0.12s ease;
	}

	.edit-toolbar :global(button:active),
	.edit-toolbar :global([role='button']:active) {
		transform: translateY(1px);
	}
</style>
