import { baseRules } from './rules/base.rules.js';
import { exportRules } from './rules/export.rules.js';
import { importRules } from './rules/import.rules.js';
import { jsdocRules } from './rules/jsdoc.rules.js';

export default {
  configs: {
    recommended: {
      extends: ['eslint:recommended'],
      plugins: ['import', 'sort-exports', 'jsdoc'],
      env: { node: true, browser: true, jest: true, es6: true },
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
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
