<script lang="ts">
	import { click_outside } from '$lib/index.js';
	import { fade } from 'svelte/transition';

	let clickedOutside = false;
	let timer: ReturnType<typeof setTimeout>;

	function clickOutsideHandler() {
		clickedOutside = true;
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => (clickedOutside = false), 1000);
	}
</script>

<div class="py-32 px-8 flex justify-center items-center">
	<div
		class="bg-zinc-50 h-24 w-36 flex justify-center items-center rounded-md"
		use:click_outside
		on:aa_click_outside={clickOutsideHandler}
	>
		{#if clickedOutside}
			<p
				class="text-center select-none font-bold text-zinc-950"
				transition:fade={{ duration: 150 }}
			>
				Clicked outside!
			</p>
		{/if}
	</div>
</div>
