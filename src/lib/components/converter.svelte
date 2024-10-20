<script lang="ts">
	import { Temperature } from '$lib/reactors/temperature.svelte';

	const temp = new Temperature();
</script>

<div class="flex flex-col items-center justify-center gap-y-8 text-xl text-white">
	<div class="">
		<span class="mr-11 pr-2 text-3xl">Celcius </span>
		<input
			type="number"
			bind:value={temp.celcius}
			class=" appearance-none rounded bg-red-200 p-4 text-black outline-none"
		/>
	</div>
	<div class="">
		<span class="pr-2 text-3xl">Fahrenheit </span>
		<input
			type="number"
			bind:value={temp.fahrenheit}
			class=" appearance-none rounded bg-red-200 p-4 text-black outline-none"
		/>
	</div>
</div>
