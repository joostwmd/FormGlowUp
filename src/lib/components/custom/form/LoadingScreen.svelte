<script lang="ts">
	import Loader from '../Loader.svelte';
	// import { formStyleStore } from '$lib/form/stores';
	// $: color = $formStyleStore.mode === 'dark' ? 'white' : 'black';

	const color: string = 'black';

	export let variant: string;
</script>

<div class="flex h-full w-full flex-col items-center justify-center">
	<Loader {variant} {color} />
</div>
