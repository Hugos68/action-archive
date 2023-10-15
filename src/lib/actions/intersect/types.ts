export type IntersectParameters = {
	root?: Element | Document | null;
	rootMargin?: string;
	threshold?: number | number[];
};

export type IntersectEvents = {
	'on:aa_intersect'?: (event: CustomEvent<{ entry: IntersectionObserverEntry }>) => void;
	'on:aa_enter'?: (event: CustomEvent<{ entry: IntersectionObserverEntry }>) => void;
	'on:aa_leave'?: (event: CustomEvent<{ entry: IntersectionObserverEntry }>) => void;
};
