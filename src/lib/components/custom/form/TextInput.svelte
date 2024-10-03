<script lang="ts">
	import { Input } from '$lib/components/shadcn/ui/input';
	import { handleFormValueChange } from '$lib/form/store';

	export let submitId: string;
	export let description: string | null = null;
</script>

<Input on:change={(e) => handleFormValueChange(e.target.value, submitId)} />
