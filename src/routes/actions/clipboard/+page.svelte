<script lang="ts">
	import Codeblock from '$lib/docs/components/Codeblock.svelte';
	import DocTable from '$lib/docs/components/DocTable.svelte';
	import Example from '$lib/docs/components/Example.svelte';
	import basicUsageCode from './basic-usage.txt?raw';
	import ClipboardExample from './ClipboardExample.svelte';
	import clipboardExampleRaw from './ClipboardExample.svelte?raw';

	const parametersStructure = {
		title: 'Parameters',
		headings: ['Name', 'Type', 'Default', 'Description'],
		body: [['value', 'string | Blob', '-', 'The text or blob to copy to the clipboard']]
	};

	const eventsStructure = {
		title: 'Events',
		headings: ['Name', 'Type', 'Description'],
		body: [
			[
				'clipboard_copy',
				'(event: CustomEvent<{ value: string | Blob }) => void',
				'Emitted when the the value is copied to the clipboard'
			]
		]
	};
</script>

<h2 class="h2 mt-12" id="description">Description</h2>
<p class="mt-4">The Clipboard action allows for copying data to the clipboard, contains</p>

<h2 class="h2 mt-12" id="usage">Usage</h2>
<Codeblock class="mt-4" code={basicUsageCode} language="xml" />

<h2 class="h2 mt-12" id="example">Example</h2>
<Example code={clipboardExampleRaw} language="xml">
	<ClipboardExample />
</Example>

<h2 class="h2 mt-12" id="api">API</h2>
<DocTable class="mt-4" structure={parametersStructure} />
<DocTable class="mt-4" structure={eventsStructure} />
