import type { ActionReturn } from '../../internal/svelte.js';
import type { IntersectEvents, ResizeParameters } from './types.js';
import { emit } from '../../internal/emit.js';

export function resize(
	node: HTMLElement,
	{ box = 'content-box' }: ResizeParameters = {}
): ActionReturn<undefined, IntersectEvents> {
	function onResize(entries: ResizeObserverEntry[]) {
		for (const entry of entries) {
			emit(node, 'resize', { entry });
		}
	}
	function init() {
		resizeObserver = registerObserver(onResize);
		resizeObserver.observe(node, { box });
	}
	function update({ box: newBox = 'content-box' }: ResizeParameters = {}) {
		destroy();
		box = newBox;
		init();
	}
	function destroy() {
		resizeObserver.unobserve(node);
	}
	let resizeObserver: ResizeObserver;
	init();
	return { update, destroy };
}

let resizeObserver: ResizeObserver;
function registerObserver(callback: ResizeObserverCallback) {
	if (!resizeObserver) resizeObserver = new ResizeObserver(callback);
	return resizeObserver;
}
