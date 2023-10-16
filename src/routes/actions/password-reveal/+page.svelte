<script lang="ts">
	import Codeblock from '$docs/components/Codeblock.svelte';
	import basicUsageCode from './basic-usage.txt?raw';
	import DocTable from '$docs/components/DocTable.svelte';
	import Example from '$docs/components/Example.svelte';
	import PasswordRevealExample from './PasswordRevealExample.svelte';
	import passwordRevealExampleRaw from './PasswordRevealExample.svelte?raw';

	const parametersStructure = {
		title: 'Parameters',
		headings: ['Name', 'Type', 'Default', 'Description'],
		body: [
			['target', 'HTMLInputElement | string', '-', 'Input that will be toggled.'],
			['type', `'toggle' | 'hold'`, `'toggle'`, 'Type of reveal.']
		]
	};
</script>

<h2 class="h2 mt-12" id="description">Description</h2>
<p class="p mt-4">
	The Password Reveal Action allows you to toggle an input's input type between password and text
	allowing the user to see the password they are typing.
</p>

<h2 class="h2 mt-12" id="usage">Usage</h2>
<Codeblock class="mt-4" code={basicUsageCode} language="xml" />

<h2 class="h2 mt-12" id="example">Example</h2>
<Example code={passwordRevealExampleRaw} language="xml">
	<PasswordRevealExample />
</Example>

<h2 class="h2 mt-12" id="api">API</h2>

<h3 class="h3 mt-12" id="parameters">Parameters</h3>
<DocTable class="mt-4" structure={parametersStructure} />
