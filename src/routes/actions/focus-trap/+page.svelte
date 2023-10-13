<script lang="ts">
	import Codeblock from '$lib/internal/components/Codeblock.svelte';
	import { ArrowLeftIcon, ArrowRightIcon } from 'svelte-feather-icons';
	import importcode from './import.txt?raw';
	import basicUsageCode from './basic-usage.txt?raw';
	import DocTable from '$lib/internal/components/DocTable.svelte';
	import Example from '$lib/internal/components/Example.svelte';
	import FocusTrapExample from './FocusTrapExample.svelte';
	import focusTrapExampleRaw from './FocusTrapExample.svelte?raw';

	const parametersStructure = {
		title: 'Parameters',
		headings: ['Name', 'Type', 'Default', 'Description'],
		body: [
			[
				'initialFocus',
				'boolean',
				'true',
				'Indicates wether the first focusable element should gain focus upon initialization'
			]
		]
	};
</script>

<p class="opacity-50">Actions</p>
<h1 class="h1 mt-4">Focus Trap</h1>
<Codeblock class="mt-4" code={importcode} language="javascript" />

<p class="mt-4">
	The Focus Trap action can be used to trap a users focus inside of an element, this can be useful
	to manage focus inside of a modal for example.
</p>

<h2 class="h2 mt-12" id="usage">Usage</h2>
<Codeblock class="mt-4" code={basicUsageCode} language="xml" />

<h2 class="h2 mt-12" id="example">Example</h2>
<Example code={focusTrapExampleRaw} language="xml">
	<FocusTrapExample />
</Example>

<h2 class="h2 mt-12" id="api">API</h2>
<DocTable class="mt-4" structure={parametersStructure} />

<div class="flex justify-between mt-36">
	<a class="btn bg-neutral-500" href="/actions/button"><ArrowLeftIcon class="inline" />Button</a>
	<a class="btn bg-neutral-500" href="/actions/focus-trap"
		>Focus Trap<ArrowRightIcon class="inline" /></a
	>
</div>
