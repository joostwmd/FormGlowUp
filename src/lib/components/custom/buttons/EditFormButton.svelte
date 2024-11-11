<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/shadcn/ui/button';
	import PenIcon from 'lucide-svelte/icons/pen';

	export let formId: string;
</script>

<Button variant="outline" on:click={async () => goto(`/form/${formId}/edit`)}>
	<PenIcon class="mr-2 h-4 w-4" />
	Edit
</Button>
