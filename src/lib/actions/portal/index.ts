import { getElementFromStringOrElement } from '../../internal/element.js';
import type { PortalParameters } from './types.js';

export function portal(node: HTMLElement, { target = document.body }: PortalParameters) {
	function update({ target: newTarget = document.body }: PortalParameters) {
		target = newTarget;
		const element = getElementFromStringOrElement(target);
		if (!element) return;
		element.appendChild(node);
	}
	update({ target });
	return { update };
}
