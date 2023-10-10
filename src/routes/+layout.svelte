<script lang="ts">
	import '../app.css';
</script>

<header
	class="sticky top-0 p-4 bg-stone-800 px-[clamp(1rem,10vw,25rem)] h-[var(--header-height)] flex items-center z-50"
>
	<a href="/" class="font-semibold text-lg">Action Archive</a>
</header>

<main class="flex px-[clamp(1rem,10vw,25rem)]">
	<aside
		class="sticky top-[var(--header-height)] h-[calc(100vh-calc(var(--header-height)))] overflow-auto w-1/5 flex flex-col py-8"
	>
		<p class="text-lg font-semibold">Overview</p>
		<span class="flex flex-col gap-1 mt-1.5">
			<a class="ml-2" href="/overview/introduction">Introduction</a>
			<a class="ml-2" href="/overview/getting-started">Getting started</a>
		</span>
		<p class="text-lg font-semibold mt-6">Actions</p>
		<span class="flex flex-col gap-1 mt-1.5">
			<a href="/actions/button" class="ml-2">Button</a>
			<a href="/actions/click-outside" class="ml-2">Click Outside</a>
			<a href="/actions/focus-trap" class="ml-2">Focus Trap</a>
			<a href="/actions/portal" class="ml-2">Portal</a>
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
