<script lang="ts">
	import Codeblock from '$lib/docs/components/Codeblock.svelte';
	import { ArrowLeftIcon, ArrowRightIcon } from 'svelte-feather-icons';
	import { createTabs, melt } from '@melt-ui/svelte';
	import actionUsageCode from './action-usage.txt?raw';

	const {
		elements: { root, list, content, trigger },
		states: { value }
	} = createTabs({
		defaultValue: 'npm'
	});
</script>

<p class="opacity-50">Overview</p>
<h1 class="h1 mt-4" id="getting-started">Getting Started</h1>
<p class="mt-4">To get started install Action Archive with your package manager of choice:</p>

<div class="mt-4" use:melt={$root}>
	<div use:melt={$list} class="flex gap-2">
		{#each ['npm', 'pnpm', 'yarn', 'bun'] as pm}
			<button class="btn" class:!bg-neutral-500={$value !== pm} use:melt={$trigger(pm)}>{pm}</button
			>
		{/each}
	</div>
	<div class="mt-4">
		{#each ['npm', 'pnpm', 'yarn', 'bun'] as pm}
			<div use:melt={$content(pm)}>
				<Codeblock class="p-3 rounded-md" code="{pm} add action-archive" />
			</div>
		{/each}
	</div>
</div>

<h2 class="h2 mt-12" id="usage">Usage</h2>
<p class="mt-4">
	Action Archive always exports actions compatible with Svelte's action syntax. This means you can
	use any of the actions provided by Action Archive like this:
</p>
<Codeblock class="mt-4" code={actionUsageCode} language="xml" />

<div class="flex justify-between mt-36">
	<a class="btn bg-neutral-500" href="/overview/introduction"
		><ArrowLeftIcon class="inline" />Introduction</a
	>
	<a class="btn bg-neutral-500" href="/actions">Actions<ArrowRightIcon class="inline" /></a>
</div>
