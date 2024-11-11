<script lang="ts">
	import * as Accordion from '$lib/components/shadcn/ui/accordion/index.js';
	import PaintbrushIcon from 'lucide-svelte/icons/paintbrush';
	import ThemeCustomizer from './ThemeCustomizer.svelte';
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
</Accordion.Root>
