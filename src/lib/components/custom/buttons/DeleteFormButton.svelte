<script lang="ts">
	import TrashIcon from 'lucide-svelte/icons/trash';
	import * as AlertDialog from '$lib/components/shadcn/ui/alert-dialog/index.js';
	import Button from '$lib/components/shadcn/ui/button/button.svelte';
	import { enhance } from '$app/forms';

	export let handleDeleteForm = (formData: FormData, formId: string) => {};
	export let formId: string;
</script>

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
				This action cannot be undone. This will permanently delete your account and remove your data
				from our servers.
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
			<form
				method="POST"
				action="?/deleteForm"
				use:enhance={({ formData }) => handleDeleteForm(formData, formId)}
			>
				<AlertDialog.Action class="w-full" type="submit">Delete</AlertDialog.Action>
			</form>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
