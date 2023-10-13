<script lang="ts">
	import Codeblock from '$lib/internal/components/Codeblock.svelte';
	import { ArrowLeftIcon, ArrowRightIcon } from 'svelte-feather-icons';
	import importcode from './import.txt?raw';
	import basicUsageCode from './basic-usage.txt?raw';
	import DocTable from '$lib/internal/components/DocTable.svelte';
	import Example from '$lib/internal/components/Example.svelte';
	import PortalExample from './PortalExample.svelte';
	import portalExampleRaw from './PortalExample.svelte?raw';

	const parametersStructure = {
		title: 'Parameters',
		headings: ['Name', 'Type', 'Default', 'Description'],
		body: [
			[
				'target',
				'HTMLElement | string',
				'document.body',
				'Element which the target will be appended to, in case of a string it will be used as a query selector'
			]
		]
	};
</script>

<p class="opacity-50">Actions</p>
<h1 class="h1 mt-4">Portal</h1>
<Codeblock class="mt-4" code={importcode} language="javascript" />

<p class="mt-4">
	The Portal action can be used to move an element to another location in the DOM, this can be
	useful for example when you want to render overlays on your body.
</p>

<h2 class="h2 mt-12" id="usage">Usage</h2>
<Codeblock class="mt-4" code={basicUsageCode} language="xml" />

<h2 class="h2 mt-12" id="example">Example</h2>
<Example code={portalExampleRaw} language="xml">
	<PortalExample />
</Example>

<h2 class="h2 mt-12" id="api">API</h2>
<DocTable class="mt-4" structure={parametersStructure} />

<div class="flex justify-between mt-36">
	<a class="btn bg-neutral-500" href="/actions/button"><ArrowLeftIcon class="inline" />Button</a>
	<a class="btn bg-neutral-500" href="/actions/focus-trap"
		>Focus Trap<ArrowRightIcon class="inline" /></a
	>
</div>
