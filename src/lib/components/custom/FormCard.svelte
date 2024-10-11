<script lang="ts">
	import * as Card from '$lib/components/shadcn/ui/card/index.js';
	import PenIcon from 'lucide-svelte/icons/pen';
	import TrashIcon from 'lucide-svelte/icons/trash';
	import { Button } from '../shadcn/ui/button';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import ShareFormButton from './ShareFormButton.svelte';
	import * as AlertDialog from '$lib/components/shadcn/ui/alert-dialog/index.js';

	export let formData: any;

	async function handleEditClick() {
		await goto(`${$page.url.origin}/form/${formData.uid}/edit`);
	}
</script>

<Card.Root class="sm:col-span-2">
	<Card.Header>
		<Card.Title>{formData.formInfo.title}</Card.Title>
		<Card.Description>{formData.formInfo.description}</Card.Description>
	</Card.Header>

	<Card.Content class="flex space-x-2">
		<AlertDialog.Root>
			<AlertDialog.Trigger asChild let:builder>
				<Button builders={[builder]} variant="outline">
					<TrashIcon class="h-4 w-4" />
				</Button>
			</AlertDialog.Trigger>
			<AlertDialog.Content>
				<AlertDialog.Header>
					<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
					<AlertDialog.Description>
						This action cannot be undone. This will permanently delete your account and remove your
						data from our servers.
					</AlertDialog.Description>
				</AlertDialog.Header>
				<AlertDialog.Footer>
					<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
					<AlertDialog.Action>Delete</AlertDialog.Action>
				</AlertDialog.Footer>
			</AlertDialog.Content>
		</AlertDialog.Root>

		<Button variant="outline" on:click={handleEditClick}>
			<PenIcon class="mr-2 h-4 w-4" />
			Edit
		</Button>

		<ShareFormButton />
	</Card.Content>
</Card.Root>
