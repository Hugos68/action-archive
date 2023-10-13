<script lang="ts">
	import { portal } from '$lib';

	let target = '#container1';
</script>

<div
	class="bg-neutral-50 h-24 w-36 flex justify-center items-center rounded-md"
	use:portal={{ target }}
>
	<p class="text-center select-none font-bold text-neutral-950">Portal me!</p>
</div>

<div class="flex flex-col gap-12">
	<div class="flex gap-4 justify-evenly">
		<button class="btn" on:click={() => (target = '#container1')}>Portal to container 1</button>
		<button class="btn" on:click={() => (target = '#container2')}>Portal to container 2</button>
		<button class="btn" on:click={() => (target = '#container3')}>Portal to container 3</button>
	</div>

	<div class="flex gap-4 justify-evenly">
		<div>
			<div
				class="h-28 w-40 rounded-md flex justify-center items-center border-2 border-neutral-50"
				id="container1"
			/>
			<p class="text-center font-semibold">#container1</p>
		</div>
		<div>
			<div
				class="h-28 w-40 rounded-md flex justify-center items-center border-2 border-neutral-50"
				id="container2"
			/>
			<p class="text-center font-semibold">#container2</p>
		</div>
		<div>
			<div
				class="h-28 w-40 rounded-md flex justify-center items-center border-2 border-neutral-50"
				id="container3"
			/>
			<p class="text-center font-semibold">#container3</p>
		</div>
	</div>
</div>
