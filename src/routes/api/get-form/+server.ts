import { json } from '@sveltejs/kit';

const userToken =
	'ya29.a0AcM612z6GeL2GEAZLXwkIOFfDzsy3nRkfP0XSYSNkh2o83jv6bKWAa7_2fl78Oi6k8CiJvpU6DWJznPVPGV-WjDUEI1aFOHp_lqo8xb3ZDZQG5dIyblx3lsuPIJWSjJ2PPlAVvt7_2fnWWiNZ7KB527OU6CG_SCzwx3jZNDEaCgYKAWwSARISFQHGX2Mi2Sr5IU0LgEbMv20nSHLGYg0175';

const id = '1Skdmho8WN2RkylRuCPVhveobNVlwn-YoPjkMcwu0Zmc';

export async function GET({ fetch }) {
	console.log('id', id);
	const apiUrl = `https://forms.googleapis.com/v1/forms/${id}`;

	let formData;
	let htmlData;

	// First fetch to get form data
	try {
		const response = await fetch(apiUrl, {
			headers: {
				Authorization: `Bearer ${userToken}`
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

	// Second fetch to get HTML data
	try {
		console.log('formData', formData);
		const responderUrl = formData.responderUri;
		const response = await fetch(responderUrl);
		//console.log('res', response);
		if (!response.ok) {
			throw new Error(`Error fetching HTML data: ${response.statusText}`);
		}

		const text = await response.text();
		console.log('text', text);
		htmlData = text;
	} catch (error) {
		console.error('Error fetching HTML data:', error);
		return json({ error: 'Failed to fetch HTML data' }, { status: 500 });
	}

	return json({ html: htmlData, formData: formData });
}
