<script lang="ts">
	import Codeblock from '$docs/components/Codeblock.svelte';
	import basicUsageCode from './basic-usage.txt?raw';
	import DocTable from '$docs/components/DocTable.svelte';
	import Example from '$docs/components/Example.svelte';
	import ClickOutsideExample from './ClickOutsideExample.svelte';
	import clickOutsideExampleRaw from './ClickOutsideExample.svelte?raw';

	const parametersStructure = {
		headings: ['Name', 'Type', 'Description'],
		body: [
			[
				'aa_click_outside',
				'(event: MouseEvent) => void',
				'Callback that will be called when clicking outside of the element'
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
