export function getElementFromStringOrElement<T extends HTMLElement>(input: T | string) {
	if (typeof input === 'string') {
		let queriedEl;
		try {
			queriedEl = document.querySelector(input);
		} catch (_error) {
			console.warn(`Selector "${input}" is not a valid selector.`);
			return null;
		}
		if (!queriedEl) return null;
		return queriedEl as T;
	}
	return input;
}
