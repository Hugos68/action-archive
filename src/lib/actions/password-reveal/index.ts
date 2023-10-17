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

	function setDefaults(params: PasswordRevealParameters) {
		if (!params.type) params.type = 'toggle';
	}

	function init() {
		node.addEventListener('click', clickHandler);
		node.addEventListener('mousedown', poinerdownHandler);
		node.addEventListener('pointerup', pointerupHandler);
	}

	function update(newParams: PasswordRevealParameters) {
		setDefaults(newParams);
		params = newParams;
	}

	function destroy() {
		node.removeEventListener('click', clickHandler);
		node.removeEventListener('pointerdown', poinerdownHandler);
		node.removeEventListener('pointerup', pointerupHandler);
	}

	setDefaults(params);
	init();

	return { update, destroy };
}
