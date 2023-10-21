<script lang="ts">
	import { resize } from 'action-archive';

	function resizeHandler(event: CustomEvent<{ entry: ResizeObserverEntry }>) {
		const { contentRect } = event.detail.entry;
		width = contentRect.width;
		height = contentRect.height;
	}

	let width: number;
	let height: number;
</script>

<div class="py-32 px-8 flex flex-col gap-4 justify-center items-center">
	<div
		class="bg-zinc-50 h-24 w-36 flex flex-col justify-center items-center rounded-md resize overflow-auto"
		use:resize
		on:aa_resize={resizeHandler}
	>
		<p class="text-center select-none font-bold text-zinc-950">
			Width: {width}
		</p>
		<p class="text-center select-none font-bold text-zinc-950">
			Height: {height}
		</p>
	</div>
</div>
