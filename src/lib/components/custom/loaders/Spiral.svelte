<script lang="ts">
	import { config } from '$lib';

	$: color = $config.mode === 'dark' ? 'white' : 'black';
</script>

<l-spiral size="40" speed="0.9" {color}></l-spiral>
