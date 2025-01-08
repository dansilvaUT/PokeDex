<script lang="ts">
	import { Input, Label, GradientButton, Heading } from 'flowbite-svelte';
	import { registerUser } from '$lib/api/users';
	import { goto } from '$app/navigation';

	$: user = {
		username: '',
		email: '',
		password: '',
		confirm_password: ''
	};

	let userCreated = false;

	const onChange = (e: Event) => {
		const { id, value } = e.target as HTMLInputElement;
		user = { ...user, [id]: value.trim() };
	};

	const submitData = async (e: Event) => {
		e.preventDefault();
		const cleanedUser = {
			username: user.username,
			email: user.email,
			password: user.password
		};
		try {
			const response = await registerUser(cleanedUser);
			if (response?.status === 201) {
				userCreated = true;
			}
		} catch (error) {
			console.error(error);
		}
	};

	$: if (userCreated) {
		setTimeout(() => {
			goto('/landing');
		}, 3000);
	}
</script>

{#if userCreated}
	<Heading tag="h2" class="text-whitetext-center text-7xl mobile-only:text-5xl"
		>Account Created!</Heading
	>
	<Heading tag="h4" class="text-whitemy-2 text-center">Redirecting to landing page...</Heading>
{:else}
	<Heading tag="h2" class="text-center text-7xl mobile-only:text-5xl">Sign Up</Heading>
	<Heading tag="h4" class="my-2 text-center"
		>Fill out the form below to begin searching for Pokemon</Heading
	>
	<form method="POST" class="mx-auto p-4 mobile-only:w-10/12 md:w-4/12" on:submit={submitData}>
		<div class="mb-6">
			<Label class="text-base text-white" for="username">Username</Label>
			<Input type="text" id="username" placeholder="John" required on:change={onChange} />
		</div>
		<div class="mb-6">
			<Label for="email" class="mb-2 text-base text-white">Email address</Label>
			<Input
				type="email"
				id="email"
				placeholder="john.doe@company.com"
				required
				on:change={onChange}
			/>
		</div>
		<div class="mb-6">
			<Label for="password" class="mb-2 text-base text-white">Password</Label>
			<Input type="password" id="password" placeholder="•••••••••" required on:change={onChange} />
		</div>
		<div class="mb-6">
			<Label for="confirm_password" class="mb-2 text-base text-white">Confirm password</Label>
			<Input
				type="password"
				id="confirm_password"
				placeholder="•••••••••"
				required
				on:change={onChange}
			/>
		</div>
		<GradientButton shadow color="green" type="submit">Create Account</GradientButton>
	</form>
{/if}
