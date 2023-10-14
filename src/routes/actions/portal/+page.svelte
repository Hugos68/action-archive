<script lang="ts">
	import Codeblock from '$lib/docs/components/Codeblock.svelte';
	import basicUsageCode from './basic-usage.txt?raw';
	import DocTable from '$lib/docs/components/DocTable.svelte';
	import Example from '$lib/docs/components/Example.svelte';
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
