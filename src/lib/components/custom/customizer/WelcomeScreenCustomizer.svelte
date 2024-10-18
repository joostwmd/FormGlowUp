<script lang="ts">
	import Input from '$lib/components/shadcn/ui/input/input.svelte';
	import { formStore } from '$lib/form/stores';
</script>

<div class="flex flex-col space-y-4 md:space-y-6">
	<div class="text-xs text-muted-foreground">
		Leave a nice message for the people that filled out the survey
	</div>

	<div class="w-full px-4">
		<Input bind:value={$formStore.pages.welcome.message} />
	</div>
</div>
