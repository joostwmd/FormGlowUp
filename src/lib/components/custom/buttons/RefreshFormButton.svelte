<script lang="ts">
	import * as Tooltip from '$lib/components/shadcn/ui/tooltip/index.js';
	import { Button } from '../../shadcn/ui/button';
	import RefreshIcon from 'lucide-svelte/icons/refresh-ccw';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';

	export let isRefetching: boolean = false;
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		<Button type="submit" variant="outline">
			{#if isRefetching}
				<LoaderCircle class="mr-1 h-4 w-4 animate-spin" />
				Refreshing
			{:else}
				<RefreshIcon class="mr-1 h-4 w-4" />Refresh
			{/if}
		</Button>
	</Tooltip.Trigger>
	<Tooltip.Content>
		<p>Update the form with the latest changes of yout google form</p>
	</Tooltip.Content>
</Tooltip.Root>
