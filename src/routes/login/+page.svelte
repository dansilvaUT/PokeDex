<script lang="ts">
	import { Input, Label, GradientButton, Heading } from 'flowbite-svelte';
	import { loginUser } from '$lib/api/users';
	import { goto } from '$app/navigation';
	import { setUser } from '$lib/stores/user';

	let user = {
		username: '',
		password: ''
	};

	let loggedIn = false;

	const onChange = (e: Event) => {
		const { id, value } = e.target as HTMLInputElement;
		user = { ...user, [id]: value.trim() };
	};

	const submitData = async (e: Event) => {
		e.preventDefault();
		try {
			const response = await loginUser(user);
			if (response?.status === 200) {
				setUser(response.data);
				loggedIn = true;
				console.log('User logged in');
			}
		} catch (error) {
			console.error(error);
		}
	};

	$: if (loggedIn) {
		setTimeout(() => {
			goto('/landing');
		}, 3000);
	}
</script>

{#if loggedIn}
	<Heading tag="h2" class="text-center text-7xl text-white mobile-only:text-5xl">Signed In!</Heading
	>
	<Heading tag="h4" class="my-2 text-center text-white">Redirecting to landing page...</Heading>
{:else}
	<Heading tag="h2" class="text-center text-7xl text-white mobile-only:text-5xl">Login</Heading>

	<form method="POST" class="mx-auto p-4 mobile-only:w-10/12 md:w-4/12" on:submit={submitData}>
		<div class="mb-6">
			<Label class="text-base text-white" for="username">Username</Label>
			<Input type="text" id="username" placeholder="Username" on:change={onChange} required />
		</div>
		<div class="mb-6">
			<Label for="password" class="mb-2 text-base text-white">Password</Label>
			<Input type="password" id="password" on:change={onChange} placeholder="•••••••••" required />
		</div>
		<GradientButton shadow color="green" type="submit">Login</GradientButton>
	</form>
{/if}
