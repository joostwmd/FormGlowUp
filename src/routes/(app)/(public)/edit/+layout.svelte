<script lang="ts">
	import { config, updateTheme } from '$lib';
	import ThemeWrapper from '$lib/components/custom/ThemeWrapper.svelte';

	$: {
		updateTheme($config);
	}
</script>

<ThemeWrapper styleConfig={$config}>
	<slot />
</ThemeWrapper>
