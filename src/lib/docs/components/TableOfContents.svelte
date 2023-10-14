<script lang="ts">
	import TableOfContents from './TableOfContents.svelte';
	import type { Writable } from 'svelte/store';
	import type { TableOfContentsStates } from '@melt-ui/svelte';

	type UnwrapStore<T> = T extends Writable<infer Store> ? Store : never;
	export let headingsTree: UnwrapStore<TableOfContentsStates['headingsTree']>;
	export let activeHeadingIdxs: UnwrapStore<TableOfContentsStates['activeHeadingIdxs']>;
	export let depth = 1;

	const depthMap: Record<number, string> = {
		1: 'ml-0',
		2: 'ml-2',
		3: 'ml-4',
		4: 'ml-6',
		5: 'ml-8',
		6: 'ml-10'
	};
</script>

{#each headingsTree as { title, index, node, children }}
	<a class:underline={activeHeadingIdxs.includes(index)} class={depthMap[depth]} href="#{node.id}"
		>{title}</a
	>
	{#if children}
		<TableOfContents headingsTree={children} {activeHeadingIdxs} depth={depth + 1} />
	{/if}
{/each}
