<script lang="ts">
	import Input from '../shadcn/ui/input/input.svelte';

	let loacelTestValue = 'Leave a nice message for the people that filled out the survey';
</script>

<div class="flex flex-col space-y-4 md:space-y-6">
	<div class="text-xs text-muted-foreground">
		Leave a nice message for the people that filled out the survey
	</div>

	<div class="w-full px-4">
		<Input bind:value={loacelTestValue} />
	</div>
</div>
