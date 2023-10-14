import type { ActionReturn } from 'svelte/action';
import type { ClipboardParameters } from './types';

export function clipboard(
	node: HTMLElement,
	clipboardParameters: ClipboardParameters
): ActionReturn<
	undefined,
	{ 'on:clipboard_copy': (event: CustomEvent<{ value: string | Blob }>) => void }
> {
	function clickHandler() {
		if (!navigator.clipboard) {
			console.warn(
				'Clipboard API not supported, see: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard'
			);
			return;
		}

		const { value } = clipboardParameters;
		if (typeof value === 'string') navigator.clipboard.writeText(value);
		if (value instanceof Blob)
			navigator.clipboard.write([new ClipboardItem({ [value.type]: value })]);
		node.dispatchEvent(
			new CustomEvent('clipboard_copy', { detail: { value: clipboardParameters.value } })
		);
	}

	function update(newClipboardParameters: unknown) {
		clipboardParameters = {
			...clipboardParameters,
			...(newClipboardParameters as ClipboardParameters)
		};
	}

	function destroy() {
		node.removeEventListener('click', clickHandler);
	}

	node.addEventListener('click', clickHandler);

	return { update, destroy };
}
