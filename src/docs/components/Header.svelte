<script lang="ts">
	import { dialogStore } from '$docs/stores/dialog-store';
	import { GithubIcon, SearchIcon, SidebarIcon } from 'svelte-feather-icons';
	import Drawer from '$docs/components/Drawer.svelte';
	import DocSearch from './DocSearch.svelte';
	import platform from 'platform';

	$: platformIsMac = platform.os?.family?.startsWith('Mac');

	function keydownHandler(event: KeyboardEvent) {
		if (event.key !== 'k' || !(platformIsMac ? event.metaKey : event.ctrlKey)) return;
		event.preventDefault();
		if ($dialogStore.at(-1)?.component === DocSearch) dialogStore.closeLatest();
		else dialogStore.trigger({ component: DocSearch });
	}
</script>

<svelte:window on:keydown={keydownHandler} />

<header
	class="sticky top-0 py-4 backdrop-blur-sm bg-zinc-800/75 px-[clamp(1rem,10vw,25rem)] h-[var(--header-height)] flex justify-between items-center z-50"
>
	<nav class="flex items-center gap-4">
		<button class="lg:hidden" on:click={() => dialogStore.trigger({ component: Drawer })}>
			<SidebarIcon />
		</button>
		<a href="/" class="font-bold text-lg leading-5">Action Archive</a>
	</nav>

	<nav class="flex items-center gap-4">
		<button
			class="btn flex items-center gap-2"
			on:click={() => dialogStore.trigger({ component: DocSearch })}
		>
			<SearchIcon class="inline" size="20" />
			<p class="hidden md:inline">{platformIsMac ? 'Cmd + K' : 'Ctrl + K'}</p>
		</button>
		<a title="Github" href="https://github.com/Hugos68/action-archive" target="_blank"
			><GithubIcon /></a
		>
	</nav>
</header>
