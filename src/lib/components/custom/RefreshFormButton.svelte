<script lang="ts">
	import * as Tooltip from '$lib/components/shadcn/ui/tooltip/index.js';
	import { formInfoStore, formStructureStore } from '$lib/form/stores';
	import { fetchFormData, constructFormInfoData, constructFormItemsData } from '$lib/form/utils';
	import { Button } from '../shadcn/ui/button';
	import RefreshIcon from 'lucide-svelte/icons/refresh-ccw';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';

	export let userId: string;
	export let formId: string;

	let isRefetching: boolean = false;

	async function refetchForm() {
		isRefetching = true;
		const { htmlData, formData } = await fetchFormData(userId, formId);
		const formInfo = await constructFormInfoData(formData);
		console.log('formInfo', formInfo);
		$formInfoStore = formInfo;
		const formItems = await constructFormItemsData(htmlData, formData);
		$formStructureStore.pages = formItems;
		isRefetching = false;
	}
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		<Button on:click={refetchForm} variant="outline">
			{#if isRefetching}
				<LoaderCircle class="mr-1 h-4 w-4 animate-spin" />
				Refreshing
			{:else}
				<RefreshIcon class="mr-1 h-4 w-4" />Refresh
			{/if}
		</Button>
	</Tooltip.Trigger>
	<Tooltip.Content>
		<p>Update the form with the latest changes of yout google form</p>
	</Tooltip.Content>
</Tooltip.Root>
