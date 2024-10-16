import { generateFormSchema } from '$lib/form/utils/validation.js';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { testFormData } from './testFormData.js';
import { z } from 'zod';

const formSchema = z.object({
	1468877200: z.string().max(1),
	missing_submit_id: z.string().min(2),
	517670088: z.string(),
	634451794: z.string()
});

export const load = async ({ fetch }) => {
	//const formSchema = generateFormSchema(testFormData);

	const submitIdsMap = testFormData.reduce((acc, item) => {
		item.submitId.forEach((id) => {
			acc[id] = ''; // Initialize with an empty string or any default value
		});
		return acc;
	}, {});

	console.log('submitIdsMap', submitIdsMap);

	const form = await superValidate(submitIdsMap, zod(formSchema));

	return { form, formSchema, testFormData };
};
