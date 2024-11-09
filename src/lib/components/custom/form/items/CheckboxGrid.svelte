<script lang="ts">
	import * as Table from '$lib/components/shadcn/ui/table';
	import Checkbox from '$lib/components/shadcn/ui/checkbox/checkbox.svelte';
	import { formDataStore } from '$lib/form/stores';
	import type { TGridItem } from '$lib/form/types';
	import { handleFormValueChange } from '$lib/form/utils/helpers';

	export let item: TGridItem;
	let rows = item.rows;

	$: rows = item.attributes.randomizeOrder ? rows.sort(() => Math.random() - 0.5) : rows;

	function handleCheckboxGridItemChange(submitId: string, column: string) {
		let currentValues = $formDataStore[`${submitId}`] || [];
		console.log('Current values:', currentValues);

		if (currentValues.includes(column)) {
			console.log('already selected -> remove');
			currentValues = currentValues.filter((value: string) => value !== column);
		} else {
			console.log('not selected -> add');
			currentValues = [...currentValues, column];
		}

		// if (oneAnswerPerColumn) {
		// 	const columnValues = [];
		// 	console.log('columnValues', columnValues);
		// 	for (let i = 0; i < rows.length; i++) {
		// 		const row = rows[i];
		// 		console.log('row', row);
		// 		const rowValue = $formDataStore[`${SUBMIT_KEY_PREFIX}${row.submitId}`];
		// 		columnValues.push(rowValue);
		// 	}

		// 	if (columnValues.flat().includes(column)) {
		// 		console.log('cannot select');
		// 		currentValues = currentValues.filter((value) => value !== column);
		// 	} else {
		// 		console.log('can select');
		// 	}
		// }

		handleFormValueChange(currentValues, submitId);
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
						<Checkbox
							on:click={(e) => handleCheckboxGridItemChange(row.submitId, column)}
							value={column}
						/>
					</Table.Cell>
				{/each}
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
