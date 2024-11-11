import { json } from '@sveltejs/kit';

export async function POST({ request, fetch }) {
	const { accessToken, formId } = await request.json();

	const apiUrl = `https://forms.googleapis.com/v1/forms/${formId}`;

	let apiData;
	const htmlData: { firstFetch: string; secondFetch: string } = { firstFetch: '', secondFetch: '' };

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

		apiData = await response.json();
	} catch (error) {
		console.error('Error fetching form data:', error);
		return json({ error: 'Failed to fetch form data' }, { status: 500 });
	}

	try {
		const responderUrl = apiData.responderUri;
		const responseOne = await fetch(responderUrl);
		if (!responseOne.ok) {
			throw new Error(`Error fetching HTML data: ${responseOne.statusText}`);
		}

		const textOne = await responseOne.text();
		htmlData.firstFetch = textOne;

		const responseTwo = await fetch(responderUrl);
		if (!responseTwo.ok) {
			throw new Error(`Error fetching HTML data: ${responseTwo.statusText}`);
		}

		const textTwo = await responseTwo.text();
		htmlData.secondFetch = textTwo;
	} catch (error) {
		console.error('Error fetching HTML data:', error);
		return json({ error: 'Failed to fetch HTML data' }, { status: 500 });
	}
	return json({ htmlData: htmlData, apiData: apiData, success: true });
}
