import ButtonTest from './ButtonTest.svelte';

import { render, screen } from '@testing-library/svelte';

import { describe, it } from 'vitest';

describe('use:button', () => {
	it('Clicking anchor should prevent navigation', async () => {
		const text = 'Navigation Prevented';
		render(ButtonTest, { text });

		const anchor = screen.getByTestId('anchor');

		anchor.click();

		console.log('Hash: ', window.location.hash);

		requestAnimationFrame(() => {
			expect(window.location.hash).toBe('');
		});
	});
});
