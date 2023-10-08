<script>
	import { focus_trap } from '$lib/index';
</script>

<ul>
	<button>test</button>
	<button>test</button>
	<button>test</button>
	<button>test</button>
	<button>test</button>
	<button>test</button>
	<button>test</button>
	<span use:focus_trap>
		<button>test (trap start)</button>
		<button>test</button>
		<button>test</button>
		<button>test</button>
		<button>test</button>
		<button>test</button>
		<button>test</button>
		<button>test</button>
		<button>test (trap end)</button>
	</span>
	<button>test</button>
	<button>test</button>
	<button>test</button>
	<button>test</button>
	<button>test</button>
	<button>test</button>
	<button>test</button>
	<button>test</button>
	<button>test</button>
	<button>test</button>
</ul>
