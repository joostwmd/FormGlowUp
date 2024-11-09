<script lang="ts">
	import Progress from '$lib/components/shadcn/ui/progress/progress.svelte';

	export let totalPages: number;
	export let currentItem: number;
</script>

<div class="flex w-full flex-col items-start">
	<p class="text-md mb-4 text-gray-500">Question {currentItem + 1} of {totalPages}</p>
	<Progress max={totalPages} value={currentItem + 1} />
</div>
