<script>
	import { Heading } from 'flowbite-svelte';
</script>

<section class="bg-custom-50 flex h-screen flex-col items-center justify-center p-3">
	<div class="flex flex-col items-center justify-center p-6 sm:ring-4 sm:ring-slate-200">
		<Heading tag="h1" class="text-center text-8xl mobile-only:text-7xl">PokeDex</Heading>
		<p class="my-3 text-lg text-white mobile-only:my-5 mobile-only:text-center">
			Welcome, to PokeDex. Search your mons, by name. Add/Remove them to and from your collection.
		</p>
		<p class="text-white">Login or Create an account.</p>
	</div>
</section>
