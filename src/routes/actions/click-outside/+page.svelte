<script lang="ts">
	import Codeblock from '$lib/docs/components/Codeblock.svelte';
	import basicUsageCode from './basic-usage.txt?raw';
	import DocTable from '$lib/docs/components/DocTable.svelte';
	import Example from '$lib/docs/components/Example.svelte';
	import ClickOutsideExample from './ClickOutsideExample.svelte';
	import clickOutsideExampleRaw from './ClickOutsideExample.svelte?raw';

	const parametersStructure = {
		title: 'Events',
		headings: ['Name', 'Type', 'Description'],
		body: [
			[
				'click_outside',
				'(event: MouseEvent) => void',
				'Callback that will be called when clicking outside of the element'
			]
		]
	};
</script>

<p class="mt-4">
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
<DocTable class="mt-4" structure={parametersStructure} />
