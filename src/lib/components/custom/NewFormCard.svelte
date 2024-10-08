<script lang="ts">
	import * as Card from '$lib/components/shadcn/ui/card/index.js';
	import Button from '../shadcn/ui/button/button.svelte';
	import Input from '../shadcn/ui/input/input.svelte';
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>10x your Google Form</Card.Title>
		<Card.Description>Simply Input the Edit URL of your Google Form</Card.Description>
	</Card.Header>
	<Card.Content class="flex flex-col items-center">
		<Input placeholder="Edit Url of your Google form" />
		<Button class="mt-4">BetterForm</Button>
	</Card.Content>
</Card.Root>
