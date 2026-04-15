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

	function textItem(i: TFormItem): TTextItem {
		return i as TTextItem;
	}
	function choicesItem(i: TFormItem): TChoicesItem {
		return i as TChoicesItem;
	}
	function scaleItem(i: TFormItem): TScaleItem {
		return i as TScaleItem;
	}
	function dateItem(i: TFormItem): TDateItem {
		return i as TDateItem;
	}
	function timeItem(i: TFormItem): TTimeItem {
		return i as TTimeItem;
	}
	function gridItem(i: TFormItem): TGridItem {
		return i as TGridItem;
	}
</script>

<div class="flex h-full min-h-0 w-full flex-col">
	<div class="flex min-h-0 flex-1 flex-col overflow-y-auto pb-6">
		{#if state === 'WELCOME'}
			<div class="flex flex-1 flex-col items-center justify-center gap-2 px-1 text-center">
				<h1 class="text-2xl font-bold">{info.title}</h1>
				<p class="text-sm text-muted-foreground">{info.description}</p>
			</div>
		{:else if state === 'FORM'}
			<div class="flex flex-col gap-6">
				<FormProgress totalPages={items.length} {currentItem} />
				{#key currentItem}
					<div class="flex flex-col gap-2">
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
							<p class="text-sm text-muted-foreground">{item.displayData.description}</p>
						{/if}
					</div>
					<div class="mt-4 flex flex-col gap-3">
						{#if items[currentItem].type === TEXT_QUESTION_ITEM}
							<TextInput item={textItem(item)} />
						{:else if items[currentItem].type === PARAGRAPH_QUESTION_ITEM}
							<ParagraphInput item={textItem(item)} />
						{:else if items[currentItem].type === RADIO_QUESTION_ITEM}
							<RadioGroup item={choicesItem(item)} />
						{:else if items[currentItem].type === CHECKBOX_QUESTION_ITEM}
							<CheckboxGroup item={choicesItem(item)} />
						{:else if items[currentItem].type === DROPDOWN_QUESTION_ITEM}
							<Dropdown item={choicesItem(item)} />
						{:else if items[currentItem].type === SCALE_QUESTION_ITEM}
							<SliderInput item={scaleItem(item)} />
						{:else if items[currentItem].type === DATE_QUESTION_ITEM}
							<DateInput item={dateItem(item)} />
						{:else if items[currentItem].type === TIME_QUESTION_ITEM}
							<TimeInput item={timeItem(item)} />
						{:else if items[currentItem].type === RADIO_GRID_QUESTION_ITEM}
							<RadioGrid item={gridItem(item)} />
						{:else if items[currentItem].type === CHECKBOX_GRID_QUESTION_ITEM}
							<CheckboxGrid item={gridItem(item)} />
						{/if}
						{#if errorMessage}
							<p class="text-sm text-destructive">{errorMessage}</p>
						{/if}
					</div>
				{/key}
			</div>
		{:else if state === 'END'}
			<div class="flex flex-1 flex-col items-center justify-center gap-2 text-center">
				<h1 class="text-2xl font-bold">Thank you for your Time</h1>
				<p class="text-sm text-muted-foreground">Your reposonses were successfully transmitted</p>

				{#if isPreview}
					<p class="text-sm text-muted-foreground">Responsed are not send to Google in Preview Mode</p>
				{/if}
			</div>
		{/if}
	</div>

	<div class="shrink-0 border-t border-border pt-4">
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
