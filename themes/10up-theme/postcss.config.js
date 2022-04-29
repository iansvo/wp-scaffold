const baseConfig = require('10up-toolkit/config/postcss.config');

module.exports = (props) => {
	const config = baseConfig(props);

	config.plugins = {
		'postcss-import': {},
		tailwindcss: {},
		'postcss-mixins': {},
		'postcss-preset-env': {
			stage: 0,
			autoprefixer: {
				grid: true,
			},
			features: {
				'custom-properties': false,
			},
		},
	};

	return config;
};
