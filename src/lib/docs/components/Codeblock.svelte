<script lang="ts">
	import 'highlight.js/styles/atom-one-dark.css';
	import hljs from 'highlight.js/lib/core';
	import xml from 'highlight.js/lib/languages/xml';
	import css from 'highlight.js/lib/languages/css';
	import json from 'highlight.js/lib/languages/json';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import plaintext from 'highlight.js/lib/languages/plaintext';
	import shell from 'highlight.js/lib/languages/shell';
	import { clipboard } from '$lib/index.js';
	import { CheckIcon, CopyIcon } from 'svelte-feather-icons';
	import { fly } from 'svelte/transition';

	hljs.registerLanguage('xml', xml);
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('json', json);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	hljs.registerLanguage('shell', shell);
	hljs.registerLanguage('plaintext', plaintext);

	export let code: string;
	export let language: string = 'plaintext';
	export let fromExample = false;

	let copied = false;

	let copyTimeout: ReturnType<typeof setTimeout>;
	function clipboardcopyHandler() {
		copied = true;
		if (copyTimeout) clearTimeout(copyTimeout);
		copyTimeout = setTimeout(() => {
			copied = false;
		}, 2000);
	}
</script>

<div {...$$restProps} class="hljs relative w-full rounded-md overflow-hidden {$$props.class}">
	<button
		class="btn absolute w-fit h-fit top-3.5 {fromExample ? 'right-[4.25rem]' : 'right-3.5'}"
		use:clipboard={{ value: code }}
		on:aa_copy={clipboardcopyHandler}
	>
		{#if copied}
			<div in:fly={{ y: -4 }}>
				<CheckIcon size="15" />
			</div>
		{:else}
			<div in:fly={{ y: 4 }}>
				<CopyIcon size="15" />
			</div>
		{/if}
	</button>
	<!-- eslint-disable -->
	<pre class="hljs p-4 overflow-auto"><code class="language-{language}"
			>{@html hljs.highlight(code, { language }).value.trim()}</code
		></pre>
	<!-- eslint-enable -->
</div>
