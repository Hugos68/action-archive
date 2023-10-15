<script lang="ts">
	import { intersect } from '$lib';

	let intersecting = false;
	let root: HTMLElement;
</script>

<div class="px-8 max-h-72 border-2 border-neutral-500 w-full overflow-auto" bind:this={root}>
	<div class="sticky top-1/2 -translate-y-1/2 w-1/2 flex justify-center items-center">
		<p class="p lg:text-lg leading-1/2 font-bold text-center">Intersecting: {intersecting}</p>
	</div>

	<div class="h-screen ml-auto w-1/2 flex justify-center items-center">
		<div
			use:intersect={{ root }}
			on:intersect_enter={() => (intersecting = true)}
			on:intersect_exit={() => (intersecting = false)}
			class="bg-neutral-50 h-16 lg:h-24 w-24 lg:w-36 rounded-md flex justify-center items-center"
		/>
	</div>
</div>
