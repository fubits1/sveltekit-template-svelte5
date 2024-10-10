<script>
	import Counter from '$lib/components/Counter.svelte'
	import { to_object } from '$utils/helper.js'

	const dummy_array = [
		{
			id: 1,
			name: 'Alice'
		},
		{
			id: 2,
			name: 'Bob'
		},
		{
			id: 3,
			name: 'Charlie'
		}
	]
</script>

<svelte:head>
	<title>fubits' SvelteKit template</title>
</svelte:head>

<h1>SvelteKit Template 2024</h1>

<Counter initial_value={5} />
<hr />
{JSON.stringify(to_object(dummy_array, 'name'))}
