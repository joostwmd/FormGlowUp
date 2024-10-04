<script lang="ts">
	import * as Accordion from '$lib/components/shadcn/ui/accordion/index.js';
	import LoaderCircleIcon from 'lucide-svelte/icons/loader-circle';
	import PaintbrushIcon from 'lucide-svelte/icons/paintbrush';
	import CheckCircleIcon from 'lucide-svelte/icons/circle-check';
	import ThemeCustomizer from './ThemeCustomizer.svelte';
	import CheckoutScreenCustomizer from './EndScreenCustomizer.svelte';
	import LoadingScreenCustomizer from './LoadingScreenCustomizer.svelte';
</script>

<Accordion.Root class="w-full">
	<Accordion.Item value="customization">
		<Accordion.Trigger>
			<div class="flex items-center">
				<PaintbrushIcon class="mr-2 h-4 w-4" />
				Style
			</div>
		</Accordion.Trigger>
		<Accordion.Content>
			<ThemeCustomizer />
		</Accordion.Content>
	</Accordion.Item>

	<Accordion.Item value="loader">
		<Accordion.Trigger>
			<div class="flex items-center">
				<LoaderCircleIcon class="mr-2 h-4 w-4" />
				Loading
			</div>
		</Accordion.Trigger>
		<Accordion.Content>
			<LoadingScreenCustomizer />
		</Accordion.Content>
	</Accordion.Item>

	<Accordion.Item value="end">
		<Accordion.Trigger>
			<div class="flex items-center">
				<CheckCircleIcon class="mr-2 h-4 w-4" />
				End
			</div>
		</Accordion.Trigger>
		<Accordion.Content>
			<CheckoutScreenCustomizer />
		</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>
