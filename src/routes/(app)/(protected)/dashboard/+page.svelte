<script lang="ts">
	import Button from '$lib/components/shadcn/ui/button/button.svelte';
	import { signOut } from '@auth/sveltekit/client';
	import type { PageServerData } from './$types';
	import { createForm } from '$lib/firebase/utils';
	import type { LayoutServerData } from '../$types';
	import FormCard from '$lib/components/custom/FormCard.svelte';
	import NewFormCard from '$lib/components/custom/NewFormCard.svelte';

	export let data: LayoutServerData & PageServerData;

	console.log(data);

	const testFormData = {
		googleFormId: 'test google form id',
		formInfo: {
			title: 'test title'
		},
		formItems: 'JSON.stringify(data.forms)'
	};
</script>

<NewFormCard />

{#each data.forms as form}
	<FormCard />
{/each}

<Button on:click={() => signOut()} class="mb-4">SignOut</Button>
