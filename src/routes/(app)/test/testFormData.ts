// export const testFormData = [
// 	{
// 		type: 'CHECKBOX_GRID_QUESTION',
// 		description: null,
// 		columns: ['Spalte 1', 'Spalte 2', 'Spalte 3'],
// 		rows: [
// 			{
// 				isRequired: true,
// 				title: 'Zeile 1',
// 				submitId: '1482325129'
// 			},
// 			{
// 				isRequired: true,
// 				title: 'Zeile 2',
// 				submitId: '585507375'
// 			},
// 			{
// 				isRequired: true,
// 				title: 'Zeile 3',
// 				submitId: '730984188'
// 			}
// 		]
// 	},
// 	{
// 		type: 'TEXT_QUESTION',
// 		isRequired: true,
// 		description: null,
// 		paragraph: null,
// 		submitId: ['805678962'],
// 		validationData: {
// 			category: 1,
// 			validation: 1,
// 			value: ['10'],
// 			errorMessage: 'Error message'
// 		}
// 	},
// 	{
// 		type: 'PARAGRAPH_QUESTION',
// 		isRequired: true,
// 		description: null,
// 		paragraph: true,
// 		submitId: ['497102585'],
// 		validationData: {
// 			category: 6,
// 			validation: 203,
// 			value: ['12'],
// 			errorMessage: 'Min 12 chars error meldung'
// 		}
// 	},
// 	{
// 		type: 'RADIO_QUESTION',
// 		isRequired: null,
// 		description: null,
// 		shuffleOptions: null,
// 		options: ['Option 1'],
// 		submitId: ['1887430017']
// 	}
// ];

export const testFormData = [
	{
		type: 'DATE_QUESTION',
		isRequired: true,
		title: 'Datum',
		description: null,
		yearIncluded: true,
		timeIncluded: null,
		submitId: ['1468877200']
	},
	{
		type: 'DATE_QUESTION',
		isRequired: null,
		title: 'Datum Mit Zeit',
		description: null,
		yearIncluded: true,
		timeIncluded: true,
		submitId: ['missing_submit_id']
	},
	{
		type: 'TIME_QUESTION',
		title: 'Zeit',
		isRequired: true,
		description: null,
		isDuration: null,
		submitId: ['517670088']
	},
	{
		type: 'TIME_QUESTION',
		title: 'Dauer',
		isRequired: null,
		description: 'this is a description of the dauer el',
		isDuration: true,
		submitId: ['634451794']
	}
];

const rewrittenFormData = [
	{
		submitId: '1468877200',
		type: 'DATE_QUESTION',
		attributes: {
			yearIncluded: true,
			timeIncluded: null
		},
		validation: {
			isRequired: true
		},
		data: {
			title: 'Datum',
			description: null
		}
	}
];
