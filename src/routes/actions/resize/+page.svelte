<script lang="ts">
	import Codeblock from '$docs/components/Codeblock.svelte';
	import basicUsageCode from './basic-usage.txt?raw';
	import DocTable from '$docs/components/DocTable.svelte';
	import Example from '$docs/components/Example.svelte';
	import ResizeExample from './ResizeExample.svelte';
	import resizeExampleRaw from './ResizeExample.svelte?raw';

	const eventsStructure = {
		headings: ['Name', 'Type', 'Description'],
		body: [
			[
				'aa_resize',
				'(event: CustomEvent<{ entry: ResizeObserverEntry }>) => void',
				'Emitted when the element resizes.'
			]
		]
	};
</script>

<h2 class="h2 mt-12" id="description">Description</h2>
<p class="p mt-4">The Resize action can be used to get notified when an element is resized.</p>

<h2 class="h2 mt-12" id="usage">Usage</h2>
<Codeblock class="mt-4" code={basicUsageCode} language="xml" />

<h2 class="h2 mt-12" id="example">Example</h2>
<Example code={resizeExampleRaw} language="xml">
	<ResizeExample />
</Example>

<h2 class="h2 mt-12" id="api">API</h2>

<h3 class="h3 mt-12" id="events">Events</h3>
<DocTable class="mt-4" structure={eventsStructure} />
