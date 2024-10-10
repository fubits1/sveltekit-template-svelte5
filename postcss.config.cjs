module.exports = {
	verbose: true,
	plugins: [
		require('autoprefixer'),
		require('cssnano'),
		require('postcss-nesting')
	]
}
