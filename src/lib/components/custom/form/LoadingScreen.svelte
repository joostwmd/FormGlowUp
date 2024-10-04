<script lang="ts">
	import Loader from '../Loader.svelte';

	export let variant: string;
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center">
	<Loader {variant} />
</div>
