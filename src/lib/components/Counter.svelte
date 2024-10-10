<script>
	import { count } from '$lib/data/store.svelte.js'

	/** @type {{ initial_value: number }}	*/
	const { initial_value } = $props()

	if (!isNaN(initial_value)) {
		count.reset(initial_value)
	}
</script>

<h3>Counter</h3>
<div><code>intial: {initial_value}</code></div>
<output>state: {count.count}</output>
<aside>
	<button class="primary" onclick={count.increment}>Increment</button>
	<button class="primary" onclick={count.decrement}>Decrement</button>
	<button onclick={() => count.reset(initial_value)}>Reset</button>
</aside>

<style>
	aside {
		padding: 0.5rem;
		border-radius: var(--border-radius-large);
		display: flex;
		gap: 4px;
	}
</style>
