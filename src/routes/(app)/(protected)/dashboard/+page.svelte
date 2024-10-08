<script lang="ts">
	import Button from '$lib/components/shadcn/ui/button/button.svelte';
	import { signOut } from '@auth/sveltekit/client';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	console.log(data);
</script>

{#each data.forms as form}
	<h1>{form.value}</h1>
{/each}

<Button on:click={() => signOut()} class="mb-4">SignOut</Button>
