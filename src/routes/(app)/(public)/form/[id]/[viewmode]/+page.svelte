<script lang="ts">
	import type { PageServerData } from './$types';
	import ThemeWrapper from '$lib/components/custom/customizer/ThemeWrapper.svelte';
	import Form from '$lib/components/custom/form/Form.svelte';

	export let data: PageServerData;
</script>

<ThemeWrapper styleConfig={data.formData.formStyle}>
	<Form formStructure={data.formData.formStructure} formInfo={data.formData.formInfo} />
</ThemeWrapper>
