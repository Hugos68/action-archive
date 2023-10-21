import type { Disablable } from '../../internal/types';

export interface ClipboardParameters extends Disablable {
	value: string | Blob;
}

export type ClipboardEvents = {
	'on:aa_copy'?: (event: CustomEvent<{ value: string | Blob }>) => void;
};
