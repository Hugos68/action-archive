import type { Disablable } from '../../internal/types';

export interface ClickOutsideParamaters extends Disablable {
	container?: HTMLElement | string;
}

export type ClickOutsideEvents = {
	'on:aa_click_outside'?: (event: CustomEvent) => void;
};
