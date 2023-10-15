import type { ActionReturn } from 'svelte/action';
import type { IntersectEvents, IntersectParameters } from './types';

export function intersect(
	node: HTMLElement,
	intersectParameters?: IntersectParameters
): ActionReturn<IntersectParameters, IntersectEvents> {
	let intersectionObserver = new IntersectionObserver(onIntersect, intersectParameters);

	function onIntersect(entries: IntersectionObserverEntry[]) {
		const entry = entries[0];
		node.dispatchEvent(new CustomEvent('intersect', { detail: { entry } }));

		if (entries[0].isIntersecting) {
			node.dispatchEvent(new CustomEvent('intersect_enter', { detail: { entry } }));
		}
		if (!entries[0].isIntersecting) {
			node.dispatchEvent(new CustomEvent('intersect_exit', { detail: { entry } }));
		}
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
