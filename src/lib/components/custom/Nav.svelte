<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/shadcn/ui/button/button.svelte';
	import * as Avatar from '$lib/components/shadcn/ui/avatar';
	import type { Session } from '@auth/sveltekit';

	export let session: Session;

	async function handleLogoClick() {
		if (session) {
			await goto('/dashboard');
		} else {
			await goto('/');
		}
	}
</script>

<div class="flex w-full items-center justify-between border-b p-4">
	<Button variant="ghost" on:click={handleLogoClick}>
		<h1 class="text-center text-2xl font-bold">Form GlowUp</h1>
	</Button>

	{#if session && session.user && session.user.name}
		<Avatar.Root class="h-8 w-8">
			<Avatar.Image src={session.user.image} alt="Profile Avatar" />
			<Avatar.Fallback>{session.user.name[0]}</Avatar.Fallback>
		</Avatar.Root>
	{:else}
		<Button on:click={() => goto('/signin')}>SignIn</Button>
	{/if}
</div>
