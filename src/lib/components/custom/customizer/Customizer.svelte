<script lang="ts">
	import * as Accordion from '$lib/components/shadcn/ui/accordion/index.js';
	import PaintbrushIcon from 'lucide-svelte/icons/paintbrush';
	import MessageIcon from 'lucide-svelte/icons/message-square-quote';
	import ThemeCustomizer from './ThemeCustomizer.svelte';
	import MessagesCusomizer from './MessagesCusomizer.svelte';
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
				<MessageIcon class="mr-2 h-4 w-4" />
				Text
			</div>
		</Accordion.Trigger>
		<Accordion.Content>
			<MessagesCusomizer />
		</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>
