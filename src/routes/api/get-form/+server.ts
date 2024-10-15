import { json } from '@sveltejs/kit';
import { JSDOM } from 'jsdom';

export async function POST({ request, fetch }) {
	const { accessToken, formId } = await request.json();

	const apiUrl = `https://forms.googleapis.com/v1/forms/${formId}`;

	let formData;
	let htmlData;

	// First fetch to get form data
	try {
		const response = await fetch(apiUrl, {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		});

		if (!response.ok) {
			throw new Error(`Error fetching form data: ${response.statusText}`);
		}

		formData = await response.json();
	} catch (error) {
		console.error('Error fetching form data:', error);
		return json({ error: 'Failed to fetch form data' }, { status: 500 });
	}

	try {
		const responderUrl = formData.responderUri;
		const response = await fetch(responderUrl);
		if (!response.ok) {
			throw new Error(`Error fetching HTML data: ${response.statusText}`);
		}

		const text = await response.text();
		htmlData = text;
	} catch (error) {
		console.error('Error fetching HTML data:', error);
		return json({ error: 'Failed to fetch HTML data' }, { status: 500 });
	}

	return json({ htmlData: htmlData, formData: formData });
}
