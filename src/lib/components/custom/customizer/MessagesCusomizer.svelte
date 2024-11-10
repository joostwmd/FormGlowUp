<script lang="ts">
	import { localFormStore } from '$lib/form/stores';
	import Input from '$lib/components/shadcn/ui/input/input.svelte';
	import { Label } from '$lib/components/shadcn/ui/label';
</script>

<div class="flex flex-col space-y-4 md:space-y-6">
	<div class="text-xs text-muted-foreground">
		Leave nice messages for the people that filled out the survey
	</div>

	<div class="w-full space-y-4">
		<div>
			<Label class="text-lg">Welcome Screen</Label>

			<div class="space-y-2 px-2">
				<div class="space-y-1">
					<Label class="text-sm">Heading</Label>
					<Input bind:value={$localFormStore.pages.welcome.heading} />
				</div>

				<div class="space-y-1">
					<Label class="text-sm">Message</Label>
					<Input bind:value={$localFormStore.pages.welcome.message} />
				</div>
			</div>
		</div>

		<div>
			<Label class="text-lg">Goodbye Screen</Label>

			<div class="space-y-2 px-2">
				<div class="space-y-1">
					<Label class="text-sm">Heading</Label>
					<Input bind:value={$localFormStore.pages.goodbye.heading} />
				</div>

				<div class="space-y-1">
					<Label class="text-sm">Message</Label>
					<Input bind:value={$localFormStore.pages.goodbye.message} />
				</div>
			</div>
		</div>
	</div>
</div>
