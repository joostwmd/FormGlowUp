import { constructGoogleFormSubmitUrl, constructSubmitData } from '$lib/form/utils/helpers.js';
import { json } from '@sveltejs/kit';

const validSubmitData =
	'entry.466215191=Spalte+1&entry.601216939=Option+1&entry.1348360356=Option+1&entry.1732665920=Spalte+1&entry.1778283988=Spalte+1&emailAddress=joost.windmoeller%40gmail.com';

export async function POST({ request }) {
	const { formData, responderUri } = await request.json();
	console.log('formData', formData);
	const submitUrl = constructGoogleFormSubmitUrl(responderUri);
	const submitData = constructSubmitData(formData);

	try {
		// Make a single POST request to the form submit URL with the form data
		const response = await fetch(submitUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: submitData
		});

		if (response.ok) {
			console.log('Form submission successful');
			return json({
				success: true
			});
		} else {
			console.error('Form submission failed', response);
			return json({
				success: false
			});
		}
	} catch (error) {
		return json({
			success: false
		});
	}
}
