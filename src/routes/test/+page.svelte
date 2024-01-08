<script>
	import { click_outside } from '$lib';

	let show = false;
</script>

<button on:click={() => (show = !show)}>Toggle</button>

{#if show}
	<div use:click_outside on:aa_click_outside={() => (show = false)}>test</div>
{/if}
