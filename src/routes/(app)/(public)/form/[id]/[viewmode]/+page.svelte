<script lang="ts">
	import type { PageServerData } from './$types';
	import ThemeWrapper from '$lib/components/custom/customizer/ThemeWrapper.svelte';
	import Form from '$lib/components/custom/form/Form.svelte';
	import { page } from '$app/stores';
	export let data: PageServerData;

	const mode = $page.params.viewmode;
</script>

<ThemeWrapper style={data.form?.style}>
	<Form
		items={data.form?.items}
		info={data.form?.info}
		isPreview={true}
		canSubmit={mode === 'public'}
	/>
</ThemeWrapper>
