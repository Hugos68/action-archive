<script lang="ts">
	type Structure = {
		title: string;
		headings: string[];
		body: string[][];
	};
	export let structure: Structure;
</script>

<div {...$$restProps} class="{$$props.class} overflow-auto">
	<h3
		class="h3 sticky left-0 text-end bg-zinc-900 w-min p-4 rounded-t-md"
		id={structure.title.toLowerCase().replace(' ', '-')}
	>
		{structure.title}
	</h3>
	<table class="min-w-full bg-zinc-900 rounded-b-md rounded-tr-md">
		<thead class="border-b-2 border-zinc-900">
			<tr>
				{#each structure.headings as heading}
					<th
						class="px-8 py-4 text-left text-xs font-medium text-zinc-50/50 uppercase tracking-wider"
						>{heading}</th
					>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each structure.body as row}
				<tr>
					{#each row as cell}
						<td class="px-8 py-4 whitespace-nowrap">{cell}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
