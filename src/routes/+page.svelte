<script>
	// image
	import Image from '$assets/images/shane-rounce-1ZZ96uESRJQ-unsplash.jpg?enhanced'
	// state
	import { count } from '$data/store.svelte.js'
	// component
	import Counter from '$components/Counter.svelte'
	// different svg approaches
	import IconSrc from '$assets/svg-icons/location-pin.svg?url'
	import IconRaw from '$assets/svg-icons/location-pin.svg?raw'
	import IconComponent from '$assets/svg-icons/location-pin.svg'
	// util
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
	<title>fubits' SvelteKit + Svelte 5 template</title>
</svelte:head>
<section class="contained">
	<h1>SvelteKit + Svelte 5 Template 2024</h1>
	<h3>Preprocessed Image as Picture</h3>
	<enhanced:img src={Image} alt="some alt text" />
	<h3>Component with shared state</h3>
	<div class="outline">
		<code>counter state in parent scope: {count.count}</code>
		<hr />
		<Counter initial_value={5} />
	</div>

	<h3>SVG as Module / Component</h3>
	<!-- {JSON.stringify(IconSrc, null, 2)} -->
	<!-- {JSON.stringify(IconRaw, null, 2)} -->
	<div class="flex-row flex-top">
		<div class="flex-col flex-left gap-1 flex-1">
			<code>import IconSrc from "./file.svg?url"</code>
			<img src={IconSrc} alt="" class="self-center" />
			<code>&lt;img src=&#123;IconSrc&#125; alt=&quot;&quot; /&gt;</code>
		</div>
		<div class="flex-col flex-left gap-1 flex-1">
			<code>import IconRaw from "./file.svg?raw"</code>
			{@html IconRaw.replace(
				/<svg width="\d+" height="\d+"/,
				'<svg stroke="red" fill="red" width="32" height="32" class="self-center"'
			)}
			<code
				>&#123;@html IconRaw.replace(/&lt;svg width=&quot;\d+&quot; height=&quot;\d+&quot;/,
				'&lt;svg stroke=&quot;red&quot; fill=&quot;red&quot; width=&quot;32&quot;
				height=&quot;32&quot; class=&quot;self-center&quot;')&#125;</code
			>
		</div>
		<div class="flex-col flex-left gap-1 flex-1">
			<code>import IconComponent from "./file.svg"</code>
			<IconComponent fill="green" width="64" height="64" />
			<code>
				&lt;IconComponent fill=&quot;green&quot; width=&quot;64&quot; height=&quot;64&quot; /&gt;
			</code>
		</div>
		<div class="flex-col flex-left gap-1 flex-1">
			<code>import IconComponent from "./file.svg"</code>
			<svelte:component this={IconComponent} fill="blue" width="96" height="96" />
			<code>
				&lt;svelte:component this=&#123;IconComponent&#125; fill=&quot;blue&quot;
				width=&quot;96&quot; height=&quot;96&quot; /&gt;
			</code>
		</div>
	</div>
	<!-- <Icon /> -->

	<h3>Utility function</h3>
	<div class="outline">
		<pre><code>
  util: to_object(dummy_array, 'name')
  output: {JSON.stringify(to_object(dummy_array, 'name'), null, 2)}
</code></pre>
	</div>
</section>

<style>
	div {
		padding: var(--pad, 1rem);
	}
</style>
