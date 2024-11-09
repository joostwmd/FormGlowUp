<script lang="ts">
	import CircleXIcon from 'lucide-svelte/icons/circle-x';

	export let heading: string;
	export let description: string;
</script>

<div class="flex items-center space-x-4 rounded-md border p-4">
	<CircleXIcon class="h-6 w-6 text-red-500" />
	<div class="flex-1 space-y-1">
		<p class="text-sm font-medium leading-none">{heading}</p>
		<p class="text-sm text-muted-foreground">{description}</p>
	</div>
	<!-- <Switch /> -->
</div>
