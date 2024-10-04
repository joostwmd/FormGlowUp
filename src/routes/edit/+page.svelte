<script lang="ts">
	import Customizer from '$lib/components/custom/Customizer.svelte';
	import Form from '$lib/components/custom/form/Form.svelte';
	import ThemeCustomizer from '$lib/components/custom/ThemeCustomizer.svelte';
	import { FORM_DATA_TEST } from '$lib/form/test-data';
</script>

<div class="flex h-full w-full flex-col items-center justify-center">
	<Customizer />

	<div class="mt-24">
		<Form form={FORM_DATA_TEST} />
	</div>
</div>
