<script lang="ts">
	import type { HighlightOptions } from 'highlight.js';
	import hljs from 'highlight.js/lib/core';
    import html from 'highlight.js/lib/languages/xml';
    import javascript from 'highlight.js/lib/languages/javascript';
    import plaintext from 'highlight.js/lib/languages/plaintext';
    import svelte from '$lib/internal/highlightjs/svelte'
    import 'highlight.js/styles/a11y-dark.css';
    hljs.registerLanguage('html', html);
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('plaintext', plaintext);

	export let code: string;
	export let options: HighlightOptions = { language: 'plaintext' };
    </script>

<pre {...$$restProps} class="hljs w-full overflow-scroll {$$props.class}"><code class="language-{options.language}">{@html hljs.highlight(code, options).value.trim()}</code></pre>
