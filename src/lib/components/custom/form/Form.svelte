<script lang="ts">
	import CheckboxGrid from '$lib/components/custom/form/items/CheckboxGrid.svelte';
	import CheckboxGroup from '$lib/components/custom/form/items/CheckboxGroup.svelte';
	import DateInput from '$lib/components/custom/form/items/DateInput.svelte';
	import Dropdown from '$lib/components/custom/form/items/Dropdown.svelte';
	import FormControls from '$lib/components/custom/form/FormControls.svelte';
	import FormProgress from '$lib/components/custom/form/FormProgress.svelte';
	import RadioGrid from '$lib/components/custom/form/items/RadioGrid.svelte';
	import RadioGroup from '$lib/components/custom/form/items/RadioGroup.svelte';
	import SliderInput from '$lib/components/custom/form/items/SliderInput.svelte';
	import TextInput from '$lib/components/custom/form/items/TextInput.svelte';
	import TimeInput from '$lib/components/custom/form/items/TimeInput.svelte';
	import {
		ADDITIONAL_TITLE_ITEM,
		CHECKBOX_GRID_QUESTION_ITEM,
		CHECKBOX_QUESTION_ITEM,
		CHOICE_ITEM_TYPES,
		DATE_QUESTION_ITEM,
		DROPDOWN_QUESTION_ITEM,
		GRID_ITEM_TYPES,
		IMAGE_ITEM,
		PARAGRAPH_QUESTION_ITEM,
		QUESTION_ITEM_TYPES,
		RADIO_GRID_QUESTION_ITEM,
		RADIO_QUESTION_ITEM,
		SCALE_QUESTION_ITEM,
		SUBMIT_KEY_PREFIX,
		TEXT_ITEM_TYPES,
		TEXT_QUESTION_ITEM,
		TIME_QUESTION_ITEM
	} from '$lib/form/constants';
	import {
		formDataStore,
		formStructureStore,
		type TFormInfoStore,
		type TFormStrucutre
	} from '$lib/form/stores';
	import type {
		TChoicesItem,
		TDateItem,
		TFormInfo,
		TFormItem,
		TGridItem,
		TScaleItem,
		TTextItem,
		TTimeItem
	} from '$lib/form/types';
	import ParagraphInput from './items/ParagraphInput.svelte';
	//import { validateFormItemData } from '$lib/form/utils/validation';

	export let isPreview: boolean = false;
	export let canSubmit: boolean = true;
	export let info: TFormInfo;
	export let items: TFormItem[];

	let currentQuestion: number = 0;

	let state: 'WELCOME' | 'FORM' | 'END' = 'WELCOME';
	let errorMessage: string | null = null;
	let isSubmitted: boolean = false;

	function handleOnNext() {
		console.log('next', $formStructureStore);

		if (isPreview && currentQuestion === items.length - 1) {
			isSubmitted = true;
		} else {
			//validateFormItemData(items[currentQuestion].data, $formDataStore);
		}
	}

	function handleOnPrevious() {
		if (currentQuestion > 0) {
			currentQuestion -= 1;
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
					submitUrl: info.responderUri
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

	let item: TFormItem;

	$: {
		if (CHOICE_ITEM_TYPES.includes(items[currentQuestion].type)) {
			item = items[currentQuestion] as TChoicesItem;
		} else if (GRID_ITEM_TYPES.includes(items[currentQuestion].type)) {
			item = items[currentQuestion] as TGridItem;
		} else if (TEXT_ITEM_TYPES.includes(items[currentQuestion].type)) {
			item = items[currentQuestion] as TTextItem;
		} else if (items[currentQuestion].type === DATE_QUESTION_ITEM) {
			item = items[currentQuestion] as TDateItem;
		} else if (items[currentQuestion].type === TIME_QUESTION_ITEM) {
			item = items[currentQuestion] as TTimeItem;
		} else if (items[currentQuestion].type === SCALE_QUESTION_ITEM) {
			item = items[currentQuestion] as TScaleItem;
		}

		console.log(item);
	}
</script>

<div class="flex w-full flex-col items-center">
	<div class="flex w-full flex-col items-start space-y-4 px-4">
		<FormProgress totalPages={items.length} {currentQuestion} />

		{#if items[currentQuestion].type === TEXT_QUESTION_ITEM}
			<TextInput item={items[currentQuestion]} />
		{:else if items[currentQuestion].type === PARAGRAPH_QUESTION_ITEM}
			<ParagraphInput item={items[currentQuestion]} />
		{:else if items[currentQuestion].type === RADIO_QUESTION_ITEM}
			<RadioGroup item={items[currentQuestion]} />
		{:else if items[currentQuestion].type === CHECKBOX_QUESTION_ITEM}
			<CheckboxGroup item={items[currentQuestion]} />
		{:else if items[currentQuestion].type === DROPDOWN_QUESTION_ITEM}
			<Dropdown item={items[currentQuestion]} />
		{:else if items[currentQuestion].type === SCALE_QUESTION_ITEM}
			<SliderInput item={items[currentQuestion]} />
		{:else if items[currentQuestion].type === DATE_QUESTION_ITEM}
			<DateInput item={items[currentQuestion]} />
		{:else if items[currentQuestion].type === TIME_QUESTION_ITEM}
			<TimeInput item={items[currentQuestion]} />
		{:else if items[currentQuestion].type === RADIO_GRID_QUESTION_ITEM}
			<RadioGrid item={items[currentQuestion]} />
		{:else if items[currentQuestion].type === CHECKBOX_GRID_QUESTION_ITEM}
			<CheckboxGrid item={items[currentQuestion]} />
		{/if}

		<FormControls
			totalPages={items.length}
			{currentQuestion}
			{handleOnNext}
			{handleOnPrevious}
			{handleOnSubmit}
		/>
	</div>
</div>
