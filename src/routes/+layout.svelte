<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
</script>

<header
	class="sticky top-0 p-4 bg-stone-800 px-[clamp(1rem,10vw,25rem)] h-[var(--header-height)] flex justify-between items-center z-50"
>
	<nav>
		<a href="/" class="font-semibold text-lg">Action Archive</a>
	</nav>
	<nav class="flex gap-4">
		<a href="https://github.com/Hugos68/action-archive" target="_blank">Github</a>
		<a href="https://www.npmjs.com/package/action-archive" target="_blank">NPM</a>
	</nav>
</header>
<main class="flex px-[clamp(1rem,10vw,25rem)]">
	<aside
		class="sticky top-[var(--header-height)] h-[calc(100vh-calc(var(--header-height)))] overflow-auto w-1/5 flex flex-col py-8"
	>
		<p class="text-lg font-semibold">Overview</p>
		<span class="flex flex-col gap-1 mt-1.5">
			<a
				class="ml-2 hover:opacity-90"
				href="/overview/introduction"
				class:underline={$page.url.pathname === '/overview/introduction'}>Introduction</a
			>
			<a
				class="ml-2 hover:opacity-90"
				href="/overview/getting-started"
				class:underline={$page.url.pathname === '/overview/getting-started'}>Getting started</a
			>
		</span>
		<p class="text-lg font-semibold mt-6">Actions</p>
		<span class="flex flex-col gap-1 mt-1.5">
			<a
				href="/actions/button"
				class="ml-2 hover:opacity-90"
				class:underline={$page.url.pathname === '/actions/button'}>Button</a
			>
			<a
				href="/actions/click-outside"
				class="ml-2 hover:opacity-90"
				class:underline={$page.url.pathname === '/actions/click-outside'}>Click Outside</a
			>
			<a
				href="/actions/focus-trap"
				class="ml-2 hover:opacity-90"
				class:underline={$page.url.pathname === '/actions/focus-trap'}>Focus Trap</a
			>
			<a
				href="/actions/portal"
				class="ml-2 hover:opacity-90"
				class:underline={$page.url.pathname === '/actions/portal'}>Portal</a
			>
		</span>
	</aside>
	<div class="w-3/5 overflow-y-auto px-4 py-8">
		<slot />
	</div>
	<aside class="w-1/5 flex flex-col px-4 py-8">
		<!-- TODO: TOC -->
	</aside>
</main>

<footer />
