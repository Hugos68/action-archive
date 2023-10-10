<script lang="ts">
	import Codeblock from '$lib/internal/components/Codeblock.svelte';
	import { ArrowLeftIcon, ArrowRightIcon } from 'svelte-feather-icons';
	import { createTabs, melt } from '@melt-ui/svelte';
	import example from '$lib/internal/snippets/action-example.txt?raw';

	const {
		elements: { root, list, content, trigger },
		states: { value }
	} = createTabs({
		defaultValue: 'npm'
	});
</script>

<p class="opacity-50">Overview</p>
<h1 class="text-4xl mt-4">Getting Started</h1>
<p class="mt-4">To get started install Action Archive with your package manager of choice:</p>

<div class="mt-4" use:melt={$root}>
	<div use:melt={$list} class="flex gap-2">
		{#each ['npm', 'pnpm', 'yarn', 'bun'] as pm}
			<button class="bg-stone-400 text-gray-700 px-2 py-1 rounded-md" class:!bg-stone-300={$value === pm} use:melt={$trigger(pm)}
				>{pm}</button
			>
		{/each}
	</div>
	<div class="mt-4">
		{#each ['npm', 'pnpm', 'yarn', 'bun'] as pm}
			<span use:melt={$content(pm)}>
				<Codeblock class="p-3 rounded-md" code="{pm} i action-archive" />
			</span>
		{/each}
	</div>
</div>

<h2 class="text-2xl mt-12">Usage</h2>
<p class="mt-4">
	Action Archive always exports actions compatible with Svelte's action syntax. This means you can use any of the actions provided by Action Archive like this:
	<Codeblock class="p-3 rounded-md" code={example} options={{ language: 'svelte'}} />
</p>

<h2 class="text-2xl mt-12">Inspiration</h2>
<p class="mt-4">
	I want to credit both Skeleton UI and Melt UI as they inspired some actions.
	<span class="block">
		- <a class="underline font-bold" href="https://www.skeleton.dev/">Skeleton UI</a>
	</span>
	<span class="block">
		- <a class="underline font-bold" href="https://www.melt-ui.com/">Melt UI</a> (This website is built
		with it!)
	</span>
</p>

<div class="flex justify-between mt-12">
	<a class="hover:underline" href="/overview/introduction"
		><ArrowLeftIcon class="inline" />Introduction</a
	>
	<a class="hover:underline" href="/actions">Check out actions<ArrowRightIcon class="inline" /></a>
</div>
