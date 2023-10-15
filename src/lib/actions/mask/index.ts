import type { MaskParameters } from './types';

export function mask(node: HTMLInputElement, { mask }: MaskParameters) {
	let lastInputValue = node.value;
	function inputHandler() {
		const pressedBackspace = lastInputValue.length - node.value.length === 1;
		if (!pressedBackspace) {
			const input = node.value;
			node.value = cleanAndFormat(input, mask);
		}
		lastInputValue = node.value;
	}

	function update({ mask: newMask }: MaskParameters) {
		mask = newMask;
		node.value = cleanAndFormat(node.value, mask);
	}

	function destroy() {
		node.removeEventListener('input', inputHandler);
	}

	node.addEventListener('input', inputHandler);

	return { update, destroy };
}

function cleanAndFormat(input: string, mask: string) {
	const cleanInput = clean(input, mask);
	return format(cleanInput, mask);
}

/*
	Both the clean and format functions were taken from the alpinejs source code: https://github.com/alpinejs/alpine/blob/main/packages/mask/src/index.js\
    clean -> stripDown
	format -> buildUp
*/
function format(input: string, mask: string) {
	const clean = Array.from(input);
	let output = '';

	for (let i = 0; i < mask.length; i++) {
		if (!['9', 'a', '*'].includes(mask[i])) {
			output += mask[i];
			continue;
		}

		if (clean.length === 0) break;

		output += clean.shift();
	}
	return output;
}

const regexes: Record<'9' | 'a' | '*', RegExp> = {
	'9': /[0-9]/,
	a: /[a-zA-Z]/,
	'*': /[a-zA-Z0-9]/
};

function clean(input: string, mask: string) {
	let inputToBeStripped = input;
	let output = '';
	let wildcardmask = '';

	// Strip away non wildcard mask characters.
	for (let i = 0; i < mask.length; i++) {
		if (['9', 'a', '*'].includes(mask[i])) {
			wildcardmask += mask[i];
			continue;
		}

		for (let j = 0; j < inputToBeStripped.length; j++) {
			if (inputToBeStripped[j] === mask[i]) {
				inputToBeStripped = inputToBeStripped.slice(0, j) + inputToBeStripped.slice(j + 1);
				break;
			}
		}
	}

	for (let i = 0; i < wildcardmask.length; i++) {
		let found = false;

		for (let j = 0; j < inputToBeStripped.length; j++) {
			const currentWildcardmask = wildcardmask[i] as '9' | 'a' | '*';
			if (regexes[currentWildcardmask].test(inputToBeStripped[j])) {
				output += inputToBeStripped[j];
				inputToBeStripped = inputToBeStripped.slice(0, j) + inputToBeStripped.slice(j + 1);

				found = true;
				break;
			}
		}

		if (!found) break;
	}

	return output;
}
