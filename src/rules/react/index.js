import { importRules } from '../common/import.rules';
import { reactRules } from './react.rules';
import { reactHooksRules } from './reactHooks.rules';
import { tailwindRules } from './tailwind.rules';

export const reactConfig = {
  extends: ['plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended'],
  plugins: ['tailwindcss'],
  settings: {
    react: { version: 'detect' },
  },
  // without this override, html files will be considered as jsx:
  overrides: [{ files: ['*.html'], parser: 'html' }],
  rules: {
    'jsdoc/no-undefined-types': 'off',
    ...reactRules,
    ...reactHooksRules,
    ...importRules,
    ...tailwindRules,
  },
};
