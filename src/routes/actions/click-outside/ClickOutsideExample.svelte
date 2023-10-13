<script lang="ts">
	import { click_outside } from '$lib';
	import { fade } from 'svelte/transition';

	let clickedOutside = false;
	let timer: ReturnType<typeof setTimeout>;
	function clickOutsideHandler() {
		clickedOutside = true;
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => (clickedOutside = false), 1000);
	}
</script>

<div
	class="bg-neutral-50 h-24 w-36 flex justify-center items-center rounded-md"
	use:click_outside
	on:click_outside={clickOutsideHandler}
>
	{#if clickedOutside}
		<p
			class="text-center select-none font-bold text-neutral-950"
			transition:fade={{ duration: 150 }}
		>
			Clicked outside!
		</p>
	{/if}
</div>
