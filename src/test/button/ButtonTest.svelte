<script lang="ts">
	import { button } from '../../lib/index.js';

	export let text: string;

	let currentText = '';
</script>

<p data-testid="text">{currentText}</p>
<a data-testid="anchor" use:button on:click={() => (currentText = text)} href="#test">Anchor</a>
