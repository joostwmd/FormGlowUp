<script lang="ts">
	import { styleConfig, updateTheme } from '$lib';
	import ThemeWrapper from '$lib/components/custom/ThemeWrapper.svelte';
	import { onMount } from 'svelte';

	export let data: any;

	// onMount(() => {
	// 	//updateTheme(data.formData.formStyle);
	// 	$styleConfig = data.formData.formStyle;
	// });

	// $: {
	// 	updateTheme($styleConfig);
	// }
</script>

<slot />
