import { getAccessTokens } from '$lib/firebase/utils';

export async function fetchFormData(fetch: any, userId: string, formId: string) {
	const accessToken = await getAccessTokens(userId);

	const res = await fetch('/api/get-form', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ accessToken, formId })
	});

	const data = await res.json();
	return data;
}
