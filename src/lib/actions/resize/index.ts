import type { ActionReturn } from '../../internal/svelte.js';
import type { ResizeParameters, ResizeEvents  } from './types.js';
import { emit } from '../../internal/emit.js';

export function resize(
	node: HTMLElement,
	params: ResizeParameters = {}
): ActionReturn<ResizeParameters, ResizeEvents> {
	let observer: ResizeObserver | null = null;

	function onResize(entries: ResizeObserverEntry[]) {
		if (params.disabled) return;
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
