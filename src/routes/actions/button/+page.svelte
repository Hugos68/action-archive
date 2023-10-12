<script>
	import Codeblock from '$lib/internal/components/Codeblock.svelte';
	import { ArrowRightIcon } from 'svelte-feather-icons';
	import importcode from './import.txt?raw';
	import basicUsageCode from './basic-usage.txt?raw';
	import { button } from '../../../lib';
</script>

<p class="opacity-50">Actions</p>
<h1 class="h1 mt-4" id="button">Button</h1>

<Codeblock class="p-4 rounded-md mt-4" code={importcode} language="javascript" />

<p class="mt-4">
	The Button action can turn anchor tag into a button by canceling navigation, this can be useful
	when you want to progressively enhance an anchor tag to open a modal and prevent navigation.
</p>

<h2 class="h2 mt-12" id="usage">Usage</h2>
<Codeblock class="p-3 rounded-md mt-4" code={basicUsageCode} language="xml" />

<h2 class="h2 mt-12" id="example">Example</h2>
<div class="h-36 w-full flex justify-center items-center">
	<a href="/actions/button" class="btn bg-stone-600" use:button
		>I'm an anchor tag that won't take you anywhere!</a
	>
</div>

<div class="flex justify-end mt-12">
	<a class="btn bg-stone-500" href="/actions/click-outside"
		>Click Outside <ArrowRightIcon class="inline" /></a
	>
</div>
