<script lang="ts">
	import Codeblock from '$docs/components/Codeblock.svelte';
	import basicUsageCode from './basic-usage.txt?raw';
	import DocTable from '$docs/components/DocTable.svelte';
	import Example from '$docs/components/Example.svelte';
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
			],
			['disabled', 'boolean', 'false', 'Indicates wether the focus trap should be disabled or not']
		]
	};
</script>

<h2 class="h2 mt-12" id="description">Description</h2>
<p class="p mt-4">
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
