<script lang="ts">
	import { focus_trap } from 'action-archive';
</script>

<div class="py-32 px-4 flex justify-center items-center gap-1">
	<button class="btn btn-filled hidden md:inline">Item</button>
	<button class="btn btn-filled">Item</button>
	<span
		class="py-4 border-y-2 border-zinc-500flex justify-center items-center gap-1"
		use:focus_trap
	>
		<button class="btn btn-filled">Item</button>
		<button class="btn btn-filled hidden md:inline">Item</button>
		<button class="btn btn-filled">Item</button>
	</span>
	<button class="btn btn-filled hidden md:inline">Item</button>
	<button class="btn btn-filled">Item</button>
</div>
