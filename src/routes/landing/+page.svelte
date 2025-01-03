<script lang="ts">
	import { Input, Heading, GradientButton } from 'flowbite-svelte';
	import Nav from '$lib/components/Nav/Nav.svelte';
	import getPokemon from '$lib/api/pokemon/index';
	import Pokemon from '$lib/components/Pokemon/Pokemon.svelte';
	import Alert from '$lib/components/Alert/Alert.svelte';
	import { fade } from 'svelte/transition';
	import type { PokemonData } from '$lib/types/types';

	$: pokemon = '';
	let pokemonData: PokemonData;
	$: requestError = false;
	$: errorMessage = 'Please enter a Pokemon name.';

	const handleChange = (e: Event) => {
		const target = e.target as HTMLInputElement | null;
		if (target) {
			pokemon = target.value;
		}
	};
	const fetchPokemon = async (e: SubmitEvent) => {
		e.preventDefault();
		if (!pokemon) {
			requestError = true;
			setTimeout(() => {
				requestError = false;
			}, 3000);
			return;
		}

		try {
			const data = await getPokemon(pokemon);
			pokemon = '';
			pokemonData = {
				id: data.id,
				name: data.name,
				images: data.sprites,
				abilities: data.abilities
			};
		} catch (error: any) {
			errorMessage = 'Pokemon not found. Please try again.';
			requestError = true;
			setTimeout(() => {
				requestError = false;
			}, 3000);
			console.error('ERROR:', { error });
		}
	};
</script>

<Nav />
<section class="mt-28 flex flex-col items-center">
	<Heading tag="h1" class="text-center text-4xl font-bold	">Pokedex Search</Heading>

	{#if requestError}
		<div transition:fade={{ duration: 300 }} class="w-2/4">
			<Alert type="red" message={errorMessage} />
		</div>
	{/if}
	<form
		class="mb-6 mt-4 flex w-1/2 justify-between mobile-only:w-full mobile-only:flex-col mobile-only:px-3"
		onsubmit={fetchPokemon}
	>
		<Input
			id="input"
			size="lg"
			placeholder="Pokemon Name"
			value={pokemon}
			oninput={handleChange}
			class="w-3/4 focus:border-blue-500 focus:ring-blue-500 mobile-only:mb-4 mobile-only:w-full"
		/>
		<GradientButton shadow color="green" type="submit">Search</GradientButton>
	</form>
	<button>Add BUTON TBD</button>
	{#if pokemonData}
		<Pokemon {...pokemonData} />
	{/if}
</section>
