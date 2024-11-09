<script lang="ts">
	export let heading: string;
	export let text: string;
</script>

<div class="flex h-full w-full flex-col items-center justify-center">
	<h1 class="mb-4 text-4xl font-bold">{heading}</h1>
	<p class="text-center text-lg text-gray-500">{text}</p>
</div>
