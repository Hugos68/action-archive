import { getElementFromStringOrElement } from '../../internal/element.js';
import type { PortalParameters } from './types.js';

export function portal(node: HTMLElement, params: PortalParameters) {
	function update(newParams: PortalParameters) {
		// Set defaults
		if (!newParams.target) newParams.target = document.body;

		// Update state
		params = newParams;
		const element = getElementFromStringOrElement(params.target);
		if (!element) return;
		element.appendChild(node);
	}

	update(params);

	return { update };
}
