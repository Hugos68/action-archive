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
		class="h3 sticky left-0 text-end bg-stone-800 w-min p-2 rounded-t-md"
		id={structure.title.toLowerCase().replace(' ', '-')}
	>
		{structure.title}
	</h3>
	<table class="min-w-full bg-stone-800 rounded-b-md rounded-tr-md">
		<thead class="border-b-2 border-stone-700">
			<tr>
				{#each structure.headings as heading}
					<th class="px-8 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>{heading}</th
					>
				{/each}
			</tr>
		</thead>
		<tbody class="p-0">
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
