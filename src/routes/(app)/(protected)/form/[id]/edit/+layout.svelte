<script lang="ts">
	import { config, updateTheme } from '$lib';
	import ThemeWrapper from '$lib/components/custom/ThemeWrapper.svelte';
	import { onMount } from 'svelte';

	export let data: any;
	console.log('layout ts', data);

	onMount(() => {
		updateTheme(data.formStyle);
	});

	$: {
		updateTheme($config);
	}
</script>

<ThemeWrapper styleConfig={$config}>
	<slot />
</ThemeWrapper>
