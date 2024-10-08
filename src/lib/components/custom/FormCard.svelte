<script lang="ts">
	import * as Card from '$lib/components/shadcn/ui/card/index.js';
	import * as DropdownMenu from '$lib/components/shadcn/ui/dropdown-menu';
	import PaintbrushIcon from 'lucide-svelte/icons/paintbrush';
	import EyeIcon from 'lucide-svelte/icons/eye';
	import SendIcon from 'lucide-svelte/icons/send';
	import EllipsisVerticalIcon from 'lucide-svelte/icons/ellipsis-vertical';
	import { Button } from '../shadcn/ui/button';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let formData: any;
	console.log(formData);

	async function handleEditClick() {
		console.log($page);
		await goto(`${$page.url.origin}/form/${formData.uid}/edit`);
	}
</script>

<Card.Root class="sm:col-span-2">
	<Card.Content class="flex flex-col">
		<div class="mb-3 flex items-center justify-between">
			<div class="flex flex-col">
				<h3 class="text-lg font-semibold">Form Title</h3>
				<p class="text-sm text-gray-500">Form Description</p>
			</div>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<EllipsisVerticalIcon class="h-4 w-4" />
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Item>Original Form</DropdownMenu.Item>
					<DropdownMenu.Item>Delete Form</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>

		<div class="flex justify-between">
			<Button variant="outline" on:click={handleEditClick}>
				<PaintbrushIcon class="mr-2 h-4 w-4" />
				Edit
			</Button>

			<Button variant="outline">
				<EyeIcon class="mr-2 h-4 w-4" />
				Preview
			</Button>

			<Button>
				<SendIcon class="mr-2 h-4 w-4" />
				Share
			</Button>
		</div>
	</Card.Content>
</Card.Root>
