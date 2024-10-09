<script lang="ts">
	import { formStyleStore } from '$lib/form/stores';
	$: color = $formStyleStore.mode === 'dark' ? 'white' : 'black';
</script>

<l-spiral size="40" speed="0.9" {color}></l-spiral>
