<script lang="ts">
	import { Button } from '$lib/components/shadcn/ui/button';
	import { signIn } from '@auth/sveltekit/client';
</script>

<div class="flex h-full w-full flex-col items-center justify-center">
	<Button
		on:click={() =>
			signIn('google', {
				redirect: true,
				callbackUrl: '/dashboard'
			})}
		class="mb-4">SignIn</Button
	>
</div>
