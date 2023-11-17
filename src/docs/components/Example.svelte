<script lang="ts">
	import { createToggle, melt } from '@melt-ui/svelte';
	import { CodeIcon, EyeIcon } from 'svelte-feather-icons';
	import Codeblock from './Codeblock.svelte';
	import { fly } from 'svelte/transition';

	export let code: string = '';
	export let language: string;

	const {
		elements: { root },
		states: { pressed }
	} = createToggle();
</script>

<div
	class="relative rounded-md mt-4 bg-gradient-to-tr from-zinc-400/50 dark:from-zinc-950/50 via-zinc-50/50 dark:via-zinc-900 to-zinc-400/50 dark:to-zinc-950/50"
>
	<button use:melt={$root} class="btn btn-filled absolute top-3.5 right-3.5 z-10">
		{#if $pressed}
			<div in:fly={{ y: -4 }}>
				<EyeIcon size="15" />
			</div>
		{:else}
			<div in:fly={{ y: 4 }}>
				<CodeIcon size="15" />
			</div>
		{/if}
	</button>

	{#if $pressed}
		<Codeblock {code} {language} fromExample />
	{:else}
		<span class="overflow-auto w-full">
			<slot />
		</span>
	{/if}
</div>
