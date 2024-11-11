<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/shadcn/ui/button';
	import EyeIcon from 'lucide-svelte/icons/eye';

	export let formId: string;
</script>

<Button variant="outline" on:click={async () => goto(`/form/${formId}/preview`)}>
	<EyeIcon class="mr-2 h-4 w-4" />
	Preview
</Button>
