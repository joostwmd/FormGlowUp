<script lang="ts">
	import LoadingScreen from './LoadingScreen.svelte';
	import EndScreen from './EndScreen.svelte';

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
		SUBMIT_KEY_PREFIX,
		TEXT_QUESTION_ITEM,
		TIME_QUESTION_ITEM
	} from '$lib/form/constants';
	import { formDataStore, type TFormInfoStore, type TFormStrucutre } from '$lib/form/stores';

	export let isPreview: boolean = false;
	export let canSubmit: boolean = true;
	export let formStructure: TFormStrucutre;
	export let formInfo: TFormInfoStore;

	let currentQuestion: number = 0;
	let isLoading: boolean = true;
	let isSubmitted: boolean = false;
	let isRequiredError: boolean = false;

	// Simulate loading delay
	setTimeout(() => {
		isLoading = false;
	}, 1000);

	function handleOnNext() {
		if (isPreview && currentQuestion === formStructure.questions.length - 1) {
			isSubmitted = true;
		} else {
			const isRequired = formStructure.questions[currentQuestion].data.isRequired;
			const currentVal =
				$formDataStore[SUBMIT_KEY_PREFIX + formStructure.questions[currentQuestion].data.submitId];

			if (isRequired && !currentVal) {
				console.log('Field required');
				isRequiredError = true;
				return;
			} else {
				isRequiredError = false;
				currentQuestion++;
			}
		}
	}

	function handleOnPrevious() {
		isRequiredError = false;
		if (isPreview && currentQuestion === 0) {
			isLoading = true;
			setTimeout(() => {
				isLoading = false;
			}, 500);
		} else {
			currentQuestion--;
		}
	}

	let isSubmitting: boolean = false;
	async function handleOnSubmit() {
		if (canSubmit) {
			isSubmitting = true;

			await fetch('/api/submit-form', {
				method: 'POST',
				body: JSON.stringify({
					formData: $formDataStore,
					submitUrl: formInfo.responderUri
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			console.log('submit', $formDataStore);
			//isSubmitted = true;
		} else {
			console.log('cannot submit');
		}
	}
</script>

{#if isLoading}
	<LoadingScreen variant={formStructure.loader} />
{:else if isSubmitted}
	<EndScreen text={formStructure.endText} />
{:else}
	<div class="flex w-full flex-col items-center">
		<div class="flex w-full flex-col items-start space-y-4 px-4">
			<FormProgress totalPages={formStructure.questions.length} {currentQuestion} />

			{#if QUESTION_ITEM_TYPES.includes(formStructure.questions[currentQuestion].type)}
				{#if formStructure.questions[currentQuestion].type === TEXT_QUESTION_ITEM}
					<TextInput
						submitId={formStructure.questions[currentQuestion].data.submitId}
						description={formStructure.questions[currentQuestion].data.description}
					/>
				{:else if formStructure.questions[currentQuestion].type === PARAGRAPH_QUESTION_ITEM}
					<p>noch text input</p>
					<TextInput
						submitId={formStructure.questions[currentQuestion].data.submitId}
						description={formStructure.questions[currentQuestion].data.description}
					/>
				{:else if formStructure.questions[currentQuestion].type === RADIO_QUESTION_ITEM}
					<RadioGroup
						submitId={formStructure.questions[currentQuestion].data.submitId}
						options={formStructure.questions[currentQuestion].data.options}
						description={formStructure.questions[currentQuestion].data.description}
						randomizeOrder={formStructure.questions[currentQuestion].data.shuffleOptions}
					/>
				{:else if formStructure.questions[currentQuestion].type === CHECKBOX_QUESTION_ITEM}
					<CheckboxGroup
						submitId={formStructure.questions[currentQuestion].data.submitId}
						description={formStructure.questions[currentQuestion].data.description}
						options={formStructure.questions[currentQuestion].data.options}
						randomizeOrder={formStructure.questions[currentQuestion].data.shuffleOptions}
					/>
				{:else if formStructure.questions[currentQuestion].type === DROPDOWN_QUESTION_ITEM}
					<Dropdown
						submitId={formStructure.questions[currentQuestion].data.submitId}
						description={formStructure.questions[currentQuestion].data.description}
						options={formStructure.questions[currentQuestion].data.options}
						randomizeOrder={formStructure.questions[currentQuestion].data.shuffleOptions}
					/>
				{:else if formStructure.questions[currentQuestion].type === SCALE_QUESTION_ITEM}
					<SliderInput
						submitId={formStructure.questions[currentQuestion].data.submitId}
						minValue={formStructure.questions[currentQuestion].data.minValue}
						maxValue={formStructure.questions[currentQuestion].data.maxValue}
						minLabel={formStructure.questions[currentQuestion].data.minLabel}
						maxLabel={formStructure.questions[currentQuestion].data.maxLabel}
						description={formStructure.questions[currentQuestion].data.description}
					/>
				{:else if formStructure.questions[currentQuestion].type === DATE_QUESTION_ITEM}
					<DateInput
						submitId={formStructure.questions[currentQuestion].data.submitId}
						includeTime={formStructure.questions[currentQuestion].data.yearIncluded}
						includeYear={formStructure.questions[currentQuestion].data.timeIncluded}
						description={formStructure.questions[currentQuestion].data.description}
					/>
				{:else if formStructure.questions[currentQuestion].type === TIME_QUESTION_ITEM}
					<TimeInput
						submitId={formStructure.questions[currentQuestion].data.submitId}
						description={formStructure.questions[currentQuestion].data.description}
						isDurationInput={formStructure.questions[currentQuestion].data.isDuration}
					/>
				{:else if formStructure.questions[currentQuestion].type === RADIO_GRID_QUESTION_ITEM}
					<RadioGrid
						columns={formStructure.questions[currentQuestion].data.columns}
						rows={formStructure.questions[currentQuestion].data.rows}
						description={formStructure.questions[currentQuestion].data.description}
						oneAnswerPerColumn={true}
					/>
				{:else if formStructure.questions[currentQuestion].type === CHECKBOX_GRID_QUESTION_ITEM}
					<CheckboxGrid
						columns={formStructure.questions[currentQuestion].data.columns}
						rows={formStructure.questions[currentQuestion].data.rows}
						description={formStructure.questions[currentQuestion].data.description}
					/>
				{/if}
			{:else if formStructure.questions[currentQuestion].type === ADDITIONAL_TITLE_ITEM}
				<p>additional title</p>
			{:else if formStructure.questions[currentQuestion].type === IMAGE_ITEM}
				<p>image el</p>
			{/if}

			{#if isRequiredError}
				<p class="text-sm text-muted-foreground text-red-500">The Question is required</p>
			{/if}

			<FormControls
				totalPages={formStructure.questions.length}
				{currentQuestion}
				{handleOnNext}
				{handleOnPrevious}
				{handleOnSubmit}
			/>
		</div>
	</div>
{/if}
