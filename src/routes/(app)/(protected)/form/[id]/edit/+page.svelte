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
					'Form Refreshed',
					'Your form has been successfully refreshed with the latest data from google forms. Don not forget to save your changes.'
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
					'Form Updated',
					'Your form has been successfully updated with the latest data. Your changes are now published.'
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
	<div class="h-full w-full p-4">
		<div class="mb-4 flex w-full items-center justify-end">
			<div class="mt-4 flex w-fit flex-row gap-2 sm:grid sm:grid-cols-2 sm:gap-2">
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
								<Accordion.Trigger>
									<div class="flex items-center">
										<PaintbrushIcon class="mr-2 h-4 w-4" />
										Cusomize your Form
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
				<div class="mb-8">
					<h1>Preview of you Form</h1>
					<p class="max-w-lg text-balance leading-relaxed">
						This is a live Preview of your 10x google form
					</p>
				</div>
				<ThemeWrapper style={$localFormStore.style}>
					<Card.Root class="sm:col-span-2">
						<Card.Content>
							<Form items={$localFormStore.items} info={$localFormStore.info} isPreview={true} />
						</Card.Content>
					</Card.Root>
				</ThemeWrapper>
			</div>
		</div>
	</div>
{/if}
