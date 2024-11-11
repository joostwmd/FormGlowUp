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
		{#if mode === 'preview'}
			<div class="flex justify-start">
				<GoBackToEditButton formId={data.uid} />
			</div>
		{/if}

		<div class="flex h-screen w-screen flex-col items-center justify-center px-8">
			<div class="h-4/6 w-full max-w-[820px]">
				<Form items={data.form.items} info={data.form.info} isPreview={mode === 'preview'} />
			</div>

			{#if mode === 'public'}
				<div class="mt-4 w-full text-center">
					<p>Powered by Form GlowUp</p>
				</div>
			{/if}
		</div>
	</ThemeWrapper>
{/if}
