<script>
	import { ArrowRightIcon } from 'svelte-feather-icons';
</script>

<p class="opacity-50">Overview</p>
<h1 class="h1 mt-4" id="introduction">Introduction</h1>
<p class="mt-4">
	Action Archive is a collection of actions for Svelte aimed to reduce the amount of boilerplate
	throughout projects.
</p>

<h2 class="h2 mt-4" id="features">Features</h2>
<ul class="mt-4">
	<li>- Awesome Actions</li>
	<li>- Consistent API</li>
	<li>- Full Typesafety</li>
	<li>- Fully Treeshakable</li>
</ul>

<h2 class="h2 mt-12" id="motiviation">Motivation</h2>
<p class="mt-4">
	When using Svelte you can use this powerful thing called <a
		class="underline hover:opacity-90"
		href="https://svelte.dev/docs/element-directives#use-action"
		target="_blank">Actions</a
	>, they are functions that you can attach to any dom element that can change their behavior. This
	is great for multiple reasons that the Svelte documentation explains better than I can. However,
	some actions are used so often that it can be a pain to write them over and over again. That's
	where Action Archive comes in, it's a collection of actions that you can use in your projects,
	they are consistent and easy to use.
</p>

<h2 class="h2 mt-12" id="inspiration">Inspiration</h2>
<p class="mt-4">
	Credits to both Skeleton and Melt as they inspired some actions.
	<span class="block">
		- <a class="underline hover:opacity-90 font-bold" href="https://www.skeleton.dev/">Skeleton</a>
	</span>
	<span class="block">
		- <a class="underline hover:opacity-90 font-bold" href="https://www.melt-ui.com/">Melt</a>
	</span>
</p>
<p class="mt-4">Fun fact: This website was built with Melt!</p>

<div class="flex justify-end mt-36">
	<a class="btn bg-neutral-500" href="/overview/getting-started"
		>Getting Started <ArrowRightIcon class="inline" /></a
	>
</div>
