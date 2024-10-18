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
	import { formDataStore } from '$lib/form/stores';
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
	import { validateFormItemData } from '$lib/form/utils/validation';
	//import { validateFormItemData } from '$lib/form/utils/validation';

	export let isPreview: boolean = false;
	export let canSubmit: boolean = true;
	export let info: TFormInfo;
	export let items: TFormItem[];

	let currentItem: number = 0;

	let state: 'WELCOME' | 'FORM' | 'END' = 'WELCOME';
	let errorMessage: string | null = null;
	let isSubmitted: boolean = false;

	function handleOnNext() {
		if (isPreview && currentItem === items.length - 1) {
			isSubmitted = true;
		} else {
			const validationRes = validateFormItemData(items[currentItem], $formDataStore);

			console.log(validationRes);

			if (validationRes.valid) {
				currentItem += 1;
			} else {
				errorMessage = validationRes.message;
			}
		}
	}

	function handleOnPrevious() {
		if (currentItem > 0) {
			currentItem -= 1;
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
		if (CHOICE_ITEM_TYPES.includes(items[currentItem].type)) {
			item = items[currentItem] as TChoicesItem;
		} else if (GRID_ITEM_TYPES.includes(items[currentItem].type)) {
			item = items[currentItem] as TGridItem;
		} else if (TEXT_ITEM_TYPES.includes(items[currentItem].type)) {
			item = items[currentItem] as TTextItem;
		} else if (items[currentItem].type === DATE_QUESTION_ITEM) {
			item = items[currentItem] as TDateItem;
		} else if (items[currentItem].type === TIME_QUESTION_ITEM) {
			item = items[currentItem] as TTimeItem;
		} else if (items[currentItem].type === SCALE_QUESTION_ITEM) {
			item = items[currentItem] as TScaleItem;
		}

		console.log(item);
	}
</script>

<div class="flex w-full flex-col items-center">
	<div class="flex w-full flex-col items-start space-y-4 px-4">
		<FormProgress totalPages={items.length} {currentItem} />

		{#if item.displayData.image}
			<img src={item.displayData.image.src} alt="form image" class="h-48 w-full object-cover" />
		{/if}

		{#if item.displayData.title}
			<h1 class="text-2xl font-bold">{item.displayData.title}</h1>
		{/if}

		{#if item.displayData.description}
			<p class="text-sm text-gray-500">{item.displayData.description}</p>
		{/if}

		{#if items[currentItem].type === TEXT_QUESTION_ITEM}
			<TextInput item={items[currentItem]} />
		{:else if items[currentItem].type === PARAGRAPH_QUESTION_ITEM}
			<ParagraphInput item={items[currentItem]} />
		{:else if items[currentItem].type === RADIO_QUESTION_ITEM}
			<RadioGroup item={items[currentItem]} />
		{:else if items[currentItem].type === CHECKBOX_QUESTION_ITEM}
			<CheckboxGroup item={items[currentItem]} />
		{:else if items[currentItem].type === DROPDOWN_QUESTION_ITEM}
			<Dropdown item={items[currentItem]} />
		{:else if items[currentItem].type === SCALE_QUESTION_ITEM}
			<SliderInput item={items[currentItem]} />
		{:else if items[currentItem].type === DATE_QUESTION_ITEM}
			<DateInput item={items[currentItem]} />
		{:else if items[currentItem].type === TIME_QUESTION_ITEM}
			<TimeInput item={items[currentItem]} />
		{:else if items[currentItem].type === RADIO_GRID_QUESTION_ITEM}
			<RadioGrid item={items[currentItem]} />
		{:else if items[currentItem].type === CHECKBOX_GRID_QUESTION_ITEM}
			<CheckboxGrid item={items[currentItem]} />
		{/if}

		{#if errorMessage}
			<p class="text-red-500">{errorMessage}</p>
		{/if}

		<FormControls
			totalPages={items.length}
			{currentItem}
			{handleOnNext}
			{handleOnPrevious}
			{handleOnSubmit}
		/>
	</div>
</div>
