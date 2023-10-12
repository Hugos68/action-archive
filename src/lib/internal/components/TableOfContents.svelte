<script lang="ts">
	import TableOfContents from './TableOfContents.svelte';
	import type { Writable } from 'svelte/store';
	import type { TableOfContentsStates } from '@melt-ui/svelte';

	type UnwrapStore<T> = T extends Writable<infer Store> ? Store : never;
	export let headingsTree: UnwrapStore<TableOfContentsStates['headingsTree']>;
	export let activeHeadingIdxs: UnwrapStore<TableOfContentsStates['activeHeadingIdxs']>;
	export let depth = 1;
</script>

{#each headingsTree as { title, index, node, children }}
	<a href="#{node.id}" class:underline={activeHeadingIdxs.includes(index)}>{title}</a>
	{#if children}
		<TableOfContents headingsTree={children} {activeHeadingIdxs} depth={depth++} />
	{/if}
{/each}
