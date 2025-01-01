<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<div class="relative px-8">
	<Navbar
		class="fixed start-0 top-0 z-20 w-full border-b bg-red-600 px-2 py-2.5 text-white sm:px-4"
	>
		<NavBrand href="/">
			<span class="self-center whitespace-nowrap text-xl font-semibold">PokeDex</span>
		</NavBrand>
		<NavHamburger />
		<NavUl>
			<NavLi class="text-white" href="/">Home</NavLi>
		</NavUl>
	</Navbar>
</div>
