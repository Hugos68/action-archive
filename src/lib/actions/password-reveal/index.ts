import { getElementFromStringOrElement } from '../../internal/element.js';
import type { PasswordRevealParameters } from './types.js';

export function password_reveal(
	node: HTMLElement,
	{ target, type = 'toggle' }: PasswordRevealParameters
) {
	function clickHandler() {
		if (type !== 'toggle') return;
		const inputEl = getElementFromStringOrElement(target);
		if (!inputEl) return;
		inputEl.type = inputEl.type === 'text' ? 'password' : 'text';
	}
	function poinerdownHandler() {
		if (type !== 'hold') return;
		const inputEl = getElementFromStringOrElement(target);
		if (!inputEl) return;
		inputEl.type = 'text';
	}
	function pointerupHandler() {
		if (type !== 'hold') return;
		const inputEl = getElementFromStringOrElement(target);
		if (!inputEl) return;
		inputEl.type = 'password';
	}
	function update({ target: newTarget, type: newType = 'toggle' }: PasswordRevealParameters) {
		target = newTarget;
		type = newType;
	}
	function destroy() {
		node.removeEventListener('click', clickHandler);
		node.removeEventListener('pointerdown', poinerdownHandler);
		node.removeEventListener('pointerup', pointerupHandler);
	}
	node.addEventListener('click', clickHandler);
	node.addEventListener('mousedown', poinerdownHandler);
	node.addEventListener('pointerup', pointerupHandler);
	return { update, destroy };
}
