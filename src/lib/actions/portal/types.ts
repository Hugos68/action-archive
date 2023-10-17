import type { Disablable } from '../../internal/types';

export interface PortalParameters extends Disablable {
	target: HTMLElement | string;
}
