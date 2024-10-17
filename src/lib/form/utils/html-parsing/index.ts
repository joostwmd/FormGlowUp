import { JSDOM } from 'jsdom';
import type { TConstructedHTMLData } from './types';

export function constructQuestionItemsDataFromHTML(htmlString: string): TConstructedHTMLData[] {
	const dom = new JSDOM(htmlString);
	const doc = dom.window.document;
	const listItems = doc.querySelectorAll('div[role="listitem"]');

	const listItemsData = Array.from(listItems).map((item) => {
		const firstChild = item.firstElementChild;
		return firstChild ? firstChild.getAttribute('data-params') : null;
	});

	const result: TConstructedHTMLData[] = [];

	for (let itemData of listItemsData) {
		if (!itemData) continue;
		itemData = itemData.replace(/^%.@\./, '');
		if (itemData[1] !== '[') {
			itemData = '[' + itemData;
		}

		try {
			const parsedData = JSON.parse(itemData);

			const ids = itemData.match(/\b\d{8,11}\b/g) || [];
			console.log('how many ids', ids.length, ids);

			if (ids.length < 2) {
				console.error('Not enough IDs found in data-params:', itemData);
				continue;
			}

			const validationDataContainer = parsedData[0][4][0][4];
			let validationData: TConstructedHTMLData['validation'] = {};

			if (validationDataContainer) {
				const validation = validationDataContainer[0];
				validationData = {
					category: validation[0],
					type: validation[1],
					value: validation[2]
				};

				if (validation.length > 3) {
					validationData.message = validation[3];
				}
			}

			// Handle grid question type cases
			for (let i = 1; i < ids.length; i++) {
				result.push({
					submitId: ids[i],
					validation: validationData
				});
			}
		} catch (e) {
			console.error('Error parsing data-params:', e);
		}
	}
	return result;
}
