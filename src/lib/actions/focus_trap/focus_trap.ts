import type { FocusTrapParameters, FocusableChildren } from './types.js';

const focusableElementSelector = [
	'a[href]:not([tabindex="-1"])',
	'button:not([tabindex="-1"])',
	'input:not([tabindex="-1"])',
	'textarea:not([tabindex="-1"])',
	'select:not([tabindex="-1"])',
	'details:not([tabindex="-1"])',
	'[tabindex]:not([tabindex="-1"])'
].join(', ');

export function focus_trap(
	node: HTMLElement,
	focusTrapParameters: FocusTrapParameters = { initialFocus: true }
) {
	function determineFocusableElements(): FocusableChildren {
		const focusableElements: HTMLElement[] = Array.from(
			node.querySelectorAll(focusableElementSelector)
		);
		return {
			first: focusableElements.at(0) || null,
			last: focusableElements.at(-1) || null
		};
	}

	function keydownHandler(event: KeyboardEvent): void {
		const { disabled } = focusTrapParameters;
		const { first, last } = determineFocusableElements();
		const isTabKey = event.key === 'Tab';

		if (disabled || !isTabKey || !first || !last) return;

		if (event.shiftKey && document.activeElement === first) {
			event.preventDefault();
			last.focus();
		} else if (!event.shiftKey && document.activeElement === last) {
			event.preventDefault();
			first.focus();
		}
	}

	if (focusTrapParameters.initialFocus) {
		const { first } = determineFocusableElements();
		first?.focus();
	}

	function update(newFocusTrapParameteters: FocusTrapParameters) {
		focusTrapParameters = { ...focusTrapParameters, ...newFocusTrapParameteters };
	}

	function destroy() {
		document.removeEventListener('keydown', keydownHandler);
	}

	document.addEventListener('keydown', keydownHandler);

	return { update, destroy };
}
