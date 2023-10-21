<script lang="ts">
	import { page } from '$app/stores';
	import { dialogStore } from '$docs/stores/dialog-store';
	import { routes } from '../routes.js';

	export let fromSideBar: boolean = false;
</script>

<aside {...$$restProps}>
	<p class="p {fromSideBar ? 'text-2xl' : 'text-lg'} font-semibold">Overview</p>
	<nav class="flex flex-col gap-1 mt-2">
		{#each routes.filter((route) => route.category === 'overview') as { title, href }}
			<a
				on:click={dialogStore.closeLatest}
				{href}
				class="{fromSideBar ? 'text-lg' : null} ml-2 hover:opacity-90 w-fit"
				class:underline={$page.url.pathname === href}>{title}</a
			>
		{/each}
	</nav>
	<p class="p {fromSideBar ? 'text-2xl' : 'text-lg'} font-semibold mt-6">Actions</p>
	<nav class="flex flex-col gap-1 mt-2">
		{#each routes.filter((route) => route.category === 'actions') as { title, href }}
			<a
				on:click={dialogStore.closeLatest}
				{href}
				class="{fromSideBar ? 'text-lh' : null} ml-2 hover:opacity-90 w-fit"
				class:underline={$page.url.pathname === href}>{title}</a
			>
		{/each}
	</nav>
</aside>
