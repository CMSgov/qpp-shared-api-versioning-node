module.exports = {
	"extends": "standard",
	"plugins": [
		"standard",
		"promise"
	],
	"rules": {
		"semi": ["error", "always"],
		"quotes": ["error", "single"],
		"comma-dangle": 0,
		"quote-props": ["error", "consistent-as-needed"],
		"no-param-reassign": 0,
		"radix": 0,
		"linebreak-style": "off",
		"max-len": ["warn", 200],
		"no-return-assign": [2, "except-parens"]
	}
};