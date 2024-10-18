<script lang="ts">
	import Customizer from '$lib/components/custom/Customizer.svelte';
	import * as Card from '$lib/components/shadcn/ui/card/index.js';
	import ThemeWrapper from '$lib/components/custom/ThemeWrapper.svelte';
	import { onMount } from 'svelte';
	import { formStore } from '$lib/form/stores';
	import UpdateFormButton from '$lib/components/custom/UpdateFormButton.svelte';
	import RefreshFormButton from '$lib/components/custom/RefreshFormButton.svelte';
	import { applyAction, enhance } from '$app/forms';
	import Form from '$lib/components/custom/form/Form.svelte';
	import ShareFormButton from '$lib/components/custom/ShareFormButton.svelte';
	import type { PageServerData } from './$types';
	import type { LayoutServerData } from '../../../$types';

	export let data: PageServerData & LayoutServerData;
	let isMounted: boolean = false;
	let isRefetching: boolean = false;
	let isUpdating: boolean = false;

	onMount(() => {
		if (data.form) {
			formStore.set({
				info: data.form.info,
				items: data.form.items,
				style: data.form.style,
				pages: data.form.pages
			});
		}
		isMounted = true;
	});

	async function handleEnhanceRefreshForm(formData: FormData) {
		isRefetching = true;
		formData.append('userId', data.session.user?.id!);
		formData.append('formId', data.form?.info.formId!);
		return async ({ result }: { result: any }) => {
			if (result.type === 'success') {
				//extractValidationData(result.data.htmlData);
				console.log('reffresh ', result);
				$formStore.info = result.data.info;
				$formStore.items = result.data.items;

				console.log('FOOOORM IIIIITEMSS', $formStore.items);
			} else {
				await applyAction(result);
			}
			isRefetching = false;
		};
	}

	async function handleEnhanceUpdateForm(formData: FormData) {
		isUpdating = true;
		formData.append('userId', data.session.user?.id!);
		formData.append('formId', data.form!.uid);
		formData.append('formStore', JSON.stringify($formStore));

		return async ({ result }: { result: any }) => {
			if (result.type === 'success') {
				formStore.set({
					info: result.data.info,
					items: result.data.items,
					style: result.data.style,
					pages: result.data.pages
				});
			} else {
				await applyAction(result);
			}
			isUpdating = false;
		};
	}
</script>

{#if isMounted}
	<div class="h-full w-full bg-muted/40">
		<div class="mb-4 flex w-full items-center justify-end">
			<div class="flex w-fit space-x-2">
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

				<ShareFormButton />
			</div>
		</div>
		<div class="flex items-start space-x-4 sm:flex-col sm:space-x-0 sm:space-y-4">
			<div class="w-1/3 sm:w-full">
				<Card.Root class="sm:col-span-2">
					<Card.Header class="pb-3">
						<Card.Title>Style your Form</Card.Title>
						<Card.Description class="max-w-lg text-balance leading-relaxed">
							10x your google form by selecting themes, colors and much more.
						</Card.Description>
					</Card.Header>

					<Card.Content>
						<Customizer />
					</Card.Content>
				</Card.Root>
			</div>

			<div class="w-2/3 sm:w-full">
				<ThemeWrapper styleConfig={$formStore.style}>
					<Card.Root class="sm:col-span-2">
						<Card.Header class="pb-3">
							<Card.Title>Preview of your Form</Card.Title>
							<Card.Description class="max-w-lg text-balance leading-relaxed">
								This is a live Preview of your 10x google form
							</Card.Description>
						</Card.Header>

						<Card.Content>
							<Form
								items={$formStore.items}
								info={$formStore.info}
								isPreview={true}
								canSubmit={false}
							/>
						</Card.Content>
					</Card.Root>
				</ThemeWrapper>
			</div>
		</div>
	</div>
{/if}
