import type { Actions, PageServerLoad } from './$types.js';
import { superValidate, message } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
import { z, ZodNumber, ZodString } from 'zod';
import { testFormData } from '../test/testFormData.js';
import { DATE_QUESTION_ITEM, TIME_QUESTION_ITEM } from '$lib/form/constants.js';
import {
	YEAR_SUFFIX,
	DAY_SUFFIX,
	HOUR_SUFFIX,
	MINUTE_SUFFIX,
	MONTH_SUFFIX,
	SECOND_SUFFIX
} from '$lib/form/constants.js';

const schema = z.object({
	name: z.string(),
	age: z.number().int().min(18)
});

function generateFormSchema(formItems: any) {
	const formSchema: { [key: string]: ZodString | ZodNumber } = {};

	for (const item of formItems) {
		const submitId = item.submitId[0];
		if (item.type === DATE_QUESTION_ITEM) {
			//root value binding
			formSchema[submitId] = item.isRequired ? z.string().min(1) : z.string();

			formSchema[submitId + DAY_SUFFIX] = z.number().int().min(1).max(31);
			formSchema[submitId + MONTH_SUFFIX] = z.number().int().min(1).max(12);

			if (item.yearIncluded) {
				formSchema[submitId + YEAR_SUFFIX] = z.number().int().min(1900).max(2100);
			}

			if (item.timeIncluded) {
				formSchema[submitId + HOUR_SUFFIX] = z.number().int().min(0).max(23);
				formSchema[submitId + MINUTE_SUFFIX] = z.number().int().min(0).max(59);
			}
		} else if (item.type === TIME_QUESTION_ITEM) {
			//root value binding
			formSchema[submitId] = item.isRequired ? z.string().min(1) : z.string();
			formSchema[submitId + HOUR_SUFFIX] = z.number().int().min(0).max(23);
			formSchema[submitId + MINUTE_SUFFIX] = z.number().int().min(0).max(59);

			if (item.isDuration) {
				formSchema[submitId + SECOND_SUFFIX] = z.number().int().min(0).max(59);
			}
		}
	}
	return z.object(formSchema);
}

function constructFormData(formItems: any) {
	const formData: { [key: string]: string | number } = {};
	for (const item of formItems) {
		const submitId = item.submitId[0];
		if (item.type === DATE_QUESTION_ITEM) {
			formData[submitId] = '';
			formData[submitId + DAY_SUFFIX] = '';
			formData[submitId + MONTH_SUFFIX] = '';
			if (item.yearIncluded) {
				formData[submitId + YEAR_SUFFIX] = '';
			}
			if (item.timeIncluded) {
				formData[submitId + HOUR_SUFFIX] = '';
				formData[submitId + MINUTE_SUFFIX] = '';
			}
		} else if (item.type === TIME_QUESTION_ITEM) {
			formData[submitId] = '';
			formData[submitId + HOUR_SUFFIX] = '';
			formData[submitId + MINUTE_SUFFIX] = '';
			if (item.isDuration) {
				formData[submitId + SECOND_SUFFIX] = '';
			}
		}
	}
	return formData;
}

export const load: PageServerLoad = async () => {
	const formData = constructFormData(testFormData);
	const formSchema = generateFormSchema(testFormData);

	return { form: await superValidate(formData, zod(formSchema)), formQuesitons: testFormData };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(schema));
		console.dir(form, { depth: 10 });

		if (!form.valid) return fail(400, { form });

		return message(form, 'Form posted successfully!');
	}
};
