<script>
	import SliderInput from '$lib/components/custom/form/SliderInput.svelte';
	import TextInput from '$lib/components/custom/form/TextInput.svelte';
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center px-12 py-4">
	<TextInput submitId={'test'} />

	<SliderInput submitId={'test2'} minValue={0} maxValue={10} />
</div>
