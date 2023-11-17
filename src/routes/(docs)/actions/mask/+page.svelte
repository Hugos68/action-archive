<script lang="ts">
	import Codeblock from '$docs/components/Codeblock.svelte';
	import basicUsageCode from './basic-usage.txt?raw';
	import DocTable from '$docs/components/DocTable.svelte';
	import Example from '$docs/components/Example.svelte';
	import MaskExample from './MaskExample.svelte';
	import maskExampleRaw from './MaskExample.svelte?raw';

	const parametersStructure = {
		headings: ['Name', 'Type', 'Default', 'Description'],
		body: [
			['mask', 'string', '-', 'Mask that the input will adhere to.'],
			['disabled', 'boolean', 'false', 'Disables the action.']
		]
	};

	const wildcardStructure = {
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
	based on the provided mask. This action is heavily inspired by the <a
		class="underline hover:opacity-90"
		href="https://alpinejs.dev/plugins/mask"
		target="_blank">Alpine.js Mask plugin</a
	>.
</p>

<h2 class="h2 mt-12" id="usage">Usage</h2>
<Codeblock class="mt-4" code={basicUsageCode} language="xml" />

<h3 class="h3 mt-12" id="wildcards">Wildcards</h3>
<p class="p mt-4">
	Masks can be specified through 3 types of wild cards, any other character will be treated as a
	literal.
</p>
<DocTable class="mt-4" structure={wildcardStructure} />

<h2 class="h2 mt-12" id="example">Example</h2>
<Example code={maskExampleRaw} language="xml">
	<MaskExample />
</Example>

<h2 class="h2 mt-12" id="api">API</h2>

<h3 class="h3 mt-12" id="parameters">Parameters</h3>
<DocTable class="mt-4" structure={parametersStructure} />
