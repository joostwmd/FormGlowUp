<script lang="ts">
	import CheckboxGrid from '$lib/components/custom/form/CheckboxGrid.svelte';
	import CheckboxGroup from '$lib/components/custom/form/CheckboxGroup.svelte';
	import DateInput from '$lib/components/custom/form/DateInput.svelte';
	import Dropdown from '$lib/components/custom/form/Dropdown.svelte';
	import FormControls from '$lib/components/custom/form/FormControls.svelte';
	import FormProgress from '$lib/components/custom/form/FormProgress.svelte';
	import RadioGrid from '$lib/components/custom/form/RadioGrid.svelte';
	import RadioGroup from '$lib/components/custom/form/RadioGroup.svelte';
	import SliderInput from '$lib/components/custom/form/SliderInput.svelte';
	import TextInput from '$lib/components/custom/form/TextInput.svelte';
	import TimeInput from '$lib/components/custom/form/TimeInput.svelte';
	import {
		ADDITIONAL_TITLE_ITEM,
		CHECKBOX_GRID_QUESTION_ITEM,
		CHECKBOX_QUESTION_ITEM,
		DATE_QUESTION_ITEM,
		DROPDOWN_QUESTION_ITEM,
		IMAGE_ITEM,
		PARAGRAPH_QUESTION_ITEM,
		QUESTION_ITEM_TYPES,
		RADIO_GRID_QUESTION_ITEM,
		RADIO_QUESTION_ITEM,
		SCALE_QUESTION_ITEM,
		TEXT_QUESTION_ITEM,
		TIME_QUESTION_ITEM
	} from '$lib/form/constants';

	export let canSubmit: boolean = false;
	export let form: any;

	let currentPage: number = 0;
	function handleOnNext() {
		currentPage++;
	}

	function handleOnPrevious() {
		currentPage--;
	}

	function handleOnSubmit() {
		if (canSubmit) {
			console.log('submit');
		} else {
			console.log('cannot submit');
		}
	}
</script>

<div class="flex w-full flex-col items-center">
	<div class="flex w-full flex-col items-start space-y-4 px-4">
		<FormProgress totalPages={form.formItems.length} {currentPage} />

		{#each form.formItems[currentPage] as item}
			{#if QUESTION_ITEM_TYPES.includes(item.type)}
				{#if item.type === TEXT_QUESTION_ITEM}
					<TextInput submitId={item.data.submitId} description={item.data.description} />
				{:else if item.type === PARAGRAPH_QUESTION_ITEM}
					<p>noch text input</p>
					<TextInput submitId={item.data.submitId} description={item.data.description} />
				{:else if item.type === RADIO_QUESTION_ITEM}
					<RadioGroup
						submitId={item.data.submitId}
						options={item.data.options}
						description={item.data.description}
						randomizeOrder={item.data.shuffleOptions}
					/>
				{:else if item.type === CHECKBOX_QUESTION_ITEM}
					<CheckboxGroup
						submitId={item.data.submitId}
						description={item.data.description}
						options={item.data.options}
						randomizeOrder={item.data.shuffleOptions}
					/>
				{:else if item.type === DROPDOWN_QUESTION_ITEM}
					<Dropdown
						submitId={item.data.submitId}
						description={item.data.description}
						options={item.data.options}
						randomizeOrder={item.data.shuffleOptions}
					/>
				{:else if item.type === SCALE_QUESTION_ITEM}
					<SliderInput
						submitId={item.data.submitId}
						minValue={item.data.minValue}
						maxValue={item.data.maxValue}
						minLabel={item.data.minLabel}
						maxLabel={item.data.maxLabel}
						description={item.data.description}
					/>
				{:else if item.type === DATE_QUESTION_ITEM}
					<DateInput
						submitId={item.data.submitId}
						includeTime={item.data.yearIncluded}
						includeYear={item.data.timeIncluded}
						description={item.data.description}
					/>
				{:else if item.type === TIME_QUESTION_ITEM}
					<TimeInput
						submitId={item.data.submit}
						description={item.data.description}
						isDurationInput={item.data.isDuration}
					/>
				{:else if item.type === RADIO_GRID_QUESTION_ITEM}
					<RadioGrid
						columns={item.data.columns}
						rows={item.data.rows}
						description={item.data.description}
						oneAnswerPerColumn={true}
					/>
				{:else if item.type === CHECKBOX_GRID_QUESTION_ITEM}
					<CheckboxGrid
						columns={item.data.columns}
						rows={item.data.rows}
						description={item.data.description}
					/>
				{/if}
			{:else if item.type === ADDITIONAL_TITLE_ITEM}
				<p>additional title</p>
			{:else if item.type === IMAGE_ITEM}
				<p>image el</p>
			{/if}
		{/each}

		<FormControls
			totalPages={form.formItems.length}
			{currentPage}
			{handleOnNext}
			{handleOnPrevious}
			{handleOnSubmit}
		/>
	</div>
</div>
