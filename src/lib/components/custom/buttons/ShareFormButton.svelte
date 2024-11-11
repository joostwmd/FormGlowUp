<script lang="ts">
	import * as Tooltip from '$lib/components/shadcn/ui/tooltip/index.js';
	import Button from '$lib/components/shadcn/ui/button/button.svelte';
	import SendIcon from 'lucide-svelte/icons/send';
	import * as Dialog from '$lib/components/shadcn/ui/dialog/index.js';
	import * as Tabs from '$lib/components/shadcn/ui/tabs/index.js';
	import CopyIcon from 'lucide-svelte/icons/copy';
	import FrameIcon from 'lucide-svelte/icons/frame';
	import MailIcon from 'lucide-svelte/icons/mail';
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import ShareWithGoogleMailButton from './ShareWithGoogleMailButton.svelte';
	import { toast } from 'svelte-sonner';
	import SuccessToast from '../toasts/SuccessToast.svelte';

	function showSuccessToast(heading: string, message: string) {
		toast.custom(SuccessToast, {
			componentProps: {
				heading: heading,
				description: message
			}
		});
	}

	export let formId: string;
	const url = `${PUBLIC_BASE_URL}/form/${formId}/public`;
	const iframeCode = `<iframe src="${url}" style="border:0px #ffffff none;" name="myiFrame" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="100%" width="100%" allowfullscreen></iframe>`;

	function handleNativeMail() {
		const mailtoUrl = `mailto:?body=${encodeURIComponent(url)}`;
		window.location.href = mailtoUrl;
	}

	async function handleLink() {
		await navigator.clipboard.writeText(url);
		showSuccessToast('Link copied', 'The form link has been copied to your clipboard');
	}

	function handleIframeCode() {
		navigator.clipboard.writeText(iframeCode);
		showSuccessToast('iFrame code copied', 'The iFrame code has been copied to your clipboard');
	}
</script>

<Dialog.Root>
	<Dialog.Trigger>
		<Tooltip.Root>
			<Tooltip.Trigger>
				<Button><SendIcon class="mr-1 h-4 w-4" />Share</Button>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>Share the form with others</p>
			</Tooltip.Content>
		</Tooltip.Root>
	</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Share Options</Dialog.Title>
			<Dialog.Description>Choose how you want to share the form.</Dialog.Description>
		</Dialog.Header>
		<Tabs.Root value="link" class="w-full">
			<Tabs.List class="grid w-full grid-cols-2">
				<Tabs.Trigger value="link">Link</Tabs.Trigger>
				<Tabs.Trigger value="iframe">iFrame</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="link">
				<div class="mt-4 flex flex-col space-y-2">
					<Button on:click={handleLink}><CopyIcon class="mr-2 h-4 w-4" />Copy Link</Button>

					<ShareWithGoogleMailButton publicFormUrl={url} />
					<Button on:click={handleNativeMail}>
						<MailIcon class="mr-2 h-4 w-4" />Share via Mail
					</Button>
				</div>
			</Tabs.Content>
			<Tabs.Content value="iframe">
				<div class="mt-4 flex flex-col space-y-2">
					<Button class="w-full" on:click={handleIframeCode}>
						<FrameIcon class="mr-2 h-4 w-4" />Copy iFrame Code
					</Button>

					<div class="w-full overflow-x-auto rounded bg-muted p-4">
						<code
							class="relative inline-block w-[240px] min-w-full font-mono text-sm font-semibold"
						>
							{iframeCode}
						</code>
					</div>
				</div>
			</Tabs.Content>
		</Tabs.Root>
		<Dialog.Footer>
			<Button variant="outline" type="button">Close</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
