<script lang="ts">
	import { formStyleStore } from '$lib/form/stores';
	$: color = $formStyleStore.mode === 'dark' ? 'white' : 'black';
</script>

<l-zoomies size="80" stroke="5" bg-opacity="0.1" speed="1.4" {color}></l-zoomies>
