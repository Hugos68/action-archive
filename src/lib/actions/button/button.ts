export function button(node: HTMLElement) {
	function clickHandler(event: MouseEvent) {
		event.preventDefault();
	}

	function destroy() {
		node.removeEventListener('click', clickHandler);
	}

	node.addEventListener('click', clickHandler);

	return { destroy };
}
