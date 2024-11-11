<script lang="ts">
	import '../../app.css';

	import { Toaster } from '$lib/components/shadcn/ui/sonner';
	import Nav from '$lib/components/custom/Nav.svelte';
	import type { LayoutServerData } from './$types';
	import { page } from '$app/stores';
	import { ModeWatcher } from 'mode-watcher';
	export let data: LayoutServerData;

	const hideNavRoutes = ['public', 'preview'];
	let navVisible: boolean = false;

	$: {
		const mode = $page.params.viewmode;
		if (hideNavRoutes.includes(mode)) {
			navVisible = false;
		} else {
			navVisible = true;
		}
	}
</script>

{#if navVisible && data.session}
	<Nav session={data.session} />
{/if}

<div class="h-screen w-screen">
	<slot />
</div>

<Toaster />
<ModeWatcher defaultMode="dark" />
