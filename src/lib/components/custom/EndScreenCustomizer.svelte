<script lang="ts">
	import Input from '../shadcn/ui/input/input.svelte';
	import { config } from '$lib';
</script>

<div class="flex flex-col space-y-4 md:space-y-6">
	<div class="text-xs text-muted-foreground">
		Leave a nice message for the people that filled out the survey
	</div>

	<div class="w-full px-4">
		<Input bind:value={$config.endText} />
	</div>
</div>
