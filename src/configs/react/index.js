import { importRules } from './rules/import.rules.js';
import { reactRules } from './rules/react.rules.js';
import { reactHooksRules } from './rules/reactHooks.rules.js';
import { tailwindRules } from './rules/tailwind.rules.js';

// import { jsxA11yRules } from './jsxA11y.rules';

export const reactConfig = {
  extends: ['plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended'],
  // plugins: ['tailwindcss', 'jsx-a11y'],
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
    // ...jsxA11yRules,
  },
};
