<script lang="ts">
	import Input from '$lib/components/shadcn/ui/input/input.svelte';
	import * as Form from '$lib/components/shadcn/ui/form';
	import type { PageData } from './$types';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import type { unknown } from 'zod';
	import DateInputTest from './DateInputTest.svelte';

	export let data: PageData;

	const form = superForm(data.form, {
		resetForm: false,
		dataType: 'json'
		//validators: zodClient(schema)
	});
	const { form: formData, message, enhance } = form;
</script>

<form method="POST" use:enhance>
	{#each data.formQuesitons as question}
		<Form.Field {form} name={question.title}>
			<Form.Control let:attrs>
				<Form.Label>{question.title}</Form.Label>
				<DateInputTest {form} field={form[question.submitId]} submitId={question.submitId} />
				<!-- <Input {...attrs} bind:value={$formData[item]} /> -->
			</Form.Control>
			{#if question.description}
				<Form.Description>{question.description}</Form.Description>
			{/if}

			<Form.FieldErrors />
		</Form.Field>
	{/each}

	<button>Submit</button>
</form>
