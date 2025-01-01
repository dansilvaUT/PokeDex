<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import { Heading } from 'flowbite-svelte';
	import { Listgroup } from 'flowbite-svelte';

	interface Ability {
		ability: {
			name: string;
		};
	}

	let {
		id,
		name,
		images,
		abilities
	}: {
		id: number;
		name: string;
		images: { front_default: string; back_default: string };
		abilities: Ability[];
	} = $props();
</script>

<Card>
	<Heading tag="h3">{name}</Heading>
	<img src={images.front_default} alt={`${name} front`} />
	<img src={images.back_default} alt={`${name} back`} />
	<span>{id}</span>
	<Heading tag="h5">Abilities</Heading>
	<Listgroup items={abilities} let:item class="w-48">
		{item.ability.name}
	</Listgroup>
</Card>
