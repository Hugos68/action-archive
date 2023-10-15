<script lang="ts">
	import '../app.css';
	import { createDialog, createTableOfContents, melt } from '@melt-ui/svelte';
	import TableOfContents from '../lib/docs/components/TableOfContents.svelte';
	import { GithubIcon, SidebarIcon, XIcon } from 'svelte-feather-icons';
	import Navigation from '$lib/docs/components/Sidebar.svelte';
	import { setContext } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	const {
		states: { headingsTree, activeHeadingIdxs }
	} = createTableOfContents({
		selector: '[data-toc-container]',
		activeType: 'all'
	});

	const drawer = createDialog();
	const {
		elements: { trigger, overlay, content, close, portalled },
		states: { open }
	} = drawer;
	setContext('drawer', drawer);
</script>

<header
	class="sticky top-0 py-4 backdrop-blur-sm bg-zinc-800/75 px-[clamp(1rem,10vw,25rem)] h-[var(--header-height)] flex justify-between items-center z-50"
>
	<nav class="flex items-center gap-2">
		<button class="lg:hidden" use:melt={$trigger}>
			<SidebarIcon />
		</button>
		<a href="/" class="font-bold text-lg">Action Archive</a>
	</nav>
	<nav class="flex gap-4">
		<a title="Github" href="https://github.com/Hugos68/action-archive" target="_blank"
			><GithubIcon /></a
		>
	</nav>
</header>
<main class="flex px-[clamp(1rem,10vw,25rem)]">
	<Navigation
		class="hidden sticky top-[var(--header-height)] h-full overflow-auto w-1/5 lg:flex flex-col py-8"
	/>
	<div class="lg:w-3/5 overflow-y-auto lg:px-4 py-8" data-toc-container>
		<slot />
	</div>
	<aside
		class="hidden sticky top-[var(--header-height)] h-full overflow-auto w-1/5 lg:flex flex-col py-8"
	>
		<p class="p text-lg font-semibold">On this page:</p>
		<nav class="ml-2 mt-2 flex flex-col">
			{#key $headingsTree && $activeHeadingIdxs}
				<TableOfContents headingsTree={$headingsTree} activeHeadingIdxs={$activeHeadingIdxs} />
			{/key}
		</nav>
	</aside>
</main>
<footer class="px-[clamp(1rem,10vw,25rem)] py-32 flex justify-center items-center">
	<p>
		<GithubIcon class="inline" /> Found an issue?
		<a
			class="underline hover:opacity-90 text-end"
			href="https://github.com/Hugos68/action-archive/issues/new"
			target="_blank"
		>
			Report it here.
		</a>
	</p>
</footer>

<div use:melt={$portalled}>
	{#if $open}
		<div transition:fade use:melt={$overlay} class="fixed inset-0 z-50 bg-black/50" />
		<div
			transition:fly={{ x: -200 }}
			use:melt={$content}
			class="fixed left-0 top-0 z-50 h-screen bg-zinc-900
			  shadow-lg px-[clamp(1rem,10vw,25rem)]"
		>
			<header class="h-[var(--header-height)] py-4 flex justify-end">
				<button use:melt={$close}>
					<XIcon />
				</button>
			</header>
			<Navigation class="px-[clamp(1rem,10vw,25rem)] py-8" fromSideBar />
		</div>
	{/if}
</div>
