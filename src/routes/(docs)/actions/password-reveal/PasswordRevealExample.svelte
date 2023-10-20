<script lang="ts">
	import { password_reveal } from 'action-archive';
</script>

<div class="py-32 px-8 flex justify-center items-center gap-4">
	<input type="password" value="MySecretPassword" class="input max-w-xs" id="password" />
	<button type="button" class="btn" use:password_reveal={{ target: '#password', type: 'hold' }}
		>Reveal</button
	>
</div>
