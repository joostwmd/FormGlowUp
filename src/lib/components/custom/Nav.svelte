<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/components/shadcn/ui/button/button.svelte';
	import * as Avatar from '$lib/components/shadcn/ui/avatar';

	export let session;
</script>

<div class="flex w-full items-center justify-between border-b p-4">
	<h1 class="text-center text-2xl font-bold">Form GlowUp</h1>

	{#if session}
		<Avatar.Root class="h-8 w-8">
			<Avatar.Image src={session.user.image} alt="Profile Avatar" />
			<Avatar.Fallback>{session.user.name[0]}</Avatar.Fallback>
		</Avatar.Root>
	{:else}
		<Button on:click={() => goto('/signin')}>SignIn</Button>
	{/if}
</div>
