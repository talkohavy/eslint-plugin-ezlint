import { baseRules } from './rules/base.rules.js';
import { exportRules } from './rules/export.rules.js';
import { importRules } from './rules/import.rules.js';
import { jsdocRules } from './rules/jsdoc.rules.js';

export default {
  configs: {
    recommended: {
      extends: ['eslint:recommended'],
      plugins: ['import', 'sort-exports', 'jsdoc'],
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
      overrides: [
        { files: ['*.d.ts'], rules: { 'no-unused-vars': 'off' } }, // <--- when declaring a function, of course its parameters are going to be "unused", so we need to turn this rule off.
      ],
      rules: {
        ...baseRules,
        ...importRules,
        ...exportRules,
        ...jsdocRules,
        'no-constant-condition': 'off',
      },
    },
  },
};
