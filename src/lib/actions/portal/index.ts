import { getElementFromStringOrElement } from '../../internal/element.js';
import type { PortalParameters } from './types.js';

export function portal(node: HTMLElement, params: PortalParameters) {
	function setDefaults(params: PortalParameters) {
		if (!params.target) params.target = document.body;
	}

	function update(newParams: PortalParameters) {
		setDefaults(newParams);
		params = newParams;
		const element = getElementFromStringOrElement(params.target);
		if (!element) return;
		element.appendChild(node);
	}

	setDefaults(params);
	update(params);

	return { update };
}
