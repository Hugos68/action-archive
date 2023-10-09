export interface FocusTrapParameters {
	initialFocus?: boolean;
	disabled?: boolean;
}

export interface FocusableChildren {
	first: HTMLElement | null;
	last: HTMLElement | null;
}
