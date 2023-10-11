import type { ButtonParameters } from './types';

export function button(node: HTMLElement, { callback }: ButtonParameters) {
	let currentCallback = callback;

	function clickHandler(event: MouseEvent) {
		event.preventDefault();
		currentCallback(event);
	}

	function update({ callback: newCallback }: ButtonParameters) {
		currentCallback = newCallback;
	}

	function destroy() {
		node.removeEventListener('click', clickHandler);
	}

	node.addEventListener('click', clickHandler);

	return { update, destroy };
}
