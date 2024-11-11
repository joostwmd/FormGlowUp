<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/shadcn/ui/button';
	import ChevronLeftIcon from 'lucide-svelte/icons/chevron-left';

	export let formId: string;
</script>

<Button variant="secondary" on:click={async () => goto(`/form/${formId}/edit`)}>
	<ChevronLeftIcon class="mr-1 h-4 w-4" />
	Go back to Edit
</Button>
