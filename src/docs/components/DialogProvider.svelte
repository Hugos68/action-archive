<script lang="ts">
	import { createDialog, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { dialogStore, type Dialog } from '$docs/stores/dialog-store';
	import { setContext } from 'svelte';

	export let dialog: Dialog;

	const {
		elements: { overlay, portalled, content },
		states: { open }
	} = createDialog({
		...dialog.options,
		open: dialog.open,
		onOpenChange: ({ curr, next }) => {
			if (curr && !next) dialogStore.closeLatest();
			return next;
		}
	});

	setContext('dialog', dialog);
</script>

<slot />

<div use:melt={$portalled}>
	{#if $open}
		<div
			use:melt={$overlay}
			class="fixed inset-0 z-50 bg-black/50"
			in:fade|global={{ easing: cubicOut }}
		/>
		<div class="z-[100]" use:melt={$content}>
			<svelte:component this={dialog.component} {...dialog.props} />
		</div>
	{/if}
</div>
