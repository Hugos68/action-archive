import type { ActionReturn } from 'svelte/action';

export function click_outside(
	node: HTMLElement
): ActionReturn<undefined, { 'on:click_outside': (event: CustomEvent) => void }> {
	function clickHandler(event: MouseEvent) {
		if (node.contains(event.target as Node)) {
			return;
		}

		node.dispatchEvent(new CustomEvent('click_outside'));
	}

	function destroy() {
		document.removeEventListener('click', clickHandler);
	}

	document.addEventListener('click', clickHandler);

	return { destroy };
}
