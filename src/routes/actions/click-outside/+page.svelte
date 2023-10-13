<script lang="ts">
	import Codeblock from '$lib/internal/components/Codeblock.svelte';
	import { ArrowLeftIcon, ArrowRightIcon } from 'svelte-feather-icons';
	import importcode from './import.txt?raw';
	import basicUsageCode from './basic-usage.txt?raw';
	import DocTable from '$lib/internal/components/DocTable.svelte';
	import Example from '$lib/internal/components/Example.svelte';
	import ClickOutsideExample from './ClickOutsideExample.svelte';
	import clickOutsideExampleRaw from './ClickOutsideExample.svelte?raw';

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
</script>

<p class="opacity-50">Actions</p>
<h1 class="h1 mt-4">Click Outside</h1>
<Codeblock class="mt-4" code={importcode} language="javascript" />

<p class="mt-4">
	The Click Outside action can be used to detect clicks outside of an element, this can be useful
	for example when you want to close a modal when the user clicks outside of it.
</p>

<h2 class="h2 mt-12" id="usage">Usage</h2>
<Codeblock class="mt-4" code={basicUsageCode} language="xml" />

<h2 class="h2 mt-12" id="example">Example</h2>
<Example code={clickOutsideExampleRaw} language="xml">
	<ClickOutsideExample />
</Example>

<h2 class="h2 mt-12" id="api">API</h2>
<DocTable class="mt-4" structure={parametersStructure} />

<div class="flex justify-between mt-36">
	<a class="btn bg-neutral-500" href="/actions/button"><ArrowLeftIcon class="inline" />Button</a>
	<a class="btn bg-neutral-500" href="/actions/focus-trap"
		>Focus Trap<ArrowRightIcon class="inline" /></a
	>
</div>
