import js from '@eslint/js';
import globals from 'globals';
// eslint-disable-next-line import/no-unresolved
import tseslint from 'typescript-eslint';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { flatConfigs as importFlatConfigs } from 'eslint-plugin-import';

export default tseslint.config(
  js.configs.recommended,
  importFlatConfigs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-refresh': reactRefresh,
      'react-hooks': reactHooks,
      react,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'prefer-template': 'error',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/ban-ts-comment': [
        'error',
        { 'ts-nocheck': 'allow-with-description' },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        { format: ['PascalCase'], selector: 'interface' },
        {
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allowSingleOrDouble',
          selector: 'variable',
          trailingUnderscore: 'allowSingleOrDouble',
        },
        {
          format: ['camelCase', 'PascalCase'],
          selector: 'function',
        },
        { format: ['PascalCase'], selector: 'typeLike' },
        { format: ['PascalCase'], selector: 'enumMember' },
        { format: ['PascalCase'], selector: 'enum' },
      ],
      '@typescript-eslint/no-confusing-non-null-assertion': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      eqeqeq: ['error', 'always'],
      '@typescript-eslint/no-empty-object-type': 'warn',
      'arrow-body-style': ['error', 'as-needed'],
      curly: ['error', 'all'],
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/namespace': 'error',
      'import/default': 'error',
      'import/export': 'error',
      'import/no-named-as-default': 'warn',
      'import/no-named-as-default-member': 'warn',
      'import/no-duplicates': 'warn',
      'import/order': [
        'warn',
        {
          'newlines-between': 'never',
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [{ group: 'parent', pattern: '@/**' }],
        },
      ],
      'max-lines': [
        'error',
        {
          max: 500,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      'react/display-name': 'warn',
      'react/jsx-curly-brace-presence': 'warn',
      'react/jsx-no-useless-fragment': 'warn',
      'react/jsx-sort-props': 'error',
      'react/jsx-key': 'error',
      'react/no-typos': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: true,
        node: true,
      },
      'import/external-module-folders': ['node_modules', 'node_modules/@types'],
      'import/extensions': [
        '.ts',
        '.cts',
        '.mts',
        '.tsx',
        '.js',
        '.jsx',
        '.mjs',
        '.cjs',
      ],
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
      },
    },
    ignores: ['dist'],
  }
);
