export const FORM_DATA_TEST = {
	formItems: [
		[
			{
				title: 'eine neue frageee',
				type: 'DROPDOWN_QUESTION',
				data: { options: ['Option 1', 'Option 2', 'Option 3'], submitId: '101406814' }
			},
			{ title: 'Email Test', type: 'TEXT_QUESTION', data: { submitId: '101406822' } },
			{
				title: 'Scale',
				type: 'SCALE_QUESTION',
				data: { minValue: 1, maxValue: 5, submitId: '101475901' }
			},
			{
				title: 'title of question ',
				type: 'RADIO_QUESTION',
				data: { options: ['Option 1', 'Option 2', '__other_option__'], submitId: '101544537' }
			},
			{
				title: 'date and time question',
				type: 'DATE_QUESTION',
				data: { yearIncluded: true, submitId: '101544545' }
			},
			{
				title: 'time question',
				type: 'TIME_QUESTION',
				data: { isDuration: true, submitId: '101614323' }
			},
			{ type: 'RADIO_QUESTION', data: { options: ['Option 1'], submitId: '101632904' } }
		]
	]
};

export const TEST_RADIUSES = [0, 0.25, 0.5, 0.75, 1.0];
export const TEST_FONTS = ['Roboto, sans-serif', 'Arial, sans-serif', 'Courier, monospace'];