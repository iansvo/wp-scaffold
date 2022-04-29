const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
const lineClamp = require('@tailwindcss/line-clamp');
const aspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
	content: [
		'assets/**/*.js',
		'**/*.php',
		'includes/blocks/**/*.{js,php}',
		'includes/block-*/**/*.{js,php}',
	],
	theme: {
		extend: {},
	},
	plugins: [typography, forms, lineClamp, aspectRatio],
};
