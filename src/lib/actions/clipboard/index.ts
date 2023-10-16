import type { ActionReturn } from '../../internal/svelte.js';
import type { ClipboardEvents, ClipboardParameters } from './types.js';
import { emit } from '../../internal/emit.js';

export function clipboard(
	node: HTMLElement,
	{ value }: ClipboardParameters
): ActionReturn<ClipboardParameters, ClipboardEvents> {
	function clickHandler() {
		if (!navigator.clipboard) {
			console.warn(
				'Clipboard API not supported, see: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard'
			);
			return;
		}
		if (typeof value === 'string') navigator.clipboard.writeText(value);
		if (value instanceof Blob)
			navigator.clipboard.write([new ClipboardItem({ [value.type]: value })]);
		emit(node, 'copy', { value });
	}
	function update({ value: newvalue }: ClipboardParameters) {
		value = newvalue;
	}
	function destroy() {
		node.removeEventListener('click', clickHandler);
	}
	node.addEventListener('click', clickHandler);
	return { update, destroy };
}
