export type IntersectParameters = ConstructorParameters<typeof IntersectionObserver>[1];

export type IntersectEvents = {
	'on:intersect'?: (event: CustomEvent<{ entry: IntersectionObserverEntry }>) => void;
	'on:intersect_enter'?: (event: CustomEvent<{ entry: IntersectionObserverEntry }>) => void;
	'on:intersect_exit'?: (event: CustomEvent<{ entry: IntersectionObserverEntry }>) => void;
};
