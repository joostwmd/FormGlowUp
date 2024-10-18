<script lang="ts">
	import * as Table from '$lib/components/shadcn/ui/table';
	import * as RadioGroup from '$lib/components/shadcn/ui/radio-group';
	import { formDataStore } from '$lib/form/stores';
	import { handleFormValueChange } from '$lib/form/utils/helpers';

	import type { TGridItem } from '$lib/form/types';

	export let item: TGridItem;
	let rows = item.rows;

	$: rows = item.attributes.randomizeOrder ? rows.sort(() => Math.random() - 0.5) : rows;

	function handleRadioGridItemChange(submitId: string, column: string) {
		if ($formDataStore[`${submitId}`] === column) {
			console.log('already selected -> rest');
			handleFormValueChange(null, submitId);
			return;
		}

		let updateValue;

		// if (oneAnswerPerColumn) {
		// 	const columnValues = [];
		// 	console.log('columnValues', columnValues);
		// 	for (let i = 0; i < rows.length; i++) {
		// 		const row = rows[i];
		// 		console.log('row', row);
		// 		const rowValue = $formDataStore[`${SUBMIT_KEY_PREFIX}${row.submitId}`];
		// 		columnValues.push(rowValue);
		// 	}

		// 	if (!columnValues.includes(column)) {
		// 		console.log('can select');
		// 		updateValue = column;
		// 	} else {
		// 		console.log('cannot select');
		// 		updateValue = $formDataStore[`${SUBMIT_KEY_PREFIX}${submitId}`];
		// 	}
		// }

		//handleFormValueChange(updateValue, submitId);
	}
</script>

<Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.Head></Table.Head>
			{#each item.columns as column}
				<Table.Head>{column}</Table.Head>
			{/each}
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each rows as row}
			<Table.Row>
				<Table.Cell class="font-medium">{row.title}</Table.Cell>
				{#each item.columns as column}
					<Table.Cell>
						<RadioGroup.Root bind:value={$formDataStore[`${row.submitId}`]}>
							<RadioGroup.Item value={column} />
						</RadioGroup.Root>
					</Table.Cell>
				{/each}
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
