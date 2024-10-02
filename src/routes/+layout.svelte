<script>
	import '$styles/main.css'
	const { children } = $props()
</script>

<main>
	{@render children()}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 1rem;
	}
</style>
