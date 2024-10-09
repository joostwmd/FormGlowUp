<script lang="ts">
	import { styleConfig } from '$lib';

	$: color = $styleConfig.mode === 'dark' ? 'white' : 'black';
</script>

<l-grid size="60" speed="1.5" {color}></l-grid>
