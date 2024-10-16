<script lang="ts">
	import Calendar from '$lib/components/shadcn/ui/calendar/calendar.svelte';
	import CalendarIcon from 'lucide-svelte/icons/calendar';
	import { type DateValue, DateFormatter, getLocalTimeZone } from '@internationalized/date';
	import * as Popover from '$lib/components/shadcn/ui/popover/index.js';
	import Button from '$lib/components/shadcn/ui/button/button.svelte';
	import { cn } from '$lib/components/shadcn/utils';
	import { DAY_SUFFIX, MONTH_SUFFIX, YEAR_SUFFIX } from '$lib/form/constants';
	import {
		dateProxy,
		formFieldProxy,
		type SuperForm,
		type FormPathLeaves
	} from 'sveltekit-superforms';

	type T = Record<string, unknown>;

	export let includeYear: boolean = false;
	export let includeTime: boolean = false;
	export let submitId: string;
	export let form: SuperForm<T>;
	export let field: FormPathLeaves<T, Date>;

	const df = new DateFormatter('en-US', {
		dateStyle: 'short'
	});

	let dateValue: DateValue | undefined = undefined;

	$: value = dateProxy(form, field, { format: 'date', empty: 'null' });
	$: console.log('value', value);
</script>

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
		<Calendar bind:value={dateValue} initialFocus {...formAttributes} />
	</Popover.Content>
</Popover.Root>

<!-- {#if includeTime}
	<TimeInput {handleFormValueChange} {submitId} isDurationInput={false} />
{/if} -->
