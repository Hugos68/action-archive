<script lang="ts">
	import '../app.css';
	import { inject } from '@vercel/analytics';
	import { dev } from '$app/environment';
	import Header from '$docs/components/Header.svelte';
	import Dialog from '$docs/components/Dialog.svelte';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<script lang="ts">
		const htmlEl = document.documentElement;
		const userSetTheme = localStorage.getItem('theme');
		const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
		const theme = userSetTheme || systemTheme;

		function setTheme(theme: 'dark' | 'light') {
			htmlEl.classList.remove('light');
			htmlEl.classList.remove('dark');
			htmlEl.classList.add(theme);
			localStorage.setItem('theme', theme);
		}

		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
			const newTheme = e.matches ? 'dark' : 'light';
			setTheme(newTheme);
		});

		setTheme(theme);
	</script>
</svelte:head>

<!-- OVERLAYS -->
<Dialog />

<!-- LAYOUT -->
<Header />
<slot />
