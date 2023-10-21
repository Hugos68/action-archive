<script lang="ts">
	import Fuse from 'fuse.js';
	import { routes, type Route } from '$docs/routes';
	import { fly } from 'svelte/transition';
	import { dialogStore } from '$docs/stores/dialog-store';
	import { SearchIcon, XIcon } from 'svelte-feather-icons';

	let value: string = '';
	const fuse = new Fuse(routes, {
		keys: ['title', 'name', 'href', 'keywords', 'category', 'actionName'],
		includeScore: true,
		threshold: 0.4
	});

	$: filteredRoutes = fuse.search((value || '').trim().toLowerCase()).map((result) => result.item);

	let recentRoutes = JSON.parse(localStorage.getItem('recent-routes') || '[]') as Route[];

	function clickHandler(route: Route) {
		if (!recentRoutes.find((r) => r.href === route.href)) {
			recentRoutes.push(route);
			localStorage.setItem('recent-routes', JSON.stringify(recentRoutes));
			recentRoutes = recentRoutes;
		}
		dialogStore.closeLatest();
	}

	function removeRoute(route: Route) {
		const index = recentRoutes.findIndex((r) => r.href === route.href);
		recentRoutes.splice(index, 1);
		localStorage.setItem('recent-routes', JSON.stringify(recentRoutes));
		recentRoutes = recentRoutes;
	}
</script>

<div
	class="absolute left-[50%] top-[15%] z-50 w-[90vw]
    max-w-[50rem] translate-x-[-50%] bg-zinc-900
shadow-lg rounded-md"
	transition:fly|global={{ y: 50, duration: 250 }}
>
	<div class="relative p-4">
		<input
			class="bg-zinc-900 text-2xl outline-none pl-10 w-full"
			placeholder="Search the docs..."
			bind:value
		/>
		<SearchIcon class="absolute left-4 top-1/2 -translate-y-1/2" />
	</div>
	<div class="overflow-auto max-h-[400px] min-h-[100px] p-4 flex flex-col gap-1" tabindex="-1">
		{#if filteredRoutes.length > 0}
			{#each filteredRoutes as route (route.href)}
				{@const { title, href } = route}
				<a class="block p-2" {href} on:click={() => clickHandler(route)}>
					<p class="text-lg font-semibold">{title}</p>
					<p class="text-zinc-50/50">{href}</p>
				</a>
			{/each}
		{:else if value}
			<p class="text-zinc-50/50 text-center text-lg py-12">No results found for "{value}"</p>
		{:else if recentRoutes.length > 0}
			<p class="text-zinc-50/50 text-lg">Recent Searches:</p>
			{#each recentRoutes as route}
				{@const { title, href } = route}
				<a
					class="flex items-center justify-between p-2 hover:bg-zinc-700 focus:bg-zinc-700 rounded-md"
					{href}
					on:click={() => clickHandler(route)}
				>
					<div>
						<p class="text-lg font-semibold">{title}</p>
						<p class="text-zinc-50/50">{href}</p>
					</div>
					<button class="btn" on:click|preventDefault|stopPropagation={() => removeRoute(route)}>
						<XIcon />
					</button>
				</a>
			{/each}
		{:else}
			<p class="text-zinc-50/50 text-center text-lg py-12">No recent searches</p>
		{/if}
	</div>
</div>
