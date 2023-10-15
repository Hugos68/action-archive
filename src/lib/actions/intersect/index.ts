import type { ActionReturn } from 'svelte/action';
import type { IntersectEvents, IntersectParameters } from './types';
import { emit } from '../../internal/emit';

export function intersect(
	node: HTMLElement,
	{ root = null, rootMargin = '0px 0px 0px 0px', threshold = [0] }: IntersectParameters
): ActionReturn<IntersectParameters, IntersectEvents> {
	let intersectionObserver = new IntersectionObserver(onIntersect, { root, rootMargin, threshold });

	function onIntersect(entries: IntersectionObserverEntry[]) {
		const entry = entries[0];
		emit(node, 'intersect', { entry });
		if (entries[0].isIntersecting) emit(node, 'enter', { entry });
		if (!entries[0].isIntersecting) emit(node, 'leave', { entry });
	}

	function update({
		root: newRoot = null,
		rootMargin: newRootMargin = '0px 0px 0px 0px',
		threshold: newThreshold = [0]
	}: IntersectParameters) {
		root = newRoot;
		rootMargin = newRootMargin;
		threshold = newThreshold;
		intersectionObserver.disconnect();
		intersectionObserver = new IntersectionObserver(onIntersect, { root, rootMargin, threshold });
		intersectionObserver.observe(node);
	}

	function destroy() {
		intersectionObserver.disconnect();
	}

	intersectionObserver.observe(node);

	return { update, destroy };
}
