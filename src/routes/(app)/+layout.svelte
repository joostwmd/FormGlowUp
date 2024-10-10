<script lang="ts">
	import Nav from '$lib/components/custom/Nav.svelte';
	import type { LayoutServerData } from './$types';
	import '../../app.css';
	import { page } from '$app/stores';
	export let data: LayoutServerData;

	const hideNavRoutes = ['/public', '/preview'];
	let navVisible: boolean = false;

	$: {
		const mode = $page.params.mode;
		if (hideNavRoutes.includes(mode)) {
			navVisible = false;
		} else {
			navVisible = true;
		}
	}
</script>

{#if navVisible}
	<Nav />
{/if}
<div class="h-screen w-screen bg-muted/40 p-4">
	<slot />
</div>
