<script lang="ts">
	import Codeblock from '$lib/internal/components/Codeblock.svelte';
	import { ArrowLeftIcon, ArrowRightIcon } from 'svelte-feather-icons';
	import { createTabs, melt } from '@melt-ui/svelte';
	import actionUsage from '$lib/internal/snippets/action-usage.txt?raw';

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
			<button
				class="bg-stone-400 text-gray-700 px-2 py-1 rounded-md"
				class:!bg-stone-300={$value === pm}
				use:melt={$trigger(pm)}>{pm}</button
			>
		{/each}
	</div>
	{#each ['npm', 'pnpm', 'yarn', 'bun'] as pm}
		<div class="mt-4" use:melt={$content(pm)}>
			<Codeblock class="p-3 rounded-md" code="{pm} install action-archive" />
		</div>
	{/each}
</div>

<h2 class="text-2xl mt-12">Usage</h2>
<p class="mt-4">
	Action Archive always exports actions compatible with Svelte's action syntax. This means you can
	use any of the actions provided by Action Archive like this:
</p>
<div class="mt-4">
	<Codeblock class="p-3 rounded-md" code={actionUsage} lanuage="xml" />
</div>

<div class="flex justify-between mt-12">
	<a class="hover:underline" href="/overview/introduction"
		><ArrowLeftIcon class="inline" />Introduction</a
	>
	<a class="hover:underline" href="/actions">Actions<ArrowRightIcon class="inline" /></a>
</div>
