<script lang="ts">
	import { styleConfig } from '$lib';
	$: color = $styleConfig.mode === 'dark' ? 'white' : 'black';
</script>

<l-spiral size="40" speed="0.9" {color}></l-spiral>
