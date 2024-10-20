<script lang="ts">
	let count = $state(0);
</script>

<div class="flex items-center justify-center gap-x-4 text-xl">
	<input
		type="number"
		disabled
		bind:value={count}
		class=" appearance-none rounded bg-red-200 p-4 text-black"
	/>
	<button type="button" onclick={() => count++} class="rounded bg-red-200 p-4 text-black"
		>count</button
	>
</div>
