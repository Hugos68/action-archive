import type { ActionReturn } from '../../internal/svelte.js';
import type { IntersectEvents, IntersectParameters } from './types.js';
import { emit } from '../../internal/emit.js';

export function intersect(
	node: HTMLElement,
	params: IntersectParameters
): ActionReturn<IntersectParameters, IntersectEvents> {
	let observer = new IntersectionObserver(intersectHandler, params);

	function intersectHandler(entries: IntersectionObserverEntry[]) {
		for (const entry of entries) {
			emit(node, 'intersect', { entry });
			if (entry.isIntersecting) emit(node, 'enter', { entry });
			if (!entry.isIntersecting) emit(node, 'leave', { entry });
		}
	}

	function update(newParams: IntersectParameters) {
		params = newParams;
		observer.disconnect();
		observer = new IntersectionObserver(intersectHandler, params);
		observer.observe(node);
	}

	function destroy() {
		observer.disconnect();
	}

	update(params);

	return { update, destroy };
}
