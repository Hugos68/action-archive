<script lang="ts">
	import { button } from '../../lib/index.js';

	export let text: string;

	let currentText = '';
</script>

<p data-testid="text">{currentText}</p>
<a data-testid="anchor" use:button={{ callback: () => (currentText = text) }} href="#test">Anchor</a
>
