<script lang="ts">
	import { page } from '$app/stores';
	import { actions, type Action, prettifyRoute } from '$lib/docs/routes';
	import { ArrowLeftIcon, ArrowRightIcon } from 'svelte-feather-icons';

	$: currentAction = actions.find(
		(action) => `/actions/${action.name}` === $page.url.pathname
	) as Action;

	$: title = prettifyRoute(currentAction);

	$: ({ previousAction, nextAction } = getPreviousAndNextActions(currentAction) as {
		previousAction: Action | null;
		nextAction: Action | null;
	});

	function getPreviousAndNextActions(action: Action) {
		const index = actions.indexOf(action);
		if (index > -1) {
			return {
				previousAction: actions[index - 1] || null,
				nextAction: actions[index + 1] || null
			};
		}
	}
	
</script>

<svelte:head>
	<title>{title} | Action Archive</title>
</svelte:head>

<p class="opacity-50">Actions</p>
<h1 class="h1 mt-4">{title}</h1>

<slot />

<div
	class:justify-between={previousAction && nextAction}
	class:justify-end={!previousAction && nextAction}
	class="flex mt-36"
>
	{#if previousAction}
		{@const href = `/actions/${previousAction.name}`}
		{@const title = prettifyRoute(previousAction)}
		<a class="btn" {href}><ArrowLeftIcon class="inline" />{title}</a>
	{/if}
	{#if nextAction}
		{@const href = `/actions/${nextAction.name}`}
		{@const title = prettifyRoute(nextAction)}
		<a class="btn" {href}>{title}<ArrowRightIcon class="inline" /></a>
	{/if}
</div>


