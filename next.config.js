module.exports = {
	webpack: (config) => {
		config.module.rules.push(
			{
				test: /\.md$/,
				use: 'raw-loader'
			},
			{
				test: /\.txt$/,
				use: 'raw-loader'
			},
		);

		return config;
	},
	i18n: {
		locales: ['en-US'],
		defaultLocale: 'en-US',
	},
	images: {
		domains: ['res.cloudinary.com'],
	}
};
