<script lang="ts">
	import { long_press } from 'action-archive';

	let pressedLong = false;
	let timer: ReturnType<typeof setTimeout>;

	function longPressHandler() {
		pressedLong = true;
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => (pressedLong = false), 1000);
	}
</script>

<div class="px-8 py-32 flex justify-center items-center">
	<button
		use:long_press={{ duration: 1000 }}
		on:aa_long_press={longPressHandler}
		class="btn btn-filled">{pressedLong ? 'Long Press!' : 'Press'}</button
	>
</div>
