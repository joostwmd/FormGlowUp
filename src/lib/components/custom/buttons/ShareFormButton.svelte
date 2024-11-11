<script lang="ts">
	import * as Tooltip from '$lib/components/shadcn/ui/tooltip/index.js';
	import Button from '$lib/components/shadcn/ui/button/button.svelte';
	import SendIcon from 'lucide-svelte/icons/send';
	import * as DropdownMenu from '$lib/components/shadcn/ui/dropdown-menu/index.js';
	import EyeIcon from 'lucide-svelte/icons/eye';
	import CopyIcon from 'lucide-svelte/icons/copy';
	import FrameIcon from 'lucide-svelte/icons/frame';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Tooltip.Root>
			<Tooltip.Trigger>
				<Button builders={[builder]}><SendIcon class="mr-1 h-4 w-4" />Share</Button>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>Share the form with others</p>
			</Tooltip.Content>
		</Tooltip.Root>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56">
		<DropdownMenu.Group>
			<DropdownMenu.Item>
				<CopyIcon class="mr-2 h-4 w-4" />
				<span>Copy Public Link</span>
			</DropdownMenu.Item>

			<DropdownMenu.Item>
				<EyeIcon class="mr-2 h-4 w-4" />
				<span>Copy Public Link</span>
			</DropdownMenu.Item>

			<DropdownMenu.Item>
				<FrameIcon class="mr-2 h-4 w-4" />
				<span>Copy iFrame Code</span>
			</DropdownMenu.Item>
			<DropdownMenu.Separator />
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
