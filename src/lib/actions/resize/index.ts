import type { ActionReturn } from '../../internal/svelte.js';
import type { IntersectEvents } from './types.js';
import { emit } from '../../internal/emit.js';

export function resize(node: HTMLElement): ActionReturn<undefined, IntersectEvents> {
	const resizeObserver = new ResizeObserver(onResize);

	function onResize(entries: ResizeObserverEntry[]) {
		const entry = entries[0];
		emit(node, 'resize', { entry });
	}

	function destroy() {
		resizeObserver.disconnect();
	}

	resizeObserver.observe(node);

	return { destroy };
}
