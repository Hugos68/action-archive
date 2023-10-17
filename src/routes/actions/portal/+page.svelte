<script lang="ts">
	import Codeblock from '$docs/components/Codeblock.svelte';
	import basicUsageCode from './basic-usage.txt?raw';
	import DocTable from '$docs/components/DocTable.svelte';
	import Example from '$docs/components/Example.svelte';
	import PortalExample from './PortalExample.svelte';
	import portalExampleRaw from './PortalExample.svelte?raw';

	const parametersStructure = {
		headings: ['Name', 'Type', 'Default', 'Description'],
		body: [
			[
				'target',
				'HTMLElement | string',
				'document.body',
				'Element or query selected element the element will be appended to.'
			]
		]
	};
</script>

<h2 class="h2 mt-12" id="description">Description</h2>
<p class="p mt-4">
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

<h3 class="h3 mt-12" id="parameters">Parameters</h3>
<DocTable class="mt-4" structure={parametersStructure} />
