<script lang="ts">
	import { Input } from '$lib/components/shadcn/ui/input';
	import { formDataStore } from '$lib/form/stores';
	import type { TTextItem } from '$lib/form/types';
	import { handleFormValueChange } from '$lib/form/utils/helpers';

	export let item: TTextItem;
</script>

<Input
	value={$formDataStore[item.submitId]}
	on:change={(e) => handleFormValueChange(e.target.value, item.submitId)}
/>
