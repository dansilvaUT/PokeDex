<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import { Heading } from 'flowbite-svelte';
	import { Listgroup } from 'flowbite-svelte';
	import type { PokemonData } from '$lib/types/types';

	let { id, name, images, abilities }: PokemonData = $props();
</script>

<Card class="mobile-only:w-auto">
	<Heading tag="h3" class="text-center capitalize	">{name}</Heading>
	<div class="grid grid-cols-2 place-items-center">
		<img src={images.front_default} alt={`${name} front`} />
		<img src={images.back_default} alt={`${name} back`} />
	</div>
	<span class="my-2 text-center">PokeDex #{id}</span>
	<div class="flex flex-col items-center">
		<Heading tag="h5" class="mb-2 text-center">Abilities</Heading>
		<Listgroup items={abilities} let:item class="w-48">
			{item.ability.name}
		</Listgroup>
	</div>
</Card>
