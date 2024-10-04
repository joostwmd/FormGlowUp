<script lang="ts">
	import * as Tabs from '$lib/components/shadcn/ui/tabs/index.js';
	import * as Card from '$lib/components/shadcn/ui/card/index.js';
	import LoaderCircleIcon from 'lucide-svelte/icons/loader-circle';
	import HomeIcon from 'lucide-svelte/icons/house';
	import PaintbrushIcon from 'lucide-svelte/icons/paintbrush';
	import CheckCircleIcon from 'lucide-svelte/icons/circle-check';
	import ThemeCustomizer from './ThemeCustomizer.svelte';
	import CheckoutScreenCustomizer from './CheckoutScreenCustomizer.svelte';
	import LoadingScreenCustomizer from './LoadingScreenCustomizer.svelte';
</script>

<Tabs.Root value="welcome" class="w-[400px]">
	<Tabs.List class="grid w-full grid-cols-3">
		<Tabs.Trigger value="welcome">
			<LoaderCircleIcon class="mr-2 h-4 w-4" />
			Loading
		</Tabs.Trigger>
		<Tabs.Trigger value="customization">
			<PaintbrushIcon class="mr-2 h-4 w-4" />
			Style
		</Tabs.Trigger>
		<Tabs.Trigger value="end">
			<CheckCircleIcon class="mr-2 h-4 w-4" />
			End
		</Tabs.Trigger>
	</Tabs.List>

	<Tabs.Content value="welcome">
		<Card.Root>
			<Card.Header>
				<Card.Title>
					<div class="flex">
						<LoaderCircleIcon class="mr-2 h-4 w-4" />
						Loading
					</div>
				</Card.Title>
				<Card.Description>Choose the loading animation you like the most</Card.Description>
			</Card.Header>
			<Card.Content>
				<LoadingScreenCustomizer />
			</Card.Content>
			<!-- <Card.Footer>
				<Button>Next</Button>
			</Card.Footer> -->
		</Card.Root>
	</Tabs.Content>

	<Tabs.Content value="customization">
		<Card.Root>
			<Card.Header>
				<Card.Title>
					<div class="flex">
						<PaintbrushIcon class="mr-2 h-4 w-4" />
						Customization
					</div>
				</Card.Title>
				<Card.Description>Style the form to your liking here.</Card.Description>
			</Card.Header>
			<Card.Content>
				<ThemeCustomizer />
			</Card.Content>
			<!-- <Card.Footer>
				<Button>Save changes</Button>
			</Card.Footer> -->
		</Card.Root>
	</Tabs.Content>

	<Tabs.Content value="end">
		<Card.Root>
			<Card.Header>
				<Card.Title>
					<div class="flex">
						<CheckCircleIcon class="mr-2 h-4 w-4" />
						End
					</div>
				</Card.Title>
				<Card.Description
					>Leave a nive thank you message for the people that filled out your form</Card.Description
				>
			</Card.Header>
			<Card.Content>
				<CheckoutScreenCustomizer />
			</Card.Content>
			<!-- <Card.Footer>
				<Button>Finish</Button>
			</Card.Footer> -->
		</Card.Root>
	</Tabs.Content>
</Tabs.Root>
