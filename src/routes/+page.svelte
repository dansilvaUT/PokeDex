<script>
	import { Heading } from 'flowbite-svelte';
	import { Label, Input } from 'flowbite-svelte';
</script>

<section class="flex flex-col items-center">
	<Heading tag="h1" class="text-4xl font-bold">Pokedex Search</Heading>
	<div class="mb-6">
		<Label for="large-input" class="mb-2 block">Enter Pokemon name</Label>
		<Input id="large-input" size="lg" placeholder="Pokemon Name" />
	</div>
</section>
