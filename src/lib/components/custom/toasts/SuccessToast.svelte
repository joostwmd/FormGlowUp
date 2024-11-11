<script lang="ts">
	import CircleCheckIcon from 'lucide-svelte/icons/circle-check-big';

	export let heading: string;
	export let description: string;
</script>

<div class="flex items-center space-x-4 rounded-md border p-4">
	<CircleCheckIcon class="h-6 w-6 text-green-500" />
	<div class="flex-1 space-y-1">
		<p class="text-sm font-medium leading-none">{heading}</p>
		<p class="text-sm text-muted-foreground">{description}</p>
	</div>
</div>
