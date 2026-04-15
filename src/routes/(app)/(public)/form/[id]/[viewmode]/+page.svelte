<script lang="ts">
	import type { PageServerData } from './$types';
	import ThemeWrapper from '$lib/components/custom/customizer/ThemeWrapper.svelte';
	import Form from '$lib/components/custom/form/Form.svelte';
	import { page } from '$app/stores';
	import GoBackToEditButton from '$lib/components/custom/buttons/GoBackToEditButton.svelte';

	export let data: PageServerData;

	const mode = $page.params.viewmode;
</script>

{#if data.form}
	<ThemeWrapper style={data.form?.style}>
		<div class="flex h-full min-h-0 w-full flex-col px-4 py-6 sm:px-6 sm:py-8">
			{#if mode === 'preview'}
				<div class="mb-4 flex shrink-0 justify-start">
					<GoBackToEditButton formId={data.uid} />
				</div>
			{/if}

			<div class="mx-auto flex w-full max-w-[820px] flex-1 min-h-0 flex-col">
				<Form items={data.form.items} info={data.form.info} isPreview={mode === 'preview'} />
			</div>
		</div>
	</ThemeWrapper>
{:else}
	<div class="flex h-full min-h-0 w-full flex-col items-center justify-center px-4 py-8 text-center sm:px-6">
		<p class="text-muted-foreground">
			This form could not be loaded. It may be missing or you may need to sign in.
		</p>
	</div>
{/if}
