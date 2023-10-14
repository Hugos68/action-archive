<script>
	import Codeblock from '$lib/docs/components/Codeblock.svelte';
	import basicUsageCode from './basic-usage.txt?raw';
	import Example from '../../../lib/docs/components/Example.svelte';
	import ButtonExample from './ButtonExample.svelte';
	import buttonExampleRaw from './ButtonExample.svelte?raw';
</script>

<h2 class="h2 mt-12" id="description">Description</h2>
<p class="mt-4">
	The Button action turns an anchor tag into a button by preventing navigation, this can be useful
	when you want to progressively enhance an anchor tag to open a modal and prevent navigation.
</p>

<h2 class="h2 mt-12" id="usage">Usage</h2>
<Codeblock class="p-3 rounded-md mt-4" code={basicUsageCode} language="xml" />

<h2 class="h2 mt-12" id="example">Example</h2>
<p class="mt-4">Turn off Javascript to see the link in action!</p>
<Example code={buttonExampleRaw} language="xml">
	<ButtonExample />
</Example>
