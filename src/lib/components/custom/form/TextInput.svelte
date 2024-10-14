<script lang="ts">
	import { Input } from '$lib/components/shadcn/ui/input';
	import { SUBMIT_KEY_PREFIX } from '$lib/form/constants';
	import { formDataStore } from '$lib/form/stores';
	import { handleFormValueChange } from '$lib/form/utils/client';

	export let submitId: string;
	export let description: string | null = null;
</script>

<h1>text</h1>
<Input
	value={$formDataStore[SUBMIT_KEY_PREFIX + submitId]}
	on:change={(e) => handleFormValueChange(e.target.value, submitId)}
/>
