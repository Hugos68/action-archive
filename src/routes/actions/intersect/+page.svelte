<script lang="ts">
	import Codeblock from '$lib/docs/components/Codeblock.svelte';
	import basicUsageCode from './basic-usage.txt?raw';
	import DocTable from '$lib/docs/components/DocTable.svelte';
	import Example from '$lib/docs/components/Example.svelte';
	import IntersectExample from './IntersectExample.svelte';
	import intersectExampleRaw from './IntersectExample.svelte?raw';

	const parametersStructure = {
		title: 'Parameters',
		headings: ['Name', 'Type', 'Default', 'Description'],
		body: [
			[
				'root',
				'Element | Document | null',
				'document.documentElement',
				'Element whose bounds are treated as the bounding box for the targeted element.'
			],
			[
				'rootMargin',
				'string',
				'"0px 0px 0px 0px"',
				"Margin that is added to the root's bounding box, accepts CSS margin values."
			],
			[
				'threshold',
				'number | number[]',
				'[0]',
				'Threshold(s) that define when the intersect event should be emitted.'
			]
		]
	};

	const eventsStructure = {
		title: 'Events',
		headings: ['Name', 'Type', 'Description'],
		body: [
			[
				'intersect',
				'(event: CustomEvent<{ entry: IntersectionObserverEntry }>) => void',
				'Emitted when the element intersects with the root.'
			],
			[
				'intersect_enter',
				'(event: CustomEvent<{ entry: IntersectionObserverEntry }>) => void',
				'Emitted when the element enters the root.'
			],
			[
				'intersect_exit',
				'(event: CustomEvent<{ entry: IntersectionObserverEntry }>) => void',
				'Emitted when the element exits the root.'
			]
		]
	};
</script>

<h2 class="h2 mt-12" id="description">Description</h2>
<p class="p mt-4">
	The Intersect action observes the intersection of an element and emits intersect events.
</p>

<h2 class="h2 mt-12" id="usage">Usage</h2>
<Codeblock class="mt-4" code={basicUsageCode} language="xml" />

<h2 class="h2 mt-12" id="example">Example</h2>
<Example code={intersectExampleRaw} language="xml">
	<IntersectExample />
</Example>

<h2 class="h2 mt-12" id="api">API</h2>
<DocTable class="mt-4" structure={parametersStructure} />
<DocTable class="mt-4" structure={eventsStructure} />
