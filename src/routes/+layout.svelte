<script lang="ts">
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { checkUser } from '$lib/api/users';
	import { setUser } from '$lib/stores/user';

	onMount(async () => {
		const response = await checkUser();
		if (response?.status === 200) {
			setUser(response.data);
		}
	});

	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<section class="flex h-screen flex-col items-center justify-center bg-custom-50 p-3 p-4">
	{@render children()}
</section>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	:root::view-transition-old(root) {
		animation:
			600ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation:
			710ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			900ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
	}
</style>
