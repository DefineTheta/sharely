require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	"root": true,
	"parser": "vue-eslint-parser",
	"parserOptions": {
		"parser": "@typescript-eslint/parser"
	},
	"extends": [
		"eslint:recommended",
		"plugin:vue/vue3-recommended",
		"@vue/eslint-config-airbnb-with-typescript",
		"plugin:prettier/recommended"
	],
	"plugins": ["@typescript-eslint", "prettier"],
	"rules": {
		"prettier/prettier": "error",
		// not needed for vue 3
		"vue/no-multiple-template-root": "off"
	}
}