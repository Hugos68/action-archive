import type { ActionReturn } from 'svelte/action';
import type { IntersectEvents, IntersectParameters } from './types';
import { emit } from '../../internal/emit';

export function intersect(
	node: HTMLElement,
	intersectParameters?: IntersectParameters
): ActionReturn<IntersectParameters, IntersectEvents> {
	let intersectionObserver = new IntersectionObserver(onIntersect, intersectParameters);

	function onIntersect(entries: IntersectionObserverEntry[]) {
		const entry = entries[0];
		emit(node, 'intersect', { entry });
		if (entries[0].isIntersecting) emit(node, 'intersect_enter', { entry });
		if (!entries[0].isIntersecting) emit(node, 'intersect_leave', { entry });
	}

	function update(newIntersectParameters: IntersectParameters) {
		intersectionObserver.disconnect();
		intersectionObserver = new IntersectionObserver(onIntersect, newIntersectParameters);
		intersectionObserver.observe(node);
	}

	function destroy() {
		intersectionObserver.disconnect();
	}

	intersectionObserver.observe(node);

	return { update, destroy };
}
