<script lang="ts">
	import { dialogStore } from '$docs/stores/dialog-store';
	import { GithubIcon, MoonIcon, SearchIcon, SidebarIcon, SunIcon } from 'svelte-feather-icons';
	import Drawer from '$docs/components/Drawer.svelte';
	import DocSearch from './DocSearch.svelte';

	function keydownHandler(event: KeyboardEvent) {
		if (event.key !== 'k' || !(event.ctrlKey || event.metaKey)) return;
		event.preventDefault();
		if ($dialogStore.at(-1)?.component === DocSearch) dialogStore.closeLatest();
		else dialogStore.trigger({ component: DocSearch });
	}

	function setTheme(theme: 'dark' | 'light') {
		const htmlEl = document.documentElement;
		htmlEl.classList.remove('light');
		htmlEl.classList.remove('dark');
		htmlEl.classList.add(theme);
		localStorage.setItem('theme', theme);
	}
</script>

<svelte:window on:keydown={keydownHandler} />

<header
	class="sticky top-0 py-4 backdrop-blur-sm bg-zinc-100/75 dark:bg-zinc-900/75 px-[clamp(1rem,10vw,25rem)] h-[var(--header-height)] flex justify-between items-center z-50"
>
	<nav class="flex items-center gap-4">
		<button class="lg:hidden" on:click={() => dialogStore.trigger({ component: Drawer })}>
			<SidebarIcon />
		</button>
		<a href="/" class="font-bold text-lg leading-5 hidden md:inline">Action Archive</a>
	</nav>

	<nav class="flex items-center md:gap-1">
		<button
			class="px-1.5 py-1.5 md:px-3 md:py-1.5"
			on:click={() => dialogStore.trigger({ component: DocSearch })}
		>
			<SearchIcon />
		</button>
		<button
			class="px-1.5 py-1.5 md:px-3 md:py-1.5"
			on:click={() => setTheme(localStorage.getItem('theme') === 'dark' ? 'light' : 'dark')}
		>
			<SunIcon class="hidden dark:block" />
			<MoonIcon class="dark:hidden" />
		</button>
		<span class="h-6 w-0.5 bg-zinc-950/50 dark:bg-zinc-50/50 mx-4" />
		<a
			class="px-1.5 py-1.5 md:px-3 md:py-1.5"
			title="Github"
			href="https://github.com/Hugos68/action-archive"
			target="_blank"><GithubIcon /></a
		>
	</nav>
</header>
