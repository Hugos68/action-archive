<script lang="ts">
	import { mask } from 'action-archive';

	let value: string = 'money';
</script>
	<!-- svelte-ignore a11y-label-has-associated-control -->

<div class="py-32 px-8 flex flex-col gap-4 justify-center items-center">
	<label class="flex flex-col">
		Mask: 'money'
	</label>
	<label class="flex flex-col">
		Money mask:
		<input class="input max-w-xs" value={0.00} placeholder="0.00" use:mask={{ mask: value }} />
	</label>
</div>
