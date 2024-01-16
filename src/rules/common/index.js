import { baseRules } from './base.rules.js';
import { exportRules } from './export.rules.js';
import { importRules } from './import.rules.js';
import { jsdocRules } from './jsdoc.rules.js';
import { typescriptRules } from './typescript.rules.js';

export const recommendedConfig = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['import', 'sort-exports', 'jsdoc', '@typescript-eslint'],
  settings: {
    // This is from the documentation of `eslint-import-resolver-typescript`:
    // - Step 1: define import/parsers
    'import/parsers': {
      '@typescript-eslint/parser': ['*.ts', '*.d.ts', '*.tsx'],
      html: ['*.html'],
      // espree: ['*.js', '*.jsx'], // "espree" is the default parser eslint uses.
    },

    // - Step 2: define import/resolver
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

        // project: './jsconfig.json', // use <root>/path/to/folder/tsconfig.json

        // Or, use multiple tsconfigs (Useful for monorepos):
        // -- way No. 1: use a glob pattern
        // project: 'packages/*/tsconfig.json',

        // -- way No. 2: use an array
        // project: ['packages/module-a/tsconfig.json', 'packages/module-b/tsconfig.json'],
      },
    },
  },
  env: { node: true, browser: true, jest: true, es6: true },
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts'],
      rules: { 'jsdoc/require-param': 'off' },
    },
    {
      files: ['*.d.ts'],
      rules: { '@typescript-eslint/no-unused-vars': 'off' },
    },
  ],
  rules: {
    ...baseRules,
    ...importRules,
    ...exportRules,
    ...jsdocRules,
    ...typescriptRules,
    'no-constant-condition': 'off',
  },
};
