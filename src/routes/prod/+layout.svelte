<script lang="ts">
	import { updateTheme } from '$lib';
	import ThemeWrapper from '$lib/components/custom/ThemeWrapper.svelte';

	export let data;
	updateTheme(data.formStyleTest);
</script>

<ThemeWrapper styleConfig={data.formStyleTest}>
	<slot />
</ThemeWrapper>
