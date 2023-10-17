import type { ActionReturn } from '../../internal/svelte.js';
import type { ClickOutsideEvents, ClickOutsideParamaters } from './types.js';
import { emit } from '../../internal/emit.js';
import { getElementFromStringOrElement } from '../../internal/element.js';

export function click_outside(
	node: HTMLElement,
	params: ClickOutsideParamaters = {}
): ActionReturn<ClickOutsideParamaters, ClickOutsideEvents> {
	function clickHandler(event: MouseEvent) {
		if (params.container) {
			const container = getElementFromStringOrElement(params.container);
			if (!container) return;
			if (!container.contains(event.target as Node)) return;
		}
		if (node.contains(event.target as Node)) return;
		emit(node, 'click_outside');
	}

	function update(newParams: ClickOutsideParamaters = {}, init = false) {
		// Initialize
		if (init) document.addEventListener('click', clickHandler);

		// Set default values
		if (!newParams.container) newParams.container = document.documentElement;

		// Update state
		params = newParams;
	}

	function destroy() {
		document.removeEventListener('click', clickHandler);
	}

	update(params, true);

	return { update, destroy };
}
