<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/shadcn/ui/button/button.svelte';
	import * as Alert from '$lib/components/shadcn/ui/alert/index.js';
	import type { LayoutServerData } from './$types';
	import CircleAlert from 'lucide-svelte/icons/circle-alert';
	import Sparkles from 'lucide-svelte/icons/sparkles';

	export let data: LayoutServerData;

	const limitations = [
		{
			title: 'Use the editor link',
			body: 'Paste the Google Forms edit URL (it contains /edit). Short “view” or preview links will not work.'
		},
		{
			title: 'Some Google features are not supported',
			body: 'Page breaks, file uploads, embedded videos, standalone image blocks, image-based choices, rating questions, and shuffled question order cannot be imported yet.'
		},
		{
			title: 'Prefer standard questions',
			body: 'If import fails on free-floating text, move that copy into a question title or description. Linear scale questions work; star ratings do not.'
		}
	] as const;

	async function handleGetStartedClick() {
		if (data.session) {
			await goto('/dashboard');
		} else {
			await goto('/signin');
		}
	}
</script>

<div
	class="home-root mx-auto flex h-full w-full max-w-2xl flex-col justify-center gap-10 px-4 py-12 sm:py-16"
>
	<header class="home-stack flex flex-col gap-5">
		<p
			class="home-reveal text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
		>
			Form GlowUp
		</p>
		<h1
			class="home-reveal home-reveal-delay-1 scroll-m-20 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]"
		>
			Modern interface for the Google Form you already have
		</h1>
		<p class="home-reveal home-reveal-delay-2 max-w-prose text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
			Paste your form’s edit link, pick fonts and colors, and share a cleaner experience. Responses
			still land in Google Forms—this is a presentation layer, not a replacement.
		</p>
		<div class="home-reveal home-reveal-delay-3 flex flex-wrap items-center gap-3">
			<Button class="gap-2 transition-transform active:translate-y-px" on:click={handleGetStartedClick}>
				<Sparkles class="h-4 w-4 opacity-80" aria-hidden="true" />
				{data.session ? 'Open dashboard' : 'Sign in to get started'}
			</Button>
		</div>
	</header>

	<section
		class="home-reveal home-reveal-delay-4 border-t border-border/80 pt-10"
		aria-labelledby="limitations-heading"
	>
		<h2 id="limitations-heading" class="text-sm font-semibold tracking-tight text-foreground">
			Before you import a form
		</h2>
		<p class="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">
			Knowing these limits upfront saves time if your form uses advanced Google options.
		</p>
		<Alert.Root class="mt-6 border-muted-foreground/25 bg-muted/30">
			<CircleAlert class="h-4 w-4" aria-hidden="true" />
			<Alert.Title class="text-sm font-medium">Current product constraints</Alert.Title>
			<Alert.Description class="mt-3 space-y-4 text-sm leading-relaxed text-muted-foreground">
				<ul class="list-none space-y-4 p-0">
					{#each limitations as item}
						<li class="border-l-2 border-primary/35 pl-4">
							<span class="font-medium text-foreground">{item.title}.</span>
							{' '}{item.body}
						</li>
					{/each}
				</ul>
			</Alert.Description>
		</Alert.Root>
	</section>
</div>

<style>
	@media (prefers-reduced-motion: no-preference) {
		@keyframes home-fade-up {
			from {
				opacity: 0;
				transform: translate3d(0, 10px, 0);
			}
			to {
				opacity: 1;
				transform: translate3d(0, 0, 0);
			}
		}

		.home-reveal {
			animation: home-fade-up 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
		}

		.home-reveal-delay-1 {
			animation-delay: 0.06s;
		}
		.home-reveal-delay-2 {
			animation-delay: 0.12s;
		}
		.home-reveal-delay-3 {
			animation-delay: 0.18s;
		}
		.home-reveal-delay-4 {
			animation-delay: 0.24s;
		}
	}
</style>
