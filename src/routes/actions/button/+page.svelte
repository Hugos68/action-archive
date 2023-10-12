<script>
	import Codeblock from '$lib/internal/components/Codeblock.svelte';
	import { ArrowRightIcon } from 'svelte-feather-icons';
	import importcode from './import.txt?raw';
	import basicUsageCode from './basic-usage.txt?raw';
	import { button } from '../../../lib';
</script>

<p class="opacity-50">Actions</p>
<h1 class="text-4xl mt-4">Button</h1>

<Codeblock class="p-4 rounded-md mt-4" code={importcode} language="javascript" />

<p class="mt-4">
	The Button action can turn anchor tags into buttons, this can be useful when you want to
	progressively enhance an anchor tag to open a modal and prevent navigation.
</p>

<h2 class="text-2xl mt-12">Usage</h2>
<Codeblock class="p-3 rounded-md mt-4" code={basicUsageCode} language="xml" />

<h2 class="text-2xl mt-12">Example</h2>
<div class="h-36 w-full flex justify-center items-center">
	<a href="/actions/button" class="bg-stone-600 px-3 py-1.5 rounded-md" use:button>Click me!</a>
</div>

<div class="flex justify-end mt-12">
	<a class="hover:underline" href="/actions/click-outside"
		>Click Outside <ArrowRightIcon class="inline" /></a
	>
</div>
