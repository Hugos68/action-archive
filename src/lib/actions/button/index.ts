export function button(node: HTMLElement) {
	function clickHandler(event: MouseEvent) {
		event.preventDefault();
	}

	function init() {
		node.addEventListener('click', clickHandler);
	}

	function destroy() {
		node.removeEventListener('click', clickHandler);
	}

	init();

	return { destroy };
}
