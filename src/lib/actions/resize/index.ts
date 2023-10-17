import type { ActionReturn } from '../../internal/svelte.js';
import type { IntersectEvents, ResizeParameters } from './types.js';
import { emit } from '../../internal/emit.js';

export function resize(
	node: HTMLElement,
	params: ResizeParameters = {}
): ActionReturn<ResizeParameters, IntersectEvents> {
	const observer = new ResizeObserver(onResize);

	function onResize(entries: ResizeObserverEntry[]) {
		for (const entry of entries) {
			emit(node, 'resize', { entry });
		}
	}

	function setDefaults(params: ResizeParameters) {
		if (!params.box) params.box = 'content-box';
	}

	function update(newParams: ResizeParameters = {}) {
		destroy();
		setDefaults(newParams);
		params = newParams;
		observer.observe(node, params);
	}

	function destroy() {
		observer.unobserve(node);
	}

	update(params);

	return { update, destroy };
}
