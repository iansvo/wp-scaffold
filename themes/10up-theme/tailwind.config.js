const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
const lineClamp = require('@tailwindcss/line-clamp');
const aspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
	content: [
		'assets/**/*.js',
		'**/*.php',
		'includes/**/*.js',
		'includes/blocks/**/*.php',
		'includes/block-*/**/*.php',
	],
	theme: {
		extend: {},
	},
	plugins: [typography, forms, lineClamp, aspectRatio],
};
