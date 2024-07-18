module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@stylistic'],
  rules: {
    '@stylistic/eol-last': ['warn', 'always'],
    '@stylistic/no-multiple-empty-lines': ['warn', {'max': 1}],
    '@stylistic/no-trailing-spaces': 'warn',
    '@stylistic/quotes': ['warn', 'single', {'avoidEscape': true, 'allowTemplateLiterals': true}],
    '@stylistic/semi': ['warn', 'always'],
  },
}
