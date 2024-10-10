import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

// plugin for preprocessing images
// cf.https://kit.svelte.dev/docs/images
import { enhancedImages } from '@sveltejs/enhanced-img'

// plugin for handling svg as modules
// use ?url or ?raw to preserve Vite's default behavior
import svg from '@poppanator/sveltekit-svg'

export default defineConfig({
	plugins: [
		svg({
			includePaths: ['./src/lib/assets/svg-icons/'],
			svgoOptions: {
				multipass: true,
				plugins: [
					{
						name: 'preset-default',
						// by default svgo removes the viewBox which prevents svg icons from scaling
						// not a good idea! https://github.com/svg/svgo/pull/1461
						params: { overrides: { removeViewBox: false } }
					},
					{ name: 'removeAttrs', params: { attrs: '(fill|stroke)' } }
				]
			}
		}),
		// can define additional options for different svg assets paths
		// svg({
		// 	includePaths: ['./src/assets/graphics/'],
		// 	svgoOptions: {
		// 		multipass: true,
		// 		plugins: ['preset-default']
		// 	}
		// }),
		enhancedImages(),
		sveltekit()
	]
})
