<script lang="ts">
	import { Calendar } from '$lib/components/ui/calendar';
	import CalendarIcon from 'lucide-svelte/icons/calendar';
	import { type DateValue, DateFormatter, getLocalTimeZone } from '@internationalized/date';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Button } from '../ui/button';
	import { cn } from '$lib/utils';
	import { handleFormValueChange } from '$lib/google-forms/store';
	import { DAY_SUFFIX, MONTH_SUFFIX, YEAR_SUFFIX } from '$lib/google-forms/constants';
	import TimeInput from './TimeInput.svelte';

	export let description: string | null = null;
	export let includeYear: boolean = false;
	export let includeTime: boolean = false;
	export let submitId: string;

	const df = new DateFormatter('en-US', {
		dateStyle: 'short'
	});

	let dateValue: DateValue | undefined = undefined;

	$: {
		const DD = {
			suffix: DAY_SUFFIX,
			value: dateValue?.day
		};

		const MM = {
			suffix: MONTH_SUFFIX,
			value: dateValue?.month
		};

		const entries = [DD, MM];

		if (includeYear) {
			entries.push({
				suffix: YEAR_SUFFIX,
				value: dateValue?.year
			});
		}

		entries.forEach((entry) => {
			handleFormValueChange(entry.value, submitId + entry.suffix);
		});
	}
</script>

{#if description}
	<p class="text-sm text-gray-500">{description}</p>
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

{#if includeTime}
	<TimeInput {submitId} isDurationInput={false} />
{/if}
