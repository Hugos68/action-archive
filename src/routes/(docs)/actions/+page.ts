import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(303, '/actions/click-outside');
}
