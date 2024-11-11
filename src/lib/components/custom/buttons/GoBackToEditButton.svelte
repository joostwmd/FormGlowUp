<script lang="ts">
	import { Button } from '$lib/components/shadcn/ui/button';
	import ChevronLeftIcon from 'lucide-svelte/icons/chevron-left';
</script>

<Button variant="secondary" on:click={async () => history.back()}>
	<ChevronLeftIcon class="mr-1 h-4 w-4" />
	Go Back
</Button>
