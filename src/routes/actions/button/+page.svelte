<script>
	import Codeblock from '$lib/internal/components/Codeblock.svelte';
	import { ArrowRightIcon } from 'svelte-feather-icons';
	import importcode from './import.txt?raw';
	import basicUsageCode from './basic-usage.txt?raw';
	import DocTable from '$lib/internal/components/DocTable.svelte';

	const parametersStructure = {
		title: 'Parameters',
		headings: ['Name', 'Type', 'Description'],
		body: [
			['callback', '(event: MouseEvent) => void', 'Callback that will be called on click events']
		]
	};
</script>

<p class="opacity-50">Actions</p>
<h1 class="text-4xl mt-4">Button</h1>

<Codeblock class="p-4 rounded-md mt-4" code={importcode} language="javascript" />

<p class="mt-4">
	The Button action is a simple action that can turn anchor tags into buttons, this can be useful
	when you want to progressively enhance an anchor tag to open a modal and prevent navigation.
</p>

<h2 class="text-2xl mt-12">Usage</h2>
<Codeblock class="p-3 rounded-md mt-4" code={basicUsageCode} language="xml" />

<h2 class="text-2xl mt-4">API</h2>
<DocTable class="mt-4" structure={parametersStructure} />

<div class="flex justify-end mt-12">
	<a class="hover:underline" href="/overview/getting-started"
		>Click Outside <ArrowRightIcon class="inline" /></a
	>
</div>
