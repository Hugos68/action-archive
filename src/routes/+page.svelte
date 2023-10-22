<script lang="ts">
	import { ArrowRightIcon, DownloadIcon, ZapIcon } from 'svelte-feather-icons';
</script>

<section class="flex px-[clamp(1rem,10vw,25rem)] items-center justify-evenly mt-20">
	<div>
		<h1 class="h1">Action Archive</h1>
		<p class="mt-2">Action packed library to simplify the Svelte DX.</p>

		<div class="mt-12 flex gap-4">
			<a href="/overview/getting-started" class="btn btn-filled flex items-center gap-2"
				>Install <DownloadIcon class="inline" /></a
			>
			<a href="/actions/click-outside" class="btn btn-filled flex items-center gap-2"
				>Read the docs <ArrowRightIcon class="inline" />
			</a>
		</div>
	</div>
	<div class="relative hidden md:block">
		<ZapIcon class="w-[clamp(5rem,20vw,40rem)] h-full z-0" strokeWidth={1} />
	</div>
</section>
