import type { PortalParameters } from './types.js';

export function portal(
	node: HTMLElement,
	portalParameters: PortalParameters = { target: document.body }
) {
	function update(newPortalParameters: unknown) {
		const { target } = newPortalParameters as PortalParameters;

		if (target instanceof HTMLElement) {
			target.appendChild(node);
			return;
		}

		let queriedEl: HTMLElement | null = null;
		try {
			queriedEl = document.querySelector(target);
			if (queriedEl) queriedEl.appendChild(node);
		} catch (_error) {
			console.warn(`Selector "${target}" is not a valid selector.`);
		}
	}
	update(portalParameters);
	return { update };
}
