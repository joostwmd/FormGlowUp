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
				<GoBackToEditButton />
			</div>
		{/if}

		<div class="flex h-screen w-screen items-center justify-center px-8">
			<div class="flex w-full max-w-[820px] flex-col">
				<Form items={data.form.items} info={data.form.info} isPreview={mode === 'preview'} />
			</div>
		</div>

		<!-- {#if mode === 'public'}
			<div class="fixed bottom-0 mb-4 w-full text-center">
				<p>Powered by Form GlowUp</p>
			</div>
		{/if} -->
	</ThemeWrapper>
{/if}
