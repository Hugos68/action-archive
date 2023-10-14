<script lang="ts">
	import { intersect } from '$lib';

	let intersecting = false;
	let scrollableContainer: HTMLElement;

	$: if (scrollableContainer)
		scrollableContainer.scrollTop =
			scrollableContainer.scrollHeight / 2 - scrollableContainer.clientHeight / 2;
</script>

<div
	class="max-h-96 overflow-auto px-8 border-2 border-neutral-500 w-full"
	bind:this={scrollableContainer}
>
	<p class="sticky top-1/2 font-bold">
		{intersecting ? 'Intersecting!' : 'Not intersecting!'}
	</p>
	<div class="h-screen flex justify-center items-center">
		<div
			use:intersect
			on:intersect_enter={() => (intersecting = true)}
			on:intersect_exit={() => (intersecting = false)}
			class="bg-neutral-50 h-24 w-36 rounded-md flex justify-center items-center"
		>
			<p class="text-center select-none font-bold text-neutral-950">Intersect Me</p>
		</div>
	</div>
</div>
