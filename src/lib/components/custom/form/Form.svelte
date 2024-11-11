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
		CHECKBOX_GRID_QUESTION_ITEM,
		CHECKBOX_QUESTION_ITEM,
		CHOICE_ITEM_TYPES,
		DATE_QUESTION_ITEM,
		DROPDOWN_QUESTION_ITEM,
		GRID_ITEM_TYPES,
		PARAGRAPH_QUESTION_ITEM,
		RADIO_GRID_QUESTION_ITEM,
		RADIO_QUESTION_ITEM,
		SCALE_QUESTION_ITEM,
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
	import { validateFormItemData } from '$lib/form/utils/question-validation';
	import { toast } from 'svelte-sonner';
	import ErrorToast from '../toasts/ErrorToast.svelte';

	export let isPreview: boolean = false;
	export let info: TFormInfo;
	export let items: TFormItem[];

	let currentItem: number = 0;
	let state: 'WELCOME' | 'FORM' | 'END' = 'WELCOME';
	let errorMessage: string | null = null;

	function handleOnNext() {
		if (state === 'WELCOME') {
			state = 'FORM';
		} else if (state === 'FORM') {
			const validationRes = validateFormItemData(items[currentItem], $formDataStore);

			if (validationRes.valid) {
				errorMessage = null;
				currentItem += 1;
			} else {
				errorMessage = validationRes.message;
			}
		}
	}

	function handleOnPrevious() {
		if (state === 'FORM' && currentItem === 0 && isPreview) {
			state = 'WELCOME';
		} else if (state === 'END' && isPreview) {
			state = 'FORM';
		} else if (currentItem > 0) {
			errorMessage = null;
			currentItem -= 1;
		}
	}

	let isSubmitting: boolean = false;
	async function handleOnSubmit() {
		if (isPreview) {
			state = 'END';
		} else {
			isSubmitting = true;
			console.log('subbmitting for real');

			const res = await fetch('/api/submit-form', {
				method: 'POST',
				body: JSON.stringify({
					formData: $formDataStore,
					responderUri: info.responderUri
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			const result = await res.json();
			if (result.success) {
				console.log('Form submitted successfully, go to goodbye page');
				state = 'END';
			} else {
				toast.custom(ErrorToast, {
					componentProps: {
						heading: 'Form Submission Failed',
						description: 'Please try again later'
					}
				});
			}
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
	}
</script>

<div class="flex w-full flex-col items-center">
	<div class="flex w-full flex-col items-start space-y-4">
		{#if state === 'WELCOME'}
			<div class="flex w-full flex-col items-center">
				<h1 class="text-center text-2xl font-bold">{info.title}</h1>
				<p class="text-center text-sm text-gray-500">{info.description}</p>
			</div>
		{:else if state === 'FORM'}
			<FormProgress totalPages={items.length} {currentItem} />
			{#key currentItem}
				{#if item.displayData.image}
					<img
						src={`/api/proxy-image?url=${item.displayData.image.src}`}
						alt="form pic"
						class="w-full object-contain"
					/>
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
			{/key}
		{:else if state === 'END'}
			<div class="flex w-full flex-col items-center">
				<h1 class="text-center text-2xl font-bold">Thank you for your Time</h1>
				<p class="text-center text-sm text-gray-500">
					Your reposonses were successfully transmitted
				</p>

				{#if isPreview}
					<p class="">Responsed are not send to Google in Preview Mode</p>
				{/if}
			</div>
		{/if}

		<FormControls
			{state}
			{isPreview}
			totalPages={items.length}
			{currentItem}
			{handleOnNext}
			{handleOnPrevious}
			{handleOnSubmit}
		/>
	</div>
</div>
