<script lang="ts">
	import Progress from '../ui/progress/progress.svelte';

	export let totalPages: number;
	export let currentPage: number;
</script>

<div class="flex w-full flex-col items-start">
	<p class="text-md mb-4 text-gray-500">Page {currentPage + 1} of {totalPages}</p>
	<Progress max={totalPages} value={currentPage + 1} />
</div>
