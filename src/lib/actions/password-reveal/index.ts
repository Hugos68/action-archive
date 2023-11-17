import { getElementFromStringOrElement } from '../../internal/element.js';
import type { PasswordRevealParameters } from './types.js';

export function password_reveal(node: HTMLElement, params: PasswordRevealParameters) {
	function clickHandler() {
		if (params.type !== 'toggle') return;
		const inputEl = getElementFromStringOrElement(params.target);
		if (!inputEl) return;
		inputEl.type = inputEl.type === 'text' ? 'password' : 'text';
	}
	function poinerdownHandler() {
		if (params.type !== 'hold') return;
		const inputEl = getElementFromStringOrElement(params.target);
		if (!inputEl) return;
		inputEl.type = 'text';
	}
	function pointerupHandler() {
		if (params.type !== 'hold') return;
		const inputEl = getElementFromStringOrElement(params.target);
		if (!inputEl) return;
		inputEl.type = 'password';
	}

	function update(newParams: PasswordRevealParameters, init = false) {
		// Initialize
		if (init) {
			node.addEventListener('click', clickHandler);
			node.addEventListener('mousedown', poinerdownHandler);
			node.addEventListener('pointerup', pointerupHandler);
		}

		// Set defaults
		if (!newParams.type) newParams.type = 'toggle';

		// Update state
		params = newParams;
	}

	function destroy() {
		node.removeEventListener('click', clickHandler);
		node.removeEventListener('pointerdown', poinerdownHandler);
		node.removeEventListener('pointerup', pointerupHandler);
	}

	update(params, true);

	return { update, destroy };
}
