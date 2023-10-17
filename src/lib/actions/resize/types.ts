import type { Disablable } from '../../internal/types';

export interface ResizeParameters extends ResizeObserverOptions, Disablable {}

export type ResizeEvents = {
	'on:aa_resize'?: (event: CustomEvent<{ entry: ResizeObserverEntry }>) => void;
};
