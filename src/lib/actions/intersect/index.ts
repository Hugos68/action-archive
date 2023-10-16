import type { ActionReturn } from '../../internal/svelte.js';
import type { IntersectEvents, IntersectParameters } from './types.js';
import { emit } from '../../internal/emit.js';

export function intersect(
	node: HTMLElement,
	{ root = null, rootMargin = '0px 0px 0px 0px', threshold = [0] }: IntersectParameters = {}
): ActionReturn<IntersectParameters, IntersectEvents> {
	function onIntersect(entries: IntersectionObserverEntry[]) {
		for (const entry of entries) {
			emit(entry.target as HTMLElement, 'intersect', { entry });
			emit(entry.target as HTMLElement, entry.isIntersecting ? 'enter' : 'leave', { entry });
		}
	}
	function init() {
		intersectionObserver = registerObserver(onIntersect, { root, rootMargin, threshold });
		intersectionObserver.observe(node);
	}
	function update({
		root: newRoot = null,
		rootMargin: newRootMargin = '0px 0px 0px 0px',
		threshold: newThreshold = [0]
	}: IntersectParameters = {}) {
		destroy();
		root = newRoot;
		rootMargin = newRootMargin;
		threshold = newThreshold;
		init();
	}
	function destroy() {
		intersectionObserver.unobserve(node);
		unregisterObserver({ root, rootMargin, threshold });
	}
	let intersectionObserver: IntersectionObserver;
	init();
	return { update, destroy };
}

/**
 * This map is used to keep track of what IntersectionObserver are already created with each set of parameters.
 * This ensures that actions with the same set of params use the same observer rather can creating a new one.
 * This majorly improves performance when dealing with thousands of observed nodes.
 * Related issue: https://github.com/Hugos68/action-archive/issues/36
 */
const stringifiedParametersObserverMap = new Map<
	string,
	{ users: number; intersectionObserver: IntersectionObserver }
>();

function registerObserver(
	callback: IntersectionObserverCallback,
	{ root, rootMargin, threshold }: IntersectParameters
) {
	const stringifiedParameters = JSON.stringify({ root, rootMargin, threshold });
	const value =
		stringifiedParametersObserverMap.get(stringifiedParameters) ||
		(() => {
			const newValue = {
				users: 0,
				intersectionObserver: new IntersectionObserver(callback, { root, rootMargin, threshold })
			};
			stringifiedParametersObserverMap.set(stringifiedParameters, newValue);
			return newValue;
		})();
	value.users++;
	return value.intersectionObserver;
}

function unregisterObserver({ root, rootMargin, threshold }: IntersectParameters) {
	const stringifiedParameters = JSON.stringify({ root, rootMargin, threshold });
	const value = stringifiedParametersObserverMap.get(stringifiedParameters);
	if (!value) return;
	value.users--;
	if (value.users > 0) return;
	value.intersectionObserver.disconnect();
	stringifiedParametersObserverMap.delete(stringifiedParameters);
}
