<script lang="ts">
	import Progress from '$lib/components/shadcn/ui/progress/progress.svelte';

	export let totalPages: number;
	export let currentQuestion: number;
</script>

<div class="flex w-full flex-col items-start">
	<p class="text-md mb-4 text-gray-500">Question {currentQuestion + 1} of {totalPages}</p>
	<Progress max={totalPages} value={currentQuestion + 1} />
</div>
