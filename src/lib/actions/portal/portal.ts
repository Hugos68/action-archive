import type { ClickOutsideParameters } from './types.js';

export function portal(node: HTMLElement, params: ClickOutsideParameters) {
	function update({ target }: ClickOutsideParameters) {
		node.remove();

		if (target instanceof HTMLElement) {
			target.appendChild(node);
			return;
		}

		let queriedEl: HTMLElement | null = null;
		try {
			queriedEl = document.querySelector(target);
		} catch (_error) {
			queriedEl = document.body;
		}
		queriedEl?.appendChild(node);
	}
	update(params);
	return { update };
}
