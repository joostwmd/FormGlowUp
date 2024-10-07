<script lang="ts">
	import Nav from '$lib/components/custom/Nav.svelte';
	import '../app.css';
</script>

<Nav />
<div class="h-screen w-screen bg-muted/40">
	<slot />
</div>
