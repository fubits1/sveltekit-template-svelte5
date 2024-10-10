import adapter from 'svelte-adapter-bun'
// import adapter from '@sveltejs/adapter-node';
// import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// why?
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$assets: 'src/lib/assets',
			$data: 'src/lib/data',
			$components: 'src/lib/components',
			$styles: 'src/lib/styles',
			$utils: 'src/lib/utils'
		}
	}
}

export default config
