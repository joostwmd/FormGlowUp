<script lang="ts">
	import { superForm, setMessage, setError } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import * as Form from '$lib/components/shadcn/ui/form';
	import Input from '$lib/components/shadcn/ui/input/input.svelte';
	import {
		CHECKBOX_GRID_QUESTION_ITEM,
		DATE_QUESTION_ITEM,
		RADIO_GRID_QUESTION_ITEM,
		TIME_QUESTION_ITEM
	} from '$lib/form/constants.js';
	import DateInput from '$lib/components/custom/form/DateInput.svelte';
	import TimeInput from '$lib/components/custom/form/TimeInput.svelte';

	export let data;

	const form = superForm(data.form, {
		SPA: true,
		validators: zod(data.formSchema),
		onUpdate({ form }) {
			console.log('form on update', form);
		}
	});
	const { form: formData, enhance } = form;

	function handleFormValueChange(value: string | number, submitId: string) {
		formData.update(($form) => {
			$form[submitId] = value;
			return $form;
		});
	}

	type TFormAttributes = {
		name: string;
		id: string;
		'data-fs-error': string | undefined;
		'aria-describedby': string | undefined;
		'aria-invalid': 'true' | undefined;
		'aria-required': 'true' | undefined;
		'data-fs-control': string;
	};
</script>

<h1>dynamic form</h1>
<form method="POST" use:enhance>
	{#each data.testFormData as question}
		{#if question.type === RADIO_GRID_QUESTION_ITEM || question.type === CHECKBOX_GRID_QUESTION_ITEM}
			<h1>grid questions</h1>
		{:else}
			<Form.Field {form} name={question.title}>
				<Form.Control let:attrs>
					<Form.Label>{question.title}</Form.Label>

					{#if question.type === DATE_QUESTION_ITEM}
						<DateInput
							formAttributes={attrs}
							submitId={question.submitId[0]}
							{handleFormValueChange}
							includeYear={question.yearIncluded}
							includeTime={question.timeIncluded}
						/>
					{:else if question.type === TIME_QUESTION_ITEM}
						<TimeInput
							formAttributes={attrs}
							{handleFormValueChange}
							submitId={question.submitId[0]}
							isDurationInput={question.isDuration}
						/>
					{/if}
				</Form.Control>
				<Form.Description />
				<Form.FieldErrors />
			</Form.Field>
		{/if}
	{/each}

	<button>Submit</button>
</form>
