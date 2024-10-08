<script lang="ts">
	import Button from '$lib/components/shadcn/ui/button/button.svelte';
	import { signOut } from '@auth/sveltekit/client';
</script>

<Button on:click={() => signOut()} class="mb-4">SignOut</Button>
