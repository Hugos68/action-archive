<script lang="ts">
	import DialogProvider from './DialogProvider.svelte';
	import { dialogStore } from '$docs/stores/dialog-store';
</script>

{#each $dialogStore as dialog}
	<DialogProvider {dialog} />
{/each}
