<script lang="ts">
	import Customizer from '$lib/components/custom/Customizer.svelte';
	import Form from '$lib/components/custom/form/Form.svelte';
	import * as Card from '$lib/components/shadcn/ui/card/index.js';
	import Button from '$lib/components/shadcn/ui/button/button.svelte';
	import * as Tooltip from '$lib/components/shadcn/ui/tooltip/index.js';
	import RefreshIcon from 'lucide-svelte/icons/refresh-ccw';
	import ShareIcon from 'lucide-svelte/icons/share';
	import SaveIcon from 'lucide-svelte/icons/arrow-down-to-line';
	import ThemeWrapper from '$lib/components/custom/ThemeWrapper.svelte';
	import { onMount } from 'svelte';
	import {
		formStyleStore,
		formStructureStore,
		formInfoStore,
		formStateStore
	} from '$lib/form/stores';
	import { constructFormInfoData, constructFormItemsData, fetchFormData } from '$lib/form/utils';
	import UpdateFormButton from '$lib/components/custom/UpdateFormButton.svelte';
	export let data: any;
	let isMounted: boolean = false;

	onMount(() => {
		$formStyleStore = data.formData.formStyle;
		//$formStructureStore = JSON.parse(data.formData.formStructure);
		$formStructureStore = data.formData.formStructure;
		$formInfoStore = data.formData.formInfo;
		$formStateStore = {
			formInfo: data.formData.formInfo,
			//formStructure: JSON.parse(data.formData.formStructure),
			formStructure: data.formData.formStructure,
			formStyle: data.formData.formStyle
		};
		isMounted = true;
	});

	async function refetchForm() {
		if (!data.session.user.id) {
			console.error('no user id');
			return;
		}

		const userId = data.session.user.id;
		const formId = data.formData.formInfo.formId;

		const { htmlData, formData } = await fetchFormData(userId, formId);

		const formInfo = await constructFormInfoData(formData);
		$formInfoStore = formInfo;
		const formItems = await constructFormItemsData(htmlData, formData);
		$formStructureStore.items = formItems;
	}
</script>

{#if isMounted}
	<div class="h-full w-full bg-muted/40 p-4">
		<div class="mb-4 flex w-full items-center justify-end">
			<div class="w-fit space-x-1">
				<UpdateFormButton userId={data.session.user.id} formId={data.uid} />

				<Tooltip.Root>
					<Tooltip.Trigger>
						<Button on:click={refetchForm} variant="outline"
							><RefreshIcon class="mr-1 h-4 w-4" />Refresh</Button
						>
					</Tooltip.Trigger>
					<Tooltip.Content>
						<p>Update the form with the latest changes</p>
					</Tooltip.Content>
				</Tooltip.Root>

				<Tooltip.Root>
					<Tooltip.Trigger>
						<Button><ShareIcon class="mr-1 h-4 w-4" />Share</Button>
					</Tooltip.Trigger>
					<Tooltip.Content>
						<p>Share the form with others</p>
					</Tooltip.Content>
				</Tooltip.Root>
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
				<ThemeWrapper styleConfig={$formStyleStore}>
					<Card.Root class="sm:col-span-2">
						<Card.Header class="pb-3">
							<Card.Title>Preview of your Form</Card.Title>
							<Card.Description class="max-w-lg text-balance leading-relaxed">
								This is a live Preview of your 10x google form
							</Card.Description>
						</Card.Header>

						<Card.Content>
							<Form formStructure={$formStructureStore} />
						</Card.Content>
					</Card.Root>
				</ThemeWrapper>
			</div>
		</div>
	</div>
{/if}
