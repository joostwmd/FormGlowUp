import { JSDOM } from 'jsdom';

export function constructQuestionItemsDataFromHTML(htmlString: string) {
	const dom = new JSDOM(htmlString);
	const doc = dom.window.document;
	const listItems = doc.querySelectorAll('div[role="listitem"]');

	const listItemsData = Array.from(listItems).map((item) => {
		const firstChild = item.firstElementChild;
		return firstChild ? firstChild.getAttribute('data-params') : null;
	});

	const result = [];

	for (let itemData of listItemsData) {
		if (!itemData) continue;
		itemData = itemData.replace(/^%.@\./, '');
		if (itemData[1] !== '[') {
			itemData = '[' + itemData;
		}

		try {
			const parsedData = JSON.parse(itemData);

			const ids = itemData.match(/\b\d{9,10}\b/g) || [];
			const submitId = ids.length > 1 ? ids.slice(1) : ids;

			const validationDataContainer = parsedData[0][4][0][4];
			let validationData = null;
			if (validationDataContainer) {
				const validation = validationDataContainer[0];
				validationData = {
					category: validation[0],
					validation: validation[1],
					value: validation.length > 3 ? validation[2] : null,
					errorMessage: validation.length > 3 ? validation[3] : validation[2]
				};
			}

			result.push({
				submitId,
				validationData
			});
		} catch (e) {
			console.error('Error parsing data-params:', e);
		}
	}
	return result;
}
