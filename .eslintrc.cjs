module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/no-unknown-property': 'off',
    'react/prop-types': 'off',
    'comma-dangle': ['error', { objects: 'always-multiline' }],
  },
}
