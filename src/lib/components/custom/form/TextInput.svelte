<script lang="ts">
	import { handleFormValueChange } from '$lib/google-forms/store';
	import Input from '../ui/input/input.svelte';

	export let submitId: string;
	export let description: string | null = null;
</script>

<Input on:change={(e) => handleFormValueChange(e.target.value, submitId)} />
