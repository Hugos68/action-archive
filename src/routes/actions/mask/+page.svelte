<script lang="ts">
	import Codeblock from '$lib/docs/components/Codeblock.svelte';
	import basicUsageCode from './basic-usage.txt?raw';
	import DocTable from '$lib/docs/components/DocTable.svelte';
	import Example from '$lib/docs/components/Example.svelte';
	import MaskExample from './MaskExample.svelte';
	import maskExampleRaw from './MaskExample.svelte?raw';

	const parametersStructure = {
		title: 'Parameters',
		headings: ['Name', 'Type', 'Default', 'Description'],
		body: [['mask', 'string', '-', 'Mask that the input will adhere to.']]
	};

	const wildcardStructure = {
		title: 'Wildcards',
		headings: ['Wildcard', 'Description'],
		body: [
			['*', 'Any character [a-z0-9]'],
			['9', 'Any number [0-9]'],
			['a', 'Any letter [a-z]']
		]
	};
</script>

<h2 class="h2 mt-12" id="description">Description</h2>
<p class="p mt-4">
	The Mask action can be used to create input masks, it will automatically format the input value
	based on the provided mask. This action is based on the <a
		class="underline hover:opacity-90"
		href="https://alpinejs.dev/plugins/mask"
		target="_blank">Alpine.js Mask plugin</a
	>.
</p>

<h2 class="h2 mt-12" id="usage">Usage</h2>
<Codeblock class="mt-4" code={basicUsageCode} language="xml" />
<p class="p mt-4">Masks can be specified through 3 types of wild cards:</p>
<DocTable class="mt-4" structure={wildcardStructure} />
<p class="p mt-4">Any other character will be treated as a literal.</p>

<h2 class="h2 mt-12" id="example">Example</h2>
<Example code={maskExampleRaw} language="xml">
	<MaskExample />
</Example>

<h2 class="h2 mt-12" id="api">API</h2>
<DocTable class="mt-4" structure={parametersStructure} />
