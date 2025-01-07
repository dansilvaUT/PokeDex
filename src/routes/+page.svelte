<script>
	import copy from '$lib/assets/images/copy.png';
	import pika from '$lib/assets/images/pika.png';
	import zard from '$lib/assets/images/zard.png';
	import dialga from '$lib/assets/images/dialga.png';
	import bulb from '$lib/assets/images/bulb.png';
	import { spring } from 'svelte/motion';
	import { onMount } from 'svelte';

	let opacity = spring(0, { stiffness: 0.1, damping: 0.25 });
	let scale = spring(1.8, { stiffness: 0.1, damping: 0.25 });

	onMount(() => {
		opacity.set(1);
		scale.set(1);
	});

	const images = [pika, zard, dialga, bulb];
</script>

<div class="mb-2.5 mt-6 flex flex-wrap justify-center mobile-only:hidden">
	{#each images as image (image)}
		<img
			alt="pokemon"
			class="h-56"
			src={image}
			style="opacity: {$opacity}; transform: scale({$scale});  transition: opacity 1.5s ease, transform 1.5s ease;"
		/>
	{/each}
</div>
<div class="mt-8 flex flex-col items-center justify-center p-6 sm:ring-4 sm:ring-slate-200">
	<img src={copy} alt="copy text" class="p-2" />
	<p class="my-3 text-xl text-white mobile-only:my-5 mobile-only:text-center">
		Welcome, to PokeDex. Search your mons, by name. Add/Remove them to and from your collection.
	</p>
	<p class="text-white"><a href="/login">Login</a> or <a href="/create">Create an account.</a></p>
</div>
