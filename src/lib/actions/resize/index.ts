import type { ActionReturn } from 'svelte/action';
import type { IntersectEvents } from './types';
import { emit } from '../../internal/emit';

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
