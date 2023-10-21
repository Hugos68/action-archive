<script lang="ts">
	import Codeblock from '$docs/components/Codeblock.svelte';
	import basicUsageCode from './basic-usage.txt?raw';
	import DocTable from '$docs/components/DocTable.svelte';
	import Example from '$docs/components/Example.svelte';
	import LongPressExample from './LongPressExample.svelte';
	import longPressExampleRaw from './LongPressExample.svelte?raw';

	const parametersStructure = {
		headings: ['Name', 'Type', 'Default', 'Description'],
		body: [
			[
				'duration',
				'number',
				'500',
				'Number of milliseconds that the element needs to be pressed for before the aa_long_press event is emitted.'
			],
			['disabled', 'boolean', 'false', 'Disables the action.']
		]
	};

	const eventsStructure = {
		headings: ['Name', 'Type', 'Description'],
		body: [
			[
				'aa_long_press',
				'(event: CustomEvent) => void',
				'Emitted when the element is pressed for the set duration.'
			]
		]
	};
</script>

<h2 class="h2 mt-12" id="description">Description</h2>
<p class="p mt-4">
	The Long Press action allows for detecting when an element is being pressed for a certain period
	of time.
</p>

<h2 class="h2 mt-12" id="usage">Usage</h2>
<Codeblock class="mt-4" code={basicUsageCode} language="xml" />

<h2 class="h2 mt-12" id="example">Example</h2>
<Example code={longPressExampleRaw} language="xml">
	<LongPressExample />
</Example>

<h2 class="h2 mt-12" id="api">API</h2>

<h3 class="h3 mt-12" id="parameters">Parameters</h3>
<DocTable class="mt-4" structure={parametersStructure} />

<h3 class="h3 mt-12" id="events">Events</h3>
<DocTable class="mt-4" structure={eventsStructure} />
