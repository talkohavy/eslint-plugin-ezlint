import { baseRules } from './rules/base.rules.js';
import { exportRules } from './rules/export.rules.js';
import { importRules } from './rules/import.rules.js';
import { jsdocRules } from './rules/jsdoc.rules.js';

export default {
  configs: {
    recommended: {
      extends: ['eslint:recommended'],
      plugins: ['import', 'sort-exports', 'jsdoc'],
      settings: { 'import/resolver': { typescript: true } },
      env: { node: true, browser: true, jest: true, es6: true },
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
      overrides: [
        // { files: ['*.js', '*.jsx'], parser: 'espree' }, // "espree" is the default parser eslint uses.
        { files: ['*.html'], parser: 'html' },
        { files: ['*.ts', '*.d.ts', '*.tsx'], parser: '@typescript-eslint/parser' }, // i don't know what the default parser is, but it didn't work well. Only with "@typescript-eslint/parser" as the default parser eslint is able to lint these files properly.
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
