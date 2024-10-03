<script>
	import FormProgress from '$lib/components/custom/form/FormProgress.svelte';
	import RadioGrid from '$lib/components/custom/form/RadioGrid.svelte';
	import RadioGroup from '$lib/components/custom/form/RadioGroup.svelte';
	import SliderInput from '$lib/components/custom/form/SliderInput.svelte';
	import TextInput from '$lib/components/custom/form/TextInput.svelte';
	import TimeInput from '$lib/components/custom/form/TimeInput.svelte';
	import RadioGroupItem from '$lib/components/shadcn/ui/radio-group/radio-group-item.svelte';

	const testRows = [
		{
			submitId: 'test5-1',
			title: 'Option 1'
		},
		{
			submitId: 'test5-2',
			title: 'Option 2'
		},
		{
			submitId: 'test5-3',
			title: 'Option 3'
		}
	];

	let currentStep = 0;
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center space-y-12 px-12 py-4">
	<FormProgress totalPages={12} currentPage={currentStep} />
	<TextInput submitId={'test'} />

	<SliderInput submitId={'test2'} minValue={0} maxValue={10} />

	<TimeInput submitId={'test3'} isDurationInput={true} />

	<RadioGroup submitId={'test4'} options={['Option 1', 'Option 2', 'Option 3']} />

	<RadioGrid columns={['Col 1', 'Col 2']} rows={testRows} />
</div>
