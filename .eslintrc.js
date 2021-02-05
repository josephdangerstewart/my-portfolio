module.exports = {
	parser: "@typescript-eslint/parser", // Specifies the ESLint parser
	parserOptions: {
		ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
		sourceType: "module" // Allows for the use of imports
	},
	extends: [
		"plugin:@typescript-eslint/recommended" // Uses the recommended rules from the @typescript-eslint/eslint-plugin
	],
	rules: {
		// Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
		"@typescript-eslint/explicit-function-return-type": 0,
		"@typescript-eslint/semi": 2,
		"semi": 2,
		"no-extra-semi": "off",
		"@typescript-eslint/no-extra-semi": 0,
		"@typescript-eslint/explicit-module-boundary-types": 0,
		"indent": ["error", "tab"]
	}
};
