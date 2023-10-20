<script lang="ts">
	import Codeblock from '$docs/components/Codeblock.svelte';
	import basicUsageCode from './basic-usage.txt?raw';
	import DocTable from '$docs/components/DocTable.svelte';
	import Example from '$docs/components/Example.svelte';
	import ClickOutsideExample from './ClickOutsideExample.svelte';
	import clickOutsideExampleRaw from './ClickOutsideExample.svelte?raw';

	const parametersStructure = {
		headings: ['Name', 'Type', 'Default', 'Description'],
		body: [
			[
				'container',
				'HTMLElement | string',
				'document.bodyElement',
				'Element or query selected element which will act as the container, clicking outside of the container will not trigger an aa_click_outside event.'
			],
			['disabled', 'boolean', 'false', 'Disables the action.']
		]
	};

	const eventsStructure = {
		headings: ['Name', 'Type', 'Description'],
		body: [
			[
				'aa_click_outside',
				'(event: MouseEvent) => void',
				'Emitted when clicking outside of the node and inside of the container.'
			]
		]
	};
</script>

<h2 class="h2 mt-12" id="description">Description</h2>
<p class="p mt-4">
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

<h3 class="h3 mt-12" id="parameters">Parameters</h3>
<DocTable class="mt-4" structure={parametersStructure} />

<h3 class="h3 mt-12" id="events">Events</h3>
<DocTable class="mt-4" structure={eventsStructure} />
