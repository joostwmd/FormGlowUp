<script>
	import Form from '$lib/components/custom/form/Form.svelte';
	import { FORM_DATA_TEST } from '$lib/form/test-data';
</script>

<div class="flex h-screen w-screen flex-col items-center bg-muted/40 p-4">
	<div class="h-full w-full max-w-[720px] overflow-scroll">
		<Form form={FORM_DATA_TEST} />
	</div>
</div>
