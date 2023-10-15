export function emit<T>(node: HTMLElement, name: string, detail?: T) {
	return node.dispatchEvent(new CustomEvent(`aa_${name}`, { detail }));
}
