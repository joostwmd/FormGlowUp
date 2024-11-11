<script lang="ts">
	import Button from '$lib/components/shadcn/ui/button/button.svelte';
	import { SignIn } from '@auth/sveltekit/components';
</script>

<div class="flex h-full w-full flex-col items-center justify-center space-y-4 p-4">
	<h1 class="text-center text-4xl font-bold">Your almost there :)</h1>
	<p class="text-center text-sm text-muted-foreground">
		This project is in development mode, so you need to request access so i can add you to the
		authorized users list
	</p>
	<div>
		<SignIn provider="google" signInPage="signin" class="w-full">
			<div class="flex w-full flex-col items-center justify-center" slot="submitButton">
				<Button>Sign In with Google</Button>
			</div>
		</SignIn>
	</div>
</div>
