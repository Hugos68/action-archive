<script lang="ts">
	import { GithubIcon, SidebarIcon } from 'svelte-feather-icons';
	import '../app.css';
	import { createDialog, melt } from '@melt-ui/svelte';
	import { setContext } from 'svelte';
	import { inject } from '@vercel/analytics';
	import { dev } from '$app/environment';

	const drawer = createDialog();
	const {
		elements: { trigger }
	} = drawer;
	setContext('drawer', drawer);

	inject({ mode: dev ? 'development' : 'production' });
</script>

<header
	class="sticky top-0 py-4 backdrop-blur-sm bg-zinc-800/75 px-[clamp(1rem,10vw,25rem)] h-[var(--header-height)] flex justify-between items-center z-50"
>
	<nav class="flex items-center gap-2">
		<button class="lg:hidden" use:melt={$trigger}>
			<SidebarIcon />
		</button>
		<a href="/" class="font-bold text-lg">Action Archive</a>
	</nav>
	<nav class="flex gap-4">
		<a title="Github" href="https://github.com/Hugos68/action-archive" target="_blank"
			><GithubIcon /></a
		>
	</nav>
</header>
<slot />
