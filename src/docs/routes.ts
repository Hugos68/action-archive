export type Route = {
	title: string;
	name: string;
	href: string;
	keywords: string[];
	category: 'overview' | 'actions';
	actionName?: string;
};

export const routes: Route[] = [
	{
		title: 'Introduction',
		name: 'introduction',
		href: '/overview/introduction',
		keywords: ['introduction', 'overview'],
		category: 'overview' as const
	},
	{
		title: 'Getting Started',
		name: 'getting-started',
		href: '/overview/getting-started',
		keywords: ['getting-started', 'overview'],
		category: 'overview' as const
	},
	{
		title: 'Click Outside',
		name: 'click-outside',
		href: '/actions/click-outside',
		keywords: ['click-outside', 'actions'],
		actionName: 'click_outside',
		category: 'actions' as const
	},
	{
		title: 'Clipboard',
		name: 'clipboard',
		href: '/actions/clipboard',
		keywords: ['clipboard', 'actions'],
		category: 'actions' as const
	},
	{
		title: 'Focus Trap',
		name: 'focus-trap',
		href: '/actions/focus-trap',
		keywords: ['focus-trap', 'actions'],
		category: 'actions' as const
	},
	{
		title: 'Intersect',
		name: 'intersect',
		href: '/actions/intersect',
		keywords: ['intersect', 'actions'],
		category: 'actions' as const
	},
	{
		title: 'Long Press',
		name: 'long-press',
		href: '/actions/long-press',
		keywords: ['long-press', 'actions'],
		category: 'actions' as const
	},
	{
		title: 'Mask',
		name: 'mask',
		href: '/actions/mask',
		keywords: ['mask', 'actions'],
		category: 'actions' as const
	},
	{
		title: 'Password Reveal',
		name: 'password-reveal',
		href: '/actions/password-reveal',
		keywords: ['password-reveal', 'actions'],
		category: 'actions' as const
	},
	{
		title: 'Portal',
		name: 'portal',
		href: '/actions/portal',
		keywords: ['portal', 'actions'],
		category: 'actions' as const
	},
	{
		title: 'Resize',
		name: 'resize',
		href: '/actions/resize',
		keywords: ['resize', 'actions'],
		category: 'actions' as const
	}
];
