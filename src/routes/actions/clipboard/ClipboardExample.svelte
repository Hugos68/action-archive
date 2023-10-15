<script lang="ts">
	import { clipboard } from '$lib';

	let buttonText = 'Copy';
	let value: string;

	function copyHandler() {
		buttonText = 'Copied!';
		setTimeout(() => {
			buttonText = 'Copy';
		}, 2000);
	}
</script>

<div class="py-32 px-8 flex justify-center items-center gap-4">
	<input class="input max-w-xs" bind:value />

	<button class="btn" use:clipboard={{ value }} on:aa_copy={copyHandler}>{buttonText}</button>
</div>
