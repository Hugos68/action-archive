<script lang="ts">
	import { portal } from 'action-archive';

	let target = '#container1';
</script>

<div
	class="bg-zinc-50 w-full h-full flex justify-center items-center rounded-md p-2"
	use:portal={{ target }}
>
	<p class="p text-center select-none font-bold text-zinc-950">Portal me!</p>
</div>

<div class="flex flex-col gap-12 py-32 px-8">
	<div class="flex gap-4 justify-evenly">
		<button class="btn" on:click={() => (target = '#container1')}>Portal to container 1</button>
		<button class="btn" on:click={() => (target = '#container2')}>Portal to container 2</button>
	</div>

	<div class="flex gap-8 justify-evenly">
		<div class="flex-1">
			<div
				class="h-full p-2 rounded-md flex justify-center items-center border-2 border-zinc-50"
				id="container1"
			/>
			<p class="p text-center font-semibold">#container1</p>
		</div>
		<div class="flex-1">
			<div
				class="h-full p-2 rounded-md flex justify-center items-center border-2 border-zinc-50"
				id="container2"
			/>
			<p class="p text-center font-semibold">#container2</p>
		</div>
	</div>
</div>
