import type { ActionReturn } from '../../internal/svelte.js';
import type { ClickOutsideEvents } from './types.js';
import { emit } from '../../internal/emit.js';

export function click_outside(node: HTMLElement): ActionReturn<undefined, ClickOutsideEvents> {
	function clickHandler(event: MouseEvent) {
		if (node.contains(event.target as Node)) {
			return;
		}
		emit(node, 'click_outside');
	}
	function destroy() {
		document.removeEventListener('click', clickHandler);
	}
	document.addEventListener('click', clickHandler);
	return { destroy };
}
