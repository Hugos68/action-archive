<script lang="ts">
	import { dialogStore } from '$docs/stores/dialog-store';
	import { XIcon } from 'svelte-feather-icons';
	import Sidebar from '$docs/components/Sidebar.svelte';
	import { fly } from 'svelte/transition';
</script>

<div
	class="absolute top-0 left-0 h-screen bg-zinc-900
shadow-lg px-[clamp(1rem,10vw,25rem)] z-50"
	transition:fly|global={{ x: -200 }}
>
	<header class="h-[var(--header-height)] py-4 flex justify-end">
		<button on:click={dialogStore.closeLatest}>
			<XIcon />
		</button>
	</header>
	<Sidebar class="px-[clamp(1rem,10vw,25rem)] py-8" fromSideBar />
</div>
