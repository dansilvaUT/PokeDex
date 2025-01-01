<script lang="ts">
	import { Heading } from 'flowbite-svelte';
	import { Label, Input } from 'flowbite-svelte';
	import Nav from '$lib/components/Nav/Nav.svelte';
	import getPokemon from '$lib/api/pokemon/index';
	import Pokemon from '$lib/components/Pokemon/Pokemon.svelte';

	type PokemonData = {
		id: number;
		name: string;
		images: any;
		abilities: any[];
	};

	$: pokemon = '';
	let pokemonData: PokemonData;

	const handleChange = (e: Event) => {
		const target = e.target as HTMLInputElement | null;
		if (target) {
			pokemon = target.value;
		}
	};
	const fetchPokemon = async (e: SubmitEvent) => {
		e.preventDefault();
		if (!pokemon) return;
		const data = await getPokemon(pokemon);
		pokemonData = { id: data.id, name: data.name, images: data.sprites, abilities: data.abilities };
	};
</script>

<Nav />
<section class="mt-20 flex flex-col items-center">
	<Heading tag="h1" class="text-center text-4xl font-bold	">Pokedex Search</Heading>
	<form class="mb-6 min-w-96" onsubmit={fetchPokemon}>
		<Label for="input" class="mb-2 block">Enter Pokemon name</Label>
		<Input
			id="input"
			size="lg"
			placeholder="Pokemon Name"
			value={pokemon}
			oninput={handleChange}
			class="focus:border-blue-500 focus:ring-blue-500"
		/>
	</form>
	{#if pokemonData}
		<Pokemon {...pokemonData} />
	{/if}
</section>
