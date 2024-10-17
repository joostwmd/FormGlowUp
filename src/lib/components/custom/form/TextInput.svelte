<script lang="ts">
	import { Input } from '$lib/components/shadcn/ui/input';
	import { SUBMIT_KEY_PREFIX } from '$lib/form/constants';
	import { formDataStore } from '$lib/form/stores';
	import type { TTextItem } from '$lib/form/types';
	import { handleFormValueChange } from '$lib/form/utils/client';

	export let item: TTextItem;
</script>

<h1>text</h1>
<Input
	value={$formDataStore[SUBMIT_KEY_PREFIX + item.submitId]}
	on:change={(e) => handleFormValueChange(e.target.value, item.submitId)}
/>
