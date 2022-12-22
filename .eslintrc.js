module.exports = {
  env: {
    browser: false,
    es2021: true,
    'react-native/react-native': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:react-native/all',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-native', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'arrow-body-style': 'warn',
    'react-native/no-inline-styles': 0,
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: false },
    ], // allow to declare styles after component rendering as per react native convention
  },
  ignorePatterns: ['.eslintrc.js'],
};
