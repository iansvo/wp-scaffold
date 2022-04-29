const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
const lineClamp = require('@tailwindcss/line-clamp');
const aspectRatio = require('@tailwindcss/aspect-ratio');
const themeJSON = require('./theme.json');

function getThemePalette() {
	const { palette } = themeJSON.settings.color;

	return Array.isArray(palette) ? palette : [];
}

function getThemeColors() {
	const palette = getThemePalette();

	if (!palette) return [];

	const colors = {};

	palette.forEach((paletteColor) => {
		const { slug, color } = paletteColor;

		colors[slug] = color;
	});

	return colors;
}

module.exports = {
		'assets/**/*.js',
		'**/*.php',
		'includes/**/*.js',
		'includes/blocks/**/*.php',
		'includes/block-*/**/*.php',
	],
	theme: {
		extend: {
			colors: {
				...getThemeColors(),
			},
		},
	},
	plugins: [typography, forms, lineClamp, aspectRatio],
};
