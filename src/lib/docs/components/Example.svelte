<script lang="ts">
	import { createToggle, melt } from '@melt-ui/svelte';
	import { CodeIcon, EyeIcon } from 'svelte-feather-icons';
	import Codeblock from './Codeblock.svelte';

	export let code: string = '';
	export let language: string;

	const {
		elements: { root },
		states: { pressed }
	} = createToggle();
</script>

<div
	class="relative flex justify-center items-center w-full border-2 border-neutral-50 rounded-md mt-4 bg-gradient-to-tr from-neutral-950/50 via-neutral-900 to-neutral-950/50"
>
	<button use:melt={$root} class="btn absolute top-4 right-4 z-10">
		<svelte:component this={$pressed ? EyeIcon : CodeIcon} size="20" />
	</button>
	{#if $pressed}
		<Codeblock {code} {language} fromExample />
	{:else}
		<span class="overflow-auto">
			<slot />
		</span>
	{/if}
</div>
