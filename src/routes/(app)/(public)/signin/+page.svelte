<script lang="ts">
	import Button from '$lib/components/shadcn/ui/button/button.svelte';
	import * as Alert from '$lib/components/shadcn/ui/alert/index.js';
	import { SignIn } from '@auth/sveltekit/components';
	import Info from 'lucide-svelte/icons/info';
</script>

<div
	class="signin-root mx-auto flex h-full w-full max-w-lg flex-col justify-center gap-8 px-4 py-12"
>
	<header class="flex flex-col gap-3">
		<p class="signin-reveal text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
			Form GlowUp
		</p>
		<h1 class="signin-reveal signin-delay-1 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
			Sign in to continue
		</h1>
		<p
			class="signin-reveal signin-delay-2 max-w-prose text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base"
		>
			Use the Google account where you build or manage forms. We use it to read your form
			structure (read-only) and show your name on the dashboard—responses still stay in Google
			Forms.
		</p>
	</header>

	<Alert.Root class="signin-reveal signin-delay-2 border-muted-foreground/20 bg-muted/25">
		<Info class="h-4 w-4" aria-hidden="true" />
		<Alert.Title class="text-sm font-medium">About the extra screen from Google</Alert.Title>
		<Alert.Description class="mt-2 text-sm leading-relaxed text-muted-foreground">
			<p class="m-0">
				Form GlowUp is an independent product and is
				<span class="font-medium text-foreground">not affiliated with or endorsed by Google</span>.
				Because this integration has
				<span class="font-medium text-foreground">not completed Google’s app verification</span>,
				Google may show a warning before you sign in. That notice refers to Google’s review
				process, not whether Form GlowUp is “still in development.”
			</p>
			<p class="mb-0 mt-3">
				On that screen, open <strong class="font-medium text-foreground">Advanced</strong> (wording
				can vary slightly), then choose the option to continue to Form GlowUp. Review the listed
				permissions first if you like—then use
				<strong class="font-medium text-foreground">Sign in with Google</strong> below.
			</p>
		</Alert.Description>
	</Alert.Root>

	<div class="signin-reveal signin-delay-3 flex w-full flex-col items-stretch gap-3">
		<SignIn provider="google" signInPage="signin" class="w-full">
			<div class="flex w-full flex-col" slot="submitButton">
				<Button class="w-full transition-transform active:translate-y-px" type="submit">
					Sign in with Google
				</Button>
			</div>
		</SignIn>
		<p class="text-center text-xs leading-relaxed text-muted-foreground">
			By continuing you authorize access as shown on Google’s consent screen. You can revoke access
			in your Google Account settings at any time.
		</p>
	</div>
</div>

<style>
	@media (prefers-reduced-motion: no-preference) {
		@keyframes signin-fade-up {
			from {
				opacity: 0;
				transform: translate3d(0, 10px, 0);
			}
			to {
				opacity: 1;
				transform: translate3d(0, 0, 0);
			}
		}

		.signin-reveal {
			animation: signin-fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
		}

		.signin-delay-1 {
			animation-delay: 0.06s;
		}
		.signin-delay-2 {
			animation-delay: 0.12s;
		}
		.signin-delay-3 {
			animation-delay: 0.18s;
		}
	}
</style>
