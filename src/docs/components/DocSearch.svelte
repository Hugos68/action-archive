<script lang="ts">
	import Fuse from 'fuse.js';
	import { routes, type Route } from '$docs/routes';
	import { fly } from 'svelte/transition';
	import { dialogStore } from '$docs/stores/dialog-store';

	let filteredRoutes: Route[] = [];

	const fuse = new Fuse(routes, {
		keys: ['title', 'name', 'href', 'keywords', 'category', 'actionName'],
		includeScore: true,
		threshold: 0.4
	});

	let value: string = '';
	let timeout: ReturnType<typeof setTimeout>;
	$: {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			const results = fuse.search((value || '').trim().toLowerCase());
			filteredRoutes = results.map((result) => result.item);
		}, 200);
	}
</script>

<div
	class="absolute left-[50%] top-[15%] z-50 w-[90vw]
    max-w-[50rem] translate-x-[-50%] bg-zinc-900
shadow-lg p-6 rounded-md"
	transition:fly|global={{ y: 50, duration: 250 }}
>
	<input class="input text-2xl" placeholder="Search the docs" bind:value />
	<div class="mt-4 overflow-auto max-h-[400px] p-2 flex flex-col gap-1">
		{#if filteredRoutes.length > 0}
			{#each filteredRoutes as { title, href }}
				<a class="block p-2" {href} on:click={dialogStore.closeLatest}>
					<p class="text-lg font-semibold">{title}</p>
					<p class="text-zinc-50/50">{href}</p>
				</a>
			{/each}
		{:else if value === ''}
			<p class="text-zinc-50/50 text-center text-lg">Start typing to search</p>
		{:else}
			<p class="text-zinc-50/50 text-center text-lg">No results found</p>
		{/if}
	</div>
</div>
