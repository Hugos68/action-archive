import type { FocusTrapParameters } from './types.js';

type FocusableChildren = {
	first: HTMLElement;
	last: HTMLElement;
};

const focusableElementSelector = [
	'a[href]',
	'button',
	'input',
	'textarea',
	'select',
	'details',
	'[tabindex]:not([tabindex="-1"])'
].join(', ');

export function focus_trap(node: HTMLElement, params: FocusTrapParameters = {}) {
	function determineFocusableElements(): FocusableChildren {
		const focusableElements: HTMLElement[] = (
			Array.from(node.querySelectorAll(focusableElementSelector)) as HTMLElement[]
		).filter((el: HTMLElement) => el.style.display !== 'none');

		return {
			first: focusableElements[0],
			last: focusableElements[focusableElements.length - 1]
		};
	}

	function keydownHandler(event: KeyboardEvent): void {
		const { first, last } = determineFocusableElements();
		const isTabKey = event.key === 'Tab';

		if (params.disabled || !isTabKey) return;

		if (event.shiftKey && document.activeElement === first) {
			event.preventDefault();
			last.focus();
		}
		if (!event.shiftKey && document.activeElement === last) {
			event.preventDefault();
			first.focus();
		}
	}

	function update(newParams: FocusTrapParameters, init = false) {
		// Initialize
		if (init) node.addEventListener('keydown', keydownHandler);

		// Set defaults
		if (newParams.initialFocus === undefined) newParams.initialFocus = true;

		// Update state
		params = newParams;
		if (params.initialFocus) {
			const { first } = determineFocusableElements();
			first?.focus();
		}
	}

	function destroy() {
		node.removeEventListener('keydown', keydownHandler);
	}

	update(params, true);

	return { update, destroy };
}
