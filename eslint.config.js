import eslintPluginSvelte from 'eslint-plugin-svelte'
import tsParser from '@typescript-eslint/parser'
import svelteConfig from './svelte.config.js'

export default [
	// add more generic rule sets here, such as:
	// js.configs.recommended,
	// ...eslintPluginSvelte.configs['flat/recommended'],
	...eslintPluginSvelte.configs['flat/prettier'],
	{
		files: [
			'**/*.svelte',
			'*.svelte',
			'**/*.svelte.ts',
			'*.svelte.ts',
			'**/*.svelte.js',
			'*.svelte.js'
		],
		languageOptions: {
			parserOptions: {
				extraFileExtensions: ['.svelte'],
				parser: tsParser,
				svelteConfig
			}
		}
	},
	{
		rules: {
			// override/add rules settings here, such as:
			// 'svelte/rule-name': 'error'
			'no-at-html-tags': 'off'
		}
	}
]
