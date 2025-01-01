<script lang="ts">
	import { Input, Heading, GradientButton } from 'flowbite-svelte';
	import Nav from '$lib/components/Nav/Nav.svelte';
	import getPokemon from '$lib/api/pokemon/index';
	import Pokemon from '$lib/components/Pokemon/Pokemon.svelte';
	import Alert from '$lib/components/Alert/Alert.svelte';
	import { fade } from 'svelte/transition';

	type PokemonData = {
		id: number;
		name: string;
		images: any;
		abilities: any[];
	};

	$: pokemon = '';
	let pokemonData: PokemonData;
	$: error = false;

	const handleChange = (e: Event) => {
		const target = e.target as HTMLInputElement | null;
		if (target) {
			pokemon = target.value;
		}
	};
	const fetchPokemon = async (e: SubmitEvent) => {
		e.preventDefault();
		if (!pokemon) {
			error = true;
			setTimeout(() => {
				error = false;
			}, 3000);
			return;
		}
		const data = await getPokemon(pokemon);
		pokemon = '';
		pokemonData = { id: data.id, name: data.name, images: data.sprites, abilities: data.abilities };
	};
</script>

<Nav />
<section class="mt-28 flex flex-col items-center">
	<Heading tag="h1" class="text-center text-4xl font-bold	">Pokedex Search</Heading>

	{#if error}
		<div transition:fade={{ duration: 300 }} class="w-2/4">
			<Alert type="red" message="Please enter a Pokemon name." />
		</div>
	{/if}
	<form
		class="mobile-only:flex-col mobile-only:w-full mobile-only:px-3 mb-6 mt-4 flex w-1/2 justify-between"
		onsubmit={fetchPokemon}
	>
		<Input
			id="input"
			size="lg"
			placeholder="Pokemon Name"
			value={pokemon}
			oninput={handleChange}
			class="mobile-only:w-full mobile-only:mb-4 w-3/4 focus:border-blue-500 focus:ring-blue-500"
		/>
		<GradientButton shadow color="green" type="submit">Search</GradientButton>
	</form>
	{#if pokemonData}
		<Pokemon {...pokemonData} />
	{/if}
</section>
