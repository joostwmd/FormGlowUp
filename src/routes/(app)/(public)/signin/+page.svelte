<script lang="ts">
	import Button from '$lib/components/shadcn/ui/button/button.svelte';
	import { SignIn } from '@auth/sveltekit/components';
</script>

<SignIn provider="google" signInPage="signin" class="w-full">
	<div slot="submitButton">
		<Button>Sign in with Google Server</Button>
	</div>
</SignIn>
