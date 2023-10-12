import ButtonTest from './ButtonTest.svelte';

import { render, screen } from '@testing-library/svelte';

import { describe, it, expect } from 'vitest';

describe('use:button', () => {
	it('Clicking anchor should prevent navigation', async () => {
		const text = 'Navigation Prevented';
		render(ButtonTest, { text });

		const textEl = screen.getByTestId('text');
		const anchor = screen.getByTestId('anchor');

		anchor.click();

		requestAnimationFrame(() => {
			expect(textEl.innerText).toBe(text);
		});
	});
});
