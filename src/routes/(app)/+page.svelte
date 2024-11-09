<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Button } from '$lib/components/shadcn/ui/button';
	import ErrorToast from '$lib/components/custom/ErrorToast.svelte';

	function showToast() {
		toast.custom(ErrorToast, {
			componentProps: {
				heading: 'Event has been created',
				description: 'Sunday, December 03, 2023 at 9:00 AM'
			}
		});
	}
</script>

<h1>Landing Page</h1>

<Button on:click={() => showToast()}>Show toast</Button>
