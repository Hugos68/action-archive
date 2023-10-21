import type { Disablable } from '../../internal/types';

export interface LongPressParameters extends Disablable {
	duration?: number;
}

export type LongPressEvents = {
	'on:aa_long_press'?: (event: CustomEvent) => void;
};
