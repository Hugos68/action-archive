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

	export let code: string;
	export let language: string = 'plaintext';

	hljs.registerLanguage('xml', xml);
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('json', json);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	hljs.registerLanguage('shell', shell);
	hljs.registerLanguage('plaintext', plaintext);
</script>

<!-- eslint-disable -->
<pre {...$$restProps} class="hljs w-full overflow-scroll p-4 rounded-md {$$props.class}"><code
		class="language-{language}">{@html hljs.highlight(code, { language }).value.trim()}</code
	></pre>
<!-- eslint-enable -->
