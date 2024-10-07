<script>
	import { goto } from '$app/navigation';
	import Button from '../shadcn/ui/button/button.svelte';
</script>

<div class="flex w-full items-center justify-between px-4 py-2">
	<h1 class="text-center text-2xl font-bold">Form GlowUp</h1>

	<Button on:click={() => goto('/signin')}>SignIn</Button>
</div>
