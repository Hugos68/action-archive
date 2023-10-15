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

export function focus_trap(
	node: HTMLElement,
	focusTrapParameters: FocusTrapParameters = { initialFocus: true }
) {
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
		const { disabled } = focusTrapParameters;
		const { first, last } = determineFocusableElements();
		const isTabKey = event.key === 'Tab';

		if (disabled || !isTabKey) return;

		if (event.shiftKey && document.activeElement === first) {
			event.preventDefault();
			last.focus();
		}
		if (!event.shiftKey && document.activeElement === last) {
			event.preventDefault();
			first.focus();
		}
	}

	if (focusTrapParameters.initialFocus) {
		const { first } = determineFocusableElements();
		first?.focus();
	}

	function update(newFocusTrapParameteters: unknown) {
		focusTrapParameters = {
			...focusTrapParameters,
			...(newFocusTrapParameteters as FocusTrapParameters)
		};
	}

	function destroy() {
		node.removeEventListener('keydown', keydownHandler);
	}

	node.addEventListener('keydown', keydownHandler);

	return { update, destroy };
}
