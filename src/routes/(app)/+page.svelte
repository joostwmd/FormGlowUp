<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/shadcn/ui/button/button.svelte';
	import type { LayoutServerData } from './$types';
	export let data: LayoutServerData;

	async function handleGetStartedClick() {
		if (data.session) {
			await goto('/dashboard');
		} else {
			await goto('/signin');
		}
	}
</script>

<div class="flex h-full w-full flex-col items-center justify-center space-y-4 p-4">
	<h1 class="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
		10x your Google Form with a paste of a link
	</h1>

	<p class="text-center text-sm text-muted-foreground">
		Form GlowUp is a UI Layer for your Google Forms. It will generate a modern Interface for your
		form while mimicing almost all features
	</p>

	<Button on:click={handleGetStartedClick}>Get Started</Button>
</div>
