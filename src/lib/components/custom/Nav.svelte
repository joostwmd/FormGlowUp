<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/components/shadcn/ui/button/button.svelte';
	import ShineBorder from '$lib/components/custom/ShineBorder.svelte';
	import * as Avatar from '$lib/components/shadcn/ui/avatar';

	export let session;
</script>

<div class="flex w-full items-center justify-between px-4 py-2">
	<h1 class="text-center text-2xl font-bold">Form GlowUp</h1>

	{#if session}
		<Avatar.Root>
			<Avatar.Image src={session.user.image} alt="Profile Avatar" />
			<Avatar.Fallback>{session.user.name[0]}</Avatar.Fallback>
		</Avatar.Root>
	{:else}
		<Button on:click={() => goto('/signin')}>SignIn</Button>
	{/if}
</div>
