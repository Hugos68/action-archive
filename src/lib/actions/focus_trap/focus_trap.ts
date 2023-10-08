export interface FocusTrapParameters {
	initialFocus?: boolean;
	disabled?: boolean;
}

interface FocusableChildren {
	first: HTMLElement | null;
	last: HTMLElement | null;
}

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
	params: FocusTrapParameters = { initialFocus: true, disabled: false }
) {
	let focusableChildren: FocusableChildren = {
		first: null,
		last: null
	};

	function keydownHandler(event: KeyboardEvent): void {
		const { disabled } = params;
		const isTabKey = event.key === 'Tab';
		const { first, last } = focusableChildren;

		if (disabled || !isTabKey || !first || !last) return;

		if (event.shiftKey && document.activeElement === focusableChildren.first) {
			event.preventDefault();
			last.focus();
		} else if (!event.shiftKey && document.activeElement === focusableChildren.last) {
			event.preventDefault();
			first.focus();
		}
	}

	function determineFocusableElements(): FocusableChildren {
		const focusableElements: HTMLElement[] = Array.from(
			node.querySelectorAll(focusableElementSelector)
		);

		if (!focusableElements.length) {
			return focusableChildren;
		}

		return {
			first: focusableElements[0],
			last: focusableElements[focusableElements.length - 1]
		};
	}

	function observationHandler(mutationRecords: MutationRecord[], observer: MutationObserver) {
		if (mutationRecords.length) {
			focusableChildren = determineFocusableElements();
		}

		return observer;
	}

	const observer = new MutationObserver(observationHandler);
	observer.observe(node, { childList: true, subtree: true });
	focusableChildren = determineFocusableElements();

	if (params.initialFocus && focusableChildren.first) {
		focusableChildren.first.focus();
	}

	function update(newParams: FocusTrapParameters) {
		params = { ...params, ...newParams };
	}

	function destroy() {
		document.removeEventListener('keydown', keydownHandler);
		observer.disconnect();
	}

	document.addEventListener('keydown', keydownHandler);

	return { update, destroy };
}
