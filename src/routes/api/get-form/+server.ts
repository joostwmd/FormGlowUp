import { json } from '@sveltejs/kit';

const userToken =
	'ya29.a0AcM612yVPdxgbTf_x7nOgmzuxJNRvy0Q4m5wiFAl2IElS58zO2gashAXAfMLkh7SpQXgC4XWEKvUbbZN5TDNphqtFRhvevc7OQbwfQyMe-E1KYAV_rOklE95HouX1tSEnjTjOsdLHzJlnQbgkxgAhqiZ1pvm_W-BeSbu7YO3aCgYKAdYSARISFQHGX2Mir6Krue-riBoWNuQi_vI1EA0175';

const id = '1Skdmho8WN2RkylRuCPVhveobNVlwn-YoPjkMcwu0Zmc';

export async function POST({ request, fetch }) {
	const { accessToken, formId } = await request.json();

	console.log('api server', accessToken, formId);

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
