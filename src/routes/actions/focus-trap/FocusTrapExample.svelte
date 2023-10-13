<script lang="ts">
	import { focus_trap } from '$lib';
</script>

<div>
	<button class="btn">Item</button>
	<button class="btn">Item</button>
	<span class="py-4 border-y-2 border-neutral-500" use:focus_trap={{ initialFocus: false }}>
		<button class="btn">Item</button>
		<button class="btn">Item</button>
		<button class="btn">Item</button>
		<button class="btn">Item</button>
	</span>
	<button class="btn">Item</button>
	<button class="btn">Item</button>
</div>
