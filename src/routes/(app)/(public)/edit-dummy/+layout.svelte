<script lang="ts">
	import { styleConfig, updateTheme } from '$lib';
	import ThemeWrapper from '$lib/components/custom/ThemeWrapper.svelte';

	$: {
		updateTheme($styleConfig);
	}
</script>

<ThemeWrapper styleConfig={$styleConfig}>
	<slot />
</ThemeWrapper>
