<script lang="ts">
	import { focus_trap } from '$lib';
</script>

<div class="py-32 px-4 flex justify-center items-center gap-1">
	<button class="btn hidden md:inline">Item</button>
	<button class="btn">Item</button>
	<span
		class="py-4 border-y-2 border-zinc-500flex justify-center items-center gap-1"
		use:focus_trap={{ initialFocus: false }}
	>
		<button class="btn">Item</button>
		<button class="btn hidden md:inline">Item</button>
		<button class="btn">Item</button>
	</span>
	<button class="btn hidden md:inline">Item</button>
	<button class="btn">Item</button>
</div>
