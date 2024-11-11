import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url, fetch }) => {
	const imageUrl = url.searchParams.get('url');

	if (!imageUrl) {
		return json({ error: 'No URL provided' }, { status: 400 });
	}

	try {
		const response = await fetch(imageUrl);

		if (!response.ok) {
			throw new Error(`Error fetching image: ${response.statusText}`);
		}

		const contentType = response.headers.get('content-type');
		const imageBuffer = await response.arrayBuffer();

		return new Response(imageBuffer, {
			headers: {
				'Content-Type': contentType || 'application/octet-stream'
			}
		});
	} catch (error) {
		console.error('Error fetching image:', error);
		return json({ error: 'Failed to fetch image' }, { status: 500 });
	}
};
