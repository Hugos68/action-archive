<script lang="ts">
	import { createTableOfContents } from '@melt-ui/svelte';
	import TableOfContents from '$docs/components/TableOfContents.svelte';
	import { GithubIcon } from 'svelte-feather-icons';
	import Navigation from '$docs/components/Sidebar.svelte';
	const {
		states: { headingsTree, activeHeadingIdxs }
	} = createTableOfContents({
		selector: '[data-toc-container]',
		activeType: 'all'
	});
</script>

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
