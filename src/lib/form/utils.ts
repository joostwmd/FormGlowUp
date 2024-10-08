export async function fetchFormItems(id: string, userToken: string) {
	const apiUrl = `https://forms.googleapis.com/v1/forms/${id}`;

	let formData;
	let htmlData;

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
		//return json({ error: 'Failed to fetch form data' }, { status: 500 });
	}

	try {
		const responderUrl = formData.responderUri;
		const response = await fetch(responderUrl);

		if (!response.ok) {
			throw new Error(`Error fetching HTML data: ${response.statusText}`);
		}

		htmlData = await response.text();
	} catch (error) {
		console.error('Error fetching HTML data:', error);
		//return json({ error: 'Failed to fetch HTML data' }, { status: 500 });
	}
	console.log({ html: htmlData, formData: formData });
	//return json({ html: htmlData, formData: formData });
}
