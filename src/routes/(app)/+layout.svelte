<script lang="ts">
	import '../../app.css';

	import Nav from '$lib/components/custom/Nav.svelte';
	import type { LayoutServerData } from './$types';
	import { page } from '$app/stores';
	import { ModeWatcher } from 'mode-watcher';
	import ThemeWrapper from '$lib/components/custom/ThemeWrapper.svelte';
	import { DEFAULT_MODE, DEFAULT_SYTLE_CONFIG } from '$lib/form/constants';
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
	<Nav session={data.session} />
{/if}

<div class="h-screen w-screen p-4">
	<slot />
</div>
