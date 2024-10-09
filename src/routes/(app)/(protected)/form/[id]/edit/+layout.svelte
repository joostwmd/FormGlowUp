<script lang="ts">
	import { styleConfig, updateTheme } from '$lib';
	import ThemeWrapper from '$lib/components/custom/ThemeWrapper.svelte';
	import { onMount } from 'svelte';

	export let data: any;

	console.log('formStyle', data.formData.formStyle);

	onMount(() => {
		//updateTheme(data.formData.formStyle);
		$styleConfig = data.formData.formStyle;
	});

	$: {
		updateTheme($styleConfig);
	}
</script>

<ThemeWrapper styleConfig={$styleConfig}>
	<slot />
</ThemeWrapper>
