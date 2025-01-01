<script lang="ts">
	import { Alert } from 'flowbite-svelte';
	export let type: 'red' | undefined = 'red';
	export let message = 'Something went wrong. Try again.';
</script>

<Alert border color={type} class="my-4 w-full">
	{message}
</Alert>
