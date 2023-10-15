<script lang="ts">
	import { mask } from '$lib';

	let value: string = '99/99/9999';
</script>

<div class="py-32 px-8 flex flex-col gap-4 justify-center items-center">
	<label class="flex flex-col">
		Mask:
		<input class="input max-w-xs" bind:value />
	</label>
	<label class="flex flex-col">
		Masked input:
		<input class="input max-w-xs" placeholder={value} use:mask={{ mask: value }} />
	</label>
</div>
