<script lang="ts">
	import { Textarea } from '$lib/components/shadcn/ui/textarea';
	import { SUBMIT_KEY_PREFIX } from '$lib/form/constants';
	import { formDataStore } from '$lib/form/stores';
	import type { TTextItem } from '$lib/form/types';
	import { handleFormValueChange } from '$lib/form/utils/helpers';

	export let item: TTextItem;
</script>

<Textarea
	value={$formDataStore[SUBMIT_KEY_PREFIX + item.submitId]}
	on:change={(e) => handleFormValueChange(e.target.value, item.submitId)}
/>
