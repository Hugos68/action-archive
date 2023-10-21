<script lang="ts">
	import '../app.css';
	import { inject } from '@vercel/analytics';
	import { dev } from '$app/environment';
	import Header from '$docs/components/Header.svelte';
	import Dialog from '$docs/components/Dialog.svelte';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<!-- OVERLAYS -->
<Dialog />

<!-- LAYOUT -->
<Header />
<slot />
