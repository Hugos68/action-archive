<script>
	import Codeblock from '$lib/internal/components/Codeblock.svelte';
	import { ArrowRightIcon } from 'svelte-feather-icons';
	import importcode from './import.txt?raw';
	import basicUsageCode from './basic-usage.txt?raw';
</script>

<p class="opacity-50">Actions</p>
<h1 class="text-4xl mt-4">Button</h1>

<Codeblock class="p-4 rounded-md mt-4" code={importcode} language="javascript" />

<p class="mt-4">
	The Button action is a simple action that can turn anchor tags into buttons, this can be useful
	when you want to progressively enhance an anchor tag to open a modal and prevent navigation.
</p>

<h2 class="text-2xl mt-4">API</h2>
<h3 class="text-xl mt-4">Parameters</h3>
<table class="mt-4 w-full border-2">
	<thead>
		<tr>
			<th class="text-left">Property</th>
			<th class="text-left">Type</th>
			<th class="text-left">Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="text-left">callback</td>
			<td class="text-left">(event: MouseEvent) => void</td>
			<td class="text-left">Callback that will be called on click events</td>
		</tr>
	</tbody>
</table>

<h3 class="text-xl mt-4">Events</h3>
<table class="mt-4 w-full border-2">
	<thead>
		<tr>
			<th class="text-left">Property</th>
			<th class="text-left">Type</th>
			<th class="text-left">Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="text-left">-</td>
			<td class="text-left">-</td>
			<td class="text-left">-</td>
		</tr>
	</tbody>
</table>

<h2 class="text-2xl mt-12">Usage</h2>
<Codeblock class="p-3 rounded-md mt-4" code={basicUsageCode} language="xml" />

<div class="flex justify-end mt-12">
	<a class="hover:underline" href="/overview/getting-started"
		>Click O utside <ArrowRightIcon class="inline" /></a
	>
</div>
