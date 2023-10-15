import { getElementFromStringOrElement } from '../../internal/element';
import type { PasswordRevealParameters } from './types';

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

	function mousedownHandler() {
		if (type !== 'hold') return;
		const inputEl = getElementFromStringOrElement(target);
		if (!inputEl) return;
		inputEl.type = 'text';
	}

	function mouseupHandler() {
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
		node.removeEventListener('mousedown', mousedownHandler);
		node.removeEventListener('mouseup', mouseupHandler);
	}

	node.addEventListener('click', clickHandler);
	node.addEventListener('mousedown', mousedownHandler);
	node.addEventListener('mouseup', mouseupHandler);

	return { update, destroy };
}
