import type { ActionReturn } from 'svelte/action';
import type { ClickOutsideEvents } from './types';

export function click_outside(node: HTMLElement): ActionReturn<undefined, ClickOutsideEvents> {
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
