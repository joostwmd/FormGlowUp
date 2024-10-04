<script lang="ts">
	import { config } from '$lib';

	$: color = $config.mode === 'dark' ? 'white' : 'black';
</script>

<l-grid size="60" speed="1.5" {color}></l-grid>
