export type IntersectParameters = IntersectionObserverInit;

export type IntersectEvents = {
	'on:aa_intersect'?: (event: CustomEvent<{ entry: IntersectionObserverEntry }>) => void;
	'on:aa_enter'?: (event: CustomEvent<{ entry: IntersectionObserverEntry }>) => void;
	'on:aa_leave'?: (event: CustomEvent<{ entry: IntersectionObserverEntry }>) => void;
};
