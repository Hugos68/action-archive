<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { createTableOfContents } from '@melt-ui/svelte';
	import TableOfContents from '../lib/internal/components/TableOfContents.svelte';
	import { GithubIcon } from 'svelte-feather-icons';

	const {
		states: { headingsTree }
	} = createTableOfContents({
		selector: '[data-toc-container]',
		activeType: 'highest'
	});

	const overview = [
		{
			href: '/overview/introduction',
			title: 'Introduction'
		},
		{
			href: '/overview/getting-started',
			title: 'Getting Started'
		}
	];

	const actions = [
		{
			href: '/actions/button',
			title: 'Button'
		},
		{
			href: '/actions/click-outside',
			title: 'Click Outside'
		},
		{
			href: '/actions/focus-trap',
			title: 'Focus Trap'
		},
		{
			href: '/actions/portal',
			title: 'Portal'
		},
		{
			href: '/actions/intersect',
			title: 'Intersect'
		},
		{
			href: '/actions/resize',
			title: 'Resize'
		}
	];
</script>

<header
	class="sticky top-0 p-4 bg-neutral-900 px-[clamp(1rem,10vw,25rem)] h-[var(--header-height)] flex justify-between items-center z-50"
>
	<nav>
		<a href="/" class="font-bold text-lg">Action Archive</a>
	</nav>
	<nav class="flex gap-4">
		<a title="Github" href="https://github.com/Hugos68/action-archive" target="_blank"
			><GithubIcon class="inline" /></a
		>
	</nav>
</header>
<main class="flex px-[clamp(1rem,10vw,25rem)]">
	<div
		class="hidden sticky top-[var(--header-height)] h-full overflow-auto w-1/5 lg:flex flex-col py-[var(--vertical-padding)]"
	>
		<aside>
			<p class="text-lg font-semibold">Overview</p>
			<nav class="flex flex-col gap-1 mt-2">
				{#each overview as { href, title }}
					<a {href} class="ml-2 hover:opacity-90" class:underline={$page.url.pathname === href}
						>{title}</a
					>
				{/each}
			</nav>
			<p class="text-lg font-semibold mt-6">Actions</p>
			<nav class="flex flex-col gap-1 mt-2">
				{#each actions as { href, title }}
					<a {href} class="ml-2 hover:opacity-90" class:underline={$page.url.pathname === href}
						>{title}</a
					>
				{/each}
			</nav>
		</aside>
	</div>
	<div class="lg:w-3/5 overflow-y-auto lg:px-4 py-[var(--vertical-padding)]" data-toc-container>
		<slot />
	</div>
	<aside
		class="hidden sticky top-[var(--header-height)] h-full overflow-auto w-1/5 lg:flex flex-col py-[var(--vertical-padding)]"
	>
		<p class="text-lg font-semibold">On this page:</p>
		<nav class="ml-2 mt-2 flex flex-col">
			{#key $headingsTree}
				<TableOfContents headingsTree={$headingsTree} />
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
