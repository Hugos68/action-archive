export type ResizeParameters = {
	box?: 'border-box' | 'content-box' | 'device-pixel-content-box';
};

export type IntersectEvents = {
	'on:aa_resize'?: (event: CustomEvent<{ entry: ResizeObserverEntry }>) => void;
};
