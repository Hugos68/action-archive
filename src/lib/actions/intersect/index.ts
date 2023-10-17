import type { ActionReturn } from '../../internal/svelte.js';
import type { IntersectEvents, IntersectParameters } from './types.js';
import { emit } from '../../internal/emit.js';

export function intersect(
	node: HTMLElement,
	params: IntersectParameters
): ActionReturn<IntersectParameters, IntersectEvents> {
	let observer: IntersectionObserver | null = null;
	function intersectHandler(entries: IntersectionObserverEntry[]) {
		if (params.disabled) return;
		for (const entry of entries) {
			emit(node, 'intersect', { entry });
			if (entry.isIntersecting) emit(node, 'enter', { entry });
			if (!entry.isIntersecting) emit(node, 'leave', { entry });
		}
	}

	function update(newParams: IntersectParameters) {
		// Remove old state
		observer?.disconnect();

		// Update state
		params = newParams;
		observer = new IntersectionObserver(intersectHandler, params);
		observer.observe(node);
	}

	function destroy() {
		observer?.disconnect();
	}

	update(params);

	return { update, destroy };
}
