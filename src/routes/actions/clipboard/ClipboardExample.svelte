<script lang="ts">
	import { clipboard } from '$lib';

	let buttonText = 'Copy';
	let value: string;

	function clipboardCopyHandler() {
		buttonText = 'Copied!';
		setTimeout(() => {
			buttonText = 'Copy';
		}, 2000);
	}
</script>

<div class="py-32 px-4 flex gap-4">
	<input class="input" bind:value />

	<button class="btn" use:clipboard={{ value }} on:clipboard_copy={clipboardCopyHandler}
		>{buttonText}</button
	>
</div>
