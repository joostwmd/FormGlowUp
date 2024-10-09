<script lang="ts">
	import { updateForm } from '$lib/firebase/utils';
	import {
		formInfoStore,
		formStructureStore,
		formStyleStore,
		formStateStore
	} from '$lib/form/stores';
	import * as Tooltip from '$lib/components/shadcn/ui/tooltip/index.js';
	import { Button } from '../shadcn/ui/button';
	import SaveIcon from 'lucide-svelte/icons/arrow-down-to-line';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';

	export let userId: string;
	export let formId: string;

	let needsUpdate: boolean = false;
	let isUpdating: boolean = false;

	$: {
		const savedFormState = $formStateStore;
		const localFormInfo = $formInfoStore;
		const localFormStructure = JSON.stringify($formStructureStore);
		const localFormStyle = $formStyleStore;

		const formInfoChanged =
			JSON.stringify(savedFormState.formInfo) !== JSON.stringify(localFormInfo);
		const formStructureChanged =
			JSON.stringify(savedFormState.formStructure) !== localFormStructure;

		const formStyleChanged =
			JSON.stringify(savedFormState.formStyle) !== JSON.stringify(localFormStyle);

		if (formInfoChanged || formStructureChanged || formStyleChanged) {
			console.log('needsUpdate');
			needsUpdate = true;
		} else {
			console.log('no needsUpdate');
			needsUpdate = false;
		}
	}

	async function handleUpdateForm() {
		isUpdating = true;
		await updateForm(userId, formId, $formInfoStore, $formStructureStore, $formStyleStore)
			.then((res) => {
				if (!res) {
					console.error('error updating form');
					isUpdating = false;
					return;
				} else {
					console.log('form updated', res.data);

					console.log('TEST', JSON.stringify(res.data.formStructure));

					formStateStore.set({
						formInfo: res.data.formInfo,
						formStructure: res.data.formStructure,
						formStyle: res.data.formStyle
					});

					formInfoStore.set(res.data.formInfo);
					formStructureStore.set(res.data.formStructure);
					formStyleStore.set(res.data.formStyle);
				}
			})
			.finally(() => {
				isUpdating = false;
			});
	}
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		<Button
			disabled={!needsUpdate || isUpdating}
			on:click={handleUpdateForm}
			variant={needsUpdate ? 'outline' : 'ghost'}
		>
			{#if isUpdating}
				<LoaderCircle class="mr-1 h-4 w-4 animate-spin" />
				Please Wait
			{:else}
				<SaveIcon class="mr-1 h-4 w-4" />
				Update
			{/if}
		</Button>
	</Tooltip.Trigger>
	<Tooltip.Content>
		{#if needsUpdate}
			<p>Save the current state of the form</p>
		{:else}
			<p>Form is up to date</p>
		{/if}
	</Tooltip.Content>
</Tooltip.Root>
