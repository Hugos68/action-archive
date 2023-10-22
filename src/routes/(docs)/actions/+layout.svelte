<script lang="ts">
	import { page } from '$app/stores';
	import { routes, type Route } from '$docs/routes';
	import { ArrowLeftIcon, ArrowRightIcon } from 'svelte-feather-icons';

	$: actions = routes.filter(({ category }) => category === 'actions');

	$: currentAction = actions.find(({ href }) => href === $page.url.pathname);

	$: ({ title } = currentAction || { title: 'Unknown' });

	$: ({ previousAction, nextAction } = getPreviousAndNextActions(currentAction));

	function getPreviousAndNextActions(route: Route | undefined) {
		if (!route) return {};
		const index = actions.indexOf(route);
		return {
			previousAction: actions[index - 1] || null,
			nextAction: actions[index + 1] || null
		};
	}
</script>

<svelte:head>
	<title>{title} | Action Archive</title>
</svelte:head>

<p class="p opacity-50">Actions</p>
<h1 class="h1 mt-4" id={title}>{title}</h1>

<slot />

<div
	class:justify-between={previousAction && nextAction}
	class:justify-end={!previousAction && nextAction}
	class="flex mt-36"
>
	{#if previousAction}
		{@const { title, href } = previousAction}
		<a class="btn btn-filled" {href}><ArrowLeftIcon class="inline" />{title}</a>
	{/if}
	{#if nextAction}
		{@const { title, href } = nextAction}
		<a class="btn btn-filled" {href}>{title}<ArrowRightIcon class="inline" /></a>
	{/if}
</div>
