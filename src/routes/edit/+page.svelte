<script lang="ts">
	import Customizer from '$lib/components/custom/Customizer.svelte';
	import Form from '$lib/components/custom/form/Form.svelte';
	import ThemeCustomizer from '$lib/components/custom/ThemeCustomizer.svelte';
	import { FORM_DATA_TEST } from '$lib/form/test-data';
	import * as Card from '$lib/components/shadcn/ui/card/index.js';
</script>

<div class="flex h-full w-full items-start bg-muted/40 p-4">
	<div class="w-1/3 p-4">
		<Card.Root class="sm:col-span-2">
			<Card.Header class="pb-3">
				<Card.Title>Style your Form</Card.Title>
				<Card.Description class="max-w-lg text-balance leading-relaxed">
					10x your google form by selecting themes, colors and much more.
				</Card.Description>
			</Card.Header>

			<Card.Content>
				<Customizer />
			</Card.Content>
		</Card.Root>
	</div>

	<div class="w-2/3 p-4">
		<Card.Root class="sm:col-span-2">
			<Card.Header class="pb-3">
				<Card.Title>Prewview of your Form</Card.Title>
				<Card.Description class="max-w-lg text-balance leading-relaxed">
					This is a live Preview of you 10x google form
				</Card.Description>
			</Card.Header>

			<Card.Content>
				<Form form={FORM_DATA_TEST} />
			</Card.Content>
		</Card.Root>
	</div>
</div>
