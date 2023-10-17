import type { ActionReturn } from '../../internal/svelte.js';
import type { IntersectEvents, ResizeParameters } from './types.js';
import { emit } from '../../internal/emit.js';

export function resize(
	node: HTMLElement,
	params: ResizeParameters = {}
): ActionReturn<ResizeParameters, IntersectEvents> {
	let observer: ResizeObserver | null = null;

	function onResize(entries: ResizeObserverEntry[]) {
		for (const entry of entries) {
			emit(node, 'resize', { entry });
		}
	}

	function update(newParams: ResizeParameters = {}, init = false) {
		// Initalize
		if (init) observer = new ResizeObserver(onResize);

		// Remove old state
		observer?.unobserve(node);

		// Update state
		params = newParams;
		observer?.observe(node, params);
	}

	function destroy() {
		observer?.unobserve(node);
	}

	update(params, true);

	return { update, destroy };
}
