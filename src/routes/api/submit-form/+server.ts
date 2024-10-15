import { json } from '@sveltejs/kit';
const testSubmitUrl =
	'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfaNknr940_AOww5I0-peTdr3b8XNOMaGxNuiieiJvrKJAV3Q/formResponse';

export async function POST({ request }) {
	const { formData, submitUrl } = await request.json();
	console.log('formData', formData);
	console.log('submitUrl', submitUrl);

	// Filter out null values
	const nonNullEntries = formData.filter(([key, value]) => value !== null);
	console.log('nonNullEntries', nonNullEntries);
	// Convert the non-null entries to application/x-www-form-urlencoded format
	const urlEncodedData = new URLSearchParams(nonNullEntries).toString();

	try {
		// Make a single POST request to the form submit URL with the form data
		const response = await fetch(testSubmitUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: urlEncodedData
		});

		if (response.ok) {
			console.log('Form submitted successfully');
		} else {
			console.error('Form submission failed', response);
		}
	} catch (error) {
		console.error('Error submitting form', error);
	}

	return json({ res: 'submitted' });
}
