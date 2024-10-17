<script lang="ts">
	import Calendar from '$lib/components/shadcn/ui/calendar/calendar.svelte';
	import CalendarIcon from 'lucide-svelte/icons/calendar';
	import { type DateValue, DateFormatter, getLocalTimeZone } from '@internationalized/date';
	import * as Popover from '$lib/components/shadcn/ui/popover/index.js';
	import Button from '$lib/components/shadcn/ui/button/button.svelte';
	import { cn } from '$lib/components/shadcn/utils';
	import { DAY_SUFFIX, MONTH_SUFFIX, TIME_QUESTION_ITEM, YEAR_SUFFIX } from '$lib/form/constants';
	import type { TDateItem } from '$lib/form/types';
	import { handleFormValueChange } from '$lib/form/utils/helpers';
	import TimeInput from './TimeInput.svelte';

	export let item: TDateItem;
	const df = new DateFormatter('en-US', {
		dateStyle: 'short'
	});

	let dateValue: DateValue | undefined = undefined;

	$: {
		console.log(dateValue);
		const DD = {
			suffix: DAY_SUFFIX,
			value: dateValue?.day
		};

		const MM = {
			suffix: MONTH_SUFFIX,
			value: dateValue?.month
		};

		const entries = [DD, MM];

		if (item.attributes.yearIncluded) {
			entries.push({
				suffix: YEAR_SUFFIX,
				value: dateValue?.year
			});
		}

		entries.forEach((entry) => {
			handleFormValueChange(entry.value!, item.submitId + entry.suffix);
		});

		handleFormValueChange(dateValue?.toDate(getLocalTimeZone()) || '', item.submitId);
	}
</script>

{#if item.displayData.description}
	<p class="text-sm text-gray-500">{item.displayData.description}</p>
{/if}

<Popover.Root openFocus>
	<Popover.Trigger asChild let:builder>
		<Button
			variant="outline"
			class={cn(
				'w-full justify-start text-left font-normal',
				!dateValue && 'text-muted-foreground'
			)}
			builders={[builder]}
		>
			<CalendarIcon class="mr-2 h-4 w-4" />
			{dateValue ? df.format(dateValue.toDate(getLocalTimeZone())) : 'Select a date'}
		</Button>
	</Popover.Trigger>
	<Popover.Content class="w-auto p-0">
		<Calendar bind:value={dateValue} initialFocus />
	</Popover.Content>
</Popover.Root>

{#if item.attributes.timeIncluded}
	<TimeInput
		item={{
			type: TIME_QUESTION_ITEM,
			submitId: item.submitId,
			validation: {
				isRequired: item.validation.isRequired
			},
			attributes: {
				isDuration: false
			},
			displayData: {
				description: 'Placeholder desriotion',
				title: 'title',
				image: {
					src: 'src',
					width: 1000,
					alignment: 'LEFT'
				}
			}
		}}
	/>
{/if}
