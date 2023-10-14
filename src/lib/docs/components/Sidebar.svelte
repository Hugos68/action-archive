<script lang="ts">
	import { page } from '$app/stores';
	import { getContext } from 'svelte';
	import { actions, overviews, prettifyRoute } from '../routes';
	import { melt, type Dialog } from '@melt-ui/svelte';

	export let fromSideBar: boolean = false;

	const {
		elements: { close }
	} = getContext<Dialog>('drawer');
</script>

<aside {...$$restProps}>
	<p class="{fromSideBar ? 'text-2xl' : 'text-lg'} font-semibold">Overview</p>
	<nav class="flex flex-col gap-1 mt-2">
		{#each overviews as overview}
			{@const href = `/overview/${overview.name}`}
			{@const title = prettifyRoute(overview)}
			<a
				use:melt={$close}
				{href}
				class="{fromSideBar ? 'text-lg' : null} ml-2 hover:opacity-90"
				class:underline={$page.url.pathname === href}>{title}</a
			>
		{/each}
	</nav>
	<p class="{fromSideBar ? 'text-2xl' : 'text-lg'} font-semibold mt-6">Actions</p>
	<nav class="flex flex-col gap-1 mt-2">
		{#each actions as action}
			{@const href = `/actions/${action.name}`}
			{@const title = prettifyRoute(action)}
			<a
				use:melt={$close}
				{href}
				class="{fromSideBar ? 'text-lh' : null} ml-2 hover:opacity-90"
				class:underline={$page.url.pathname === href}>{title}</a
			>
		{/each}
	</nav>
</aside>
