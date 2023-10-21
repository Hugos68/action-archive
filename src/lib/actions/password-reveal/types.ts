import type { Disablable } from '../../internal/types';

export interface PasswordRevealParameters extends Disablable {
	target: HTMLInputElement | string;
	type?: 'hold' | 'toggle';
}
