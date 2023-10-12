<script lang="ts">
	import Codeblock from '$lib/internal/components/Codeblock.svelte';
	import { ArrowLeftIcon, ArrowRightIcon } from 'svelte-feather-icons';
	import importcode from './import.txt?raw';
	import basicUsageCode from './basic-usage.txt?raw';
	import DocTable from '$lib/internal/components/DocTable.svelte';
	import { click_outside } from '../../../lib';
	import { fade } from 'svelte/transition';

	const parametersStructure = {
		title: 'Events',
		headings: ['Name', 'Type', 'Description'],
		body: [
			[
				'click_outside',
				'(event: MouseEvent) => void',
				'Callback that will be called when clicking outside of the element'
			]
		]
	};

	let clickedOutside = false;
	let timer: ReturnType<typeof setTimeout>;
	function clickOutsideHandler() {
		clickedOutside = true;
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => (clickedOutside = false), 1000);
	}
</script>

<p class="opacity-50">Actions</p>
<h1 class="text-4xl mt-4">Click Outside</h1>

<Codeblock class="p-4 rounded-md mt-4" code={importcode} language="javascript" />

<p class="mt-4">
	The Click Outside action can be used to detect clicks outside of an element, this can be useful
	for example when you want to close a modal when the user clicks outside of it.
</p>

<h2 class="text-3xl mt-12" id="usage">Usage</h2>
<Codeblock class="p-3 rounded-md mt-4" code={basicUsageCode} language="xml" />

<h2 class="text-3xl mt-12" id="example">Example</h2>
<div class="h-36 w-full flex justify-center items-center">
	<div
		class="bg-stone-600 h-24 w-36 flex justify-center items-center rounded-md"
		use:click_outside
		on:click_outside={clickOutsideHandler}
	>
		{#if clickedOutside}
			<p class="text-center select-none" transition:fade={{ duration: 150 }}>Clicked outside!</p>
		{/if}
	</div>
</div>

<h2 class="text-3xl mt-4" id="api">API</h2>
<DocTable class="mt-4" structure={parametersStructure} />

<div class="flex justify-end mt-12">
	<a class="hover:underline" href="/actions/focus-trap"><ArrowRightIcon class="inline" /></a>
</div>

<div class="flex justify-between mt-12">
	<a class="bg-stone-500 rounded-md px-3 py-1.5 hover:underline" href="/actions/button"
		><ArrowLeftIcon class="inline" />Button</a
	>
	<a class="bg-stone-500 rounded-md px-3 py-1.5 hover:underline" href="/actions/focus-trap"
		>Focus Trap<ArrowRightIcon class="inline" /></a
	>
</div>
