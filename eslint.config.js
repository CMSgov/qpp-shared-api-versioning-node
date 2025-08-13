// ESLint 9.x flat config format
// Migrated from .eslintrc.js

module.exports = [
  {
    files: ['**/*.js'],
    ignores: ['test/**/*.js'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'commonjs',
      globals: {
        // Node.js environment globals
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        clearImmediate: 'readonly',
        clearInterval: 'readonly',
        clearTimeout: 'readonly',
        console: 'readonly',
        exports: 'writable',
        global: 'readonly',
        module: 'readonly',
        process: 'readonly',
        require: 'readonly',
        setImmediate: 'readonly',
        setInterval: 'readonly',
        setTimeout: 'readonly'
      }
    },

    rules: {
      // Original custom rules from .eslintrc.js
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'comma-dangle': 'off',
      'quote-props': ['error', 'consistent-as-needed'],
      'no-param-reassign': 'off',
      'radix': 'off',
      'linebreak-style': 'off',
      'max-len': ['warn', 200],
      'no-return-assign': ['error', 'except-parens'],

      // Core ESLint rules (similar to standard)
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'eqeqeq': 'error',
      'curly': ['error', 'multi-line'],
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'comma-spacing': ['error', { before: false, after: true }],
      'comma-style': ['error', 'last'],
      'computed-property-spacing': ['error', 'never'],
      'eol-last': 'error',
      'func-call-spacing': ['error', 'never'],
      'indent': ['error', 2, { SwitchCase: 1 }],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'keyword-spacing': ['error', { before: true, after: true }],
      'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }],
      'new-parens': 'error',
      'no-array-constructor': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'no-new-object': 'error',
      'no-tabs': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'one-var': ['error', 'never'],
      'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
      'padded-blocks': ['error', { blocks: 'never', switches: 'never', classes: 'never' }],
      'semi-spacing': ['error', { before: false, after: true }],
      'space-before-blocks': ['error', 'always'],
      'space-before-function-paren': ['error', 'always'],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'space-unary-ops': ['error', { words: true, nonwords: false }],
      'spaced-comment': ['error', 'always', {
        line: { markers: ['*package', '!', '/', ',', '='] },
        block: { balanced: true, markers: ['*package', '!', ',', ':', '::', 'flow-include'], exceptions: ['*'] }
      }],
      'template-curly-spacing': ['error', 'never'],
      'yoda': ['error', 'never']
    }
  },
  {
    files: ['test/**/*.js'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'commonjs',
      globals: {
        // Node.js environment globals
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        clearImmediate: 'readonly',
        clearInterval: 'readonly',
        clearTimeout: 'readonly',
        console: 'readonly',
        exports: 'writable',
        global: 'readonly',
        module: 'readonly',
        process: 'readonly',
        require: 'readonly',
        setImmediate: 'readonly',
        setInterval: 'readonly',
        setTimeout: 'readonly',
        // Mocha globals
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        beforeEach: 'readonly',
        after: 'readonly',
        afterEach: 'readonly'
      }
    },

    rules: {
      // Original custom rules from .eslintrc.js
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'comma-dangle': 'off',
      'quote-props': ['error', 'consistent-as-needed'],
      'no-param-reassign': 'off',
      'radix': 'off',
      'linebreak-style': 'off',
      'max-len': ['warn', 200],
      'no-return-assign': ['error', 'except-parens'],

      // Core ESLint rules (similar to standard)
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'eqeqeq': 'error',
      'curly': ['error', 'multi-line'],
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'comma-spacing': ['error', { before: false, after: true }],
      'comma-style': ['error', 'last'],
      'computed-property-spacing': ['error', 'never'],
      'eol-last': 'error',
      'func-call-spacing': ['error', 'never'],
      'indent': ['error', 2, { SwitchCase: 1 }],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'keyword-spacing': ['error', { before: true, after: true }],
      'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }],
      'new-parens': 'error',
      'no-array-constructor': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'no-new-object': 'error',
      'no-tabs': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'one-var': ['error', 'never'],
      'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
      'padded-blocks': ['error', { blocks: 'never', switches: 'never', classes: 'never' }],
      'semi-spacing': ['error', { before: false, after: true }],
      'space-before-blocks': ['error', 'always'],
      'space-before-function-paren': ['error', 'always'],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'space-unary-ops': ['error', { words: true, nonwords: false }],
      'spaced-comment': ['error', 'always', {
        line: { markers: ['*package', '!', '/', ',', '='] },
        block: { balanced: true, markers: ['*package', '!', ',', ':', '::', 'flow-include'], exceptions: ['*'] }
      }],
      'template-curly-spacing': ['error', 'never'],
      'yoda': ['error', 'never']
    }
  }
];
