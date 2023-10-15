export type IntersectParameters = ConstructorParameters<typeof IntersectionObserver>[1];

export type IntersectEvents = {
	'on:aa_intersect'?: (event: CustomEvent<{ entry: IntersectionObserverEntry }>) => void;
	'on:aa_enter'?: (event: CustomEvent<{ entry: IntersectionObserverEntry }>) => void;
	'on:aa_leave'?: (event: CustomEvent<{ entry: IntersectionObserverEntry }>) => void;
};
