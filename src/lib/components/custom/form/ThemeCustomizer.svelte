<script lang="ts">
	import { page } from '$app/stores';
	import { updateTheme } from '$lib/utils';
	import { Button } from '../ui/button';

	const THEMES = ['stone', 'orange'];
</script>

<h1>theme customizer</h1>
{#each THEMES as theme}
	<button on:click={() => updateTheme(theme, $page.url.pathname)}>{theme}</button>
{/each}
