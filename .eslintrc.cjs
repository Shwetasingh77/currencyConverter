module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' }, // Changed ecmaVersion to a valid number
  settings: { react: { version: 'detect' } }, // Changed version to 'detect'
  plugins: ['react', 'react-hooks'], // Removed 'react-refresh' since it's not a valid ESLint plugin
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react/jsx-uses-react': 'off', // Turn off warning about missing React imports
    'react/react-in-jsx-scope': 'off', // Turn off warning about missing React imports
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
