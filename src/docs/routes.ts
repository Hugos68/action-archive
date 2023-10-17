type Route = {
	name: string;
};

export type Overview = Route;
export const overviews: Overview[] = [
	{
		name: 'introduction'
	},
	{
		name: 'getting-started'
	}
];

export type Action = Route;
export const actions: Action[] = [
	{
		name: 'click-outside'
	},
	{
		name: 'clipboard'
	},
	{
		name: 'focus-trap'
	},
	{
		name: 'intersect'
	},
	{
		name: 'mask'
	},
	{
		name: 'password-reveal'
	},
	{
		name: 'portal'
	},
	{
		name: 'resize'
	}
].sort((a, b) => (a.name > b.name ? 1 : -1));

export function prettifyRoute(route: Route) {
	const formatted = route.name.replace('-', ' ');
	const captialize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);
	const words = [];
	for (const word of formatted.split(' ')) words.push(captialize(word));
	return words.join(' ');
}

export function actionifyRoute(route: Action) {
	return route.name.replace('-', '_');
}
