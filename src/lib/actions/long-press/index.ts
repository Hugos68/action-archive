import type { LongPressEvents, LongPressParameters } from './types';
import { emit } from '../../internal/emit';
import type { ActionReturn } from '../../internal/svelte';

export function long_press(
	node: HTMLElement,
	params: LongPressParameters = {}
): ActionReturn<LongPressParameters, LongPressEvents> {
	let press: ReturnType<typeof setTimeout> | null = null;
	function pointerDownHandler() {
		if (press) clearTimeout(press);
		press = setTimeout(() => {
			emit(node, 'long_press');
		}, params.duration);
	}

	function pointerUpHandler() {
		if (press) clearTimeout(press);
	}

	function update(newParams: LongPressParameters, init = false) {
		if (init) {
			node.addEventListener('pointerdown', pointerDownHandler);
			node.addEventListener('pointerup', pointerUpHandler);
		}

		// Set defaults
		if (!newParams.duration) newParams.duration = 500;

		// Update state
		params = newParams;
	}

	function destroy() {
		node.removeEventListener('pointerdown', pointerDownHandler);
		node.removeEventListener('pointerup', pointerUpHandler);
	}

	update(params, true);
	return { update, destroy };
}
