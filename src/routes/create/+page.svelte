<script>
	import { Input, Label, GradientButton, Heading } from 'flowbite-svelte';
</script>

<Heading tag="h2" class="text-center text-7xl mobile-only:text-5xl">Sign Up</Heading>
<Heading tag="h4" class="my-2 text-center"
	>Fill out the form below to begin searching for Pokemon</Heading
>
<form method="POST" class="mx-auto p-4 mobile-only:w-10/12 md:w-4/12">
	<div class="mb-6">
		<Label class="text-base text-white" for="username">Username</Label>
		<Input type="text" id="username" placeholder="John" required />
	</div>
	<div class="mb-6">
		<Label for="email" class="mb-2 text-base text-white">Email address</Label>
		<Input type="email" id="email" placeholder="john.doe@company.com" required />
	</div>
	<div class="mb-6">
		<Label for="password" class="mb-2 text-base text-white">Password</Label>
		<Input type="password" id="password" placeholder="•••••••••" required />
	</div>
	<div class="mb-6">
		<Label for="confirm_password" class="mb-2 text-base text-white">Confirm password</Label>
		<Input type="password" id="confirm_password" placeholder="•••••••••" required />
	</div>
	<GradientButton shadow color="green">Create Account</GradientButton>
</form>
