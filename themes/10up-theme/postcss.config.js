const baseConfig = require('10up-toolkit/config/postcss.config');

module.exports = (props) => {
	const config = baseConfig(props);

	config.plugins = { ...config.plugins, tailwindcss: {} };

	return config;
};
