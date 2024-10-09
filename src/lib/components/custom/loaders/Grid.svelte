<script lang="ts">
	import { formStyleStore } from '$lib/form/stores';
	$: color = $formStyleStore.mode === 'dark' ? 'white' : 'black';
</script>

<l-grid size="60" speed="1.5" {color}></l-grid>
