<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { createTableOfContents } from '@melt-ui/svelte';
	import TableOfContents from '../lib/internal/components/TableOfContents.svelte';
	import { GithubIcon } from 'svelte-feather-icons';

	const {
		states: { activeHeadingIdxs, headingsTree }
	} = createTableOfContents({
		selector: '[data-toc-container]',
		activeType: 'highest'
	});
</script>

<header
	class="sticky top-0 p-4 bg-stone-800 px-[clamp(1rem,10vw,25rem)] h-[var(--header-height)] flex justify-between items-center z-50"
>
	<nav>
		<a href="/" class="font-semibold text-lg">Action Archive</a>
	</nav>
	<nav class="flex gap-4">
		<a href="https://github.com/Hugos68/action-archive" target="_blank"
			><GithubIcon class="inline" /> Github</a
		>
		<a href="https://www.npmjs.com/package/action-archive" target="_blank">NPM</a>
	</nav>
</header>
<main class="flex px-[clamp(1rem,10vw,25rem)]">
	<aside
		class="hidden sticky top-[var(--header-height)] h-full overflow-auto w-1/5 lg:flex flex-col py-[var(--vertical-padding)]"
	>
		<p class="text-lg font-semibold">Overview</p>
		<span class="flex flex-col gap-1 mt-2">
			<a
				class="ml-2 hover:opacity-90"
				href="/overview/introduction"
				class:underline={$page.url.pathname === '/overview/introduction'}>Introduction</a
			>
			<a
				class="ml-2 hover:opacity-90"
				href="/overview/getting-started"
				class:underline={$page.url.pathname === '/overview/getting-started'}>Getting started</a
			>
		</span>
		<p class="text-lg font-semibold mt-6">Actions</p>
		<span class="flex flex-col gap-1 mt-2">
			<a
				href="/actions/button"
				class="ml-2 hover:opacity-90"
				class:underline={$page.url.pathname === '/actions/button'}>Button</a
			>
			<a
				href="/actions/click-outside"
				class="ml-2 hover:opacity-90"
				class:underline={$page.url.pathname === '/actions/click-outside'}>Click Outside</a
			>
			<a
				href="/actions/focus-trap"
				class="ml-2 hover:opacity-90"
				class:underline={$page.url.pathname === '/actions/focus-trap'}>Focus Trap</a
			>
			<a
				href="/actions/portal"
				class="ml-2 hover:opacity-90"
				class:underline={$page.url.pathname === '/actions/portal'}>Portal</a
			>
		</span>
	</aside>
	<div class="lg:w-3/5 overflow-y-auto lg:px-4 py-[var(--vertical-padding)]" data-toc-container>
		<slot />
	</div>
	<aside
		class="hidden sticky top-[var(--header-height)] h-full overflow-auto w-1/5 lg:flex flex-col py-[var(--vertical-padding)]"
	>
		<p class="text-lg font-semibold">On this page:</p>
		<nav class="ml-2 mt-2 flex flex-col">
			{#key $activeHeadingIdxs && $headingsTree}
				<TableOfContents headingsTree={$headingsTree} activeHeadingIdxs={$activeHeadingIdxs} />
			{/key}
		</nav>
	</aside>
</main>
<footer class="px-[clamp(1rem,10vw,25rem)] py-16">
	<nav>
		<p>
			<GithubIcon class="inline" /> Found an issue?
			<a
				class="underline hover:opacity-90"
				href="https://github.com/Hugos68/action-archive/issues/new"
				target="_blank"
			>
				Report it here.
			</a>
		</p>
	</nav>
</footer>
