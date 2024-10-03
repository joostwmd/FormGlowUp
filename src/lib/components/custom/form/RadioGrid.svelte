<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import { formDataStore, handleFormValueChange } from '$lib/form/store';
	import { SUBMIT_KEY_PREFIX } from '$lib/form/constants';

	export let description: string | null = null;
	export let randomizeOrder: boolean = false;
	export let oneAnswerPerColumn: boolean = false;

	export let columns: string[];
	export let rows: {}[];

	$: rows = randomizeOrder ? rows.sort(() => Math.random() - 0.5) : rows;

	function handleRadioGridItemChange(submitId, column) {
		if ($formDataStore[`${SUBMIT_KEY_PREFIX}${submitId}`] === column) {
			console.log('already selected -> rest');
			handleFormValueChange(null, submitId);
			return;
		}

		let updateValue;

		if (oneAnswerPerColumn) {
			const columnValues = [];
			console.log('columnValues', columnValues);
			for (let i = 0; i < rows.length; i++) {
				const row = rows[i];
				console.log('row', row);
				const rowValue = $formDataStore[`${SUBMIT_KEY_PREFIX}${row.submitId}`];
				columnValues.push(rowValue);
			}

			if (!columnValues.includes(column)) {
				console.log('can select');
				updateValue = column;
			} else {
				console.log('cannot select');
				updateValue = $formDataStore[`${SUBMIT_KEY_PREFIX}${submitId}`];
			}
		}

		handleFormValueChange(updateValue, submitId);

		const test = $formDataStore[`${SUBMIT_KEY_PREFIX}${submitId}`];
		console.log('test', test);
	}
</script>

{#if description}
	<p class="text-sm text-gray-500">{description}</p>
{/if}

<Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.Head></Table.Head>
			{#each columns as column}
				<Table.Head>{column}</Table.Head>
			{/each}
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each rows as row}
			<Table.Row>
				<Table.Cell class="font-medium">{row.title}</Table.Cell>
				{#each columns as column}
					<Table.Cell>
						<RadioGroup.Root bind:value={$formDataStore[`${SUBMIT_KEY_PREFIX}${row.submitId}`]}>
							<RadioGroup.Item value={column} />
						</RadioGroup.Root>
					</Table.Cell>
				{/each}
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
