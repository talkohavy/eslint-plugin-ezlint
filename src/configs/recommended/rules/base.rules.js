export const baseRules = {
  'arrow-body-style': 'error',
  'dot-notation': 'error',
  'no-debugger': 'warn',
  'no-bitwise': 'error', // <--- to help catch cases where  I might have accidentally used & when actually wanting to use && instead.
  'no-invalid-this': 'error', // <--- alerts when you try using `this` keyword inside an arrow function (undefined).
  'no-template-curly-in-string': 'error', // <--- This rule warns when a regular string contains what looks like a template literal placeholder.
  'no-useless-computed-key': 'error', // <--- disallow un-needed computed key in objects, like: ['0']: 0 , ['0+1,234']: 0 , [0]: 0 , ['x']: 0 , ['x']() {}.
  'no-useless-rename': 'error', // <--- disallow same name rename: import { a as a } from './b.js';
  'no-useless-return': 'error',
  'no-var': 'off',
  'object-shorthand': 'error',
  'prefer-arrow-callback': ['error', { allowUnboundThis: true }],
  'prefer-destructuring': 'error',
  'prefer-const': 'error',
  'prefer-template': 'error',
  // #######
  // UNUSED:
  // #######
  // 'no-unused-vars': [
  //   'error',
  //   {
  //     vars: 'all',
  //     args: 'all',
  //     argsIgnorePattern: '(^_|^req$|^res$|^next$)',
  //     caughtErrors: 'all',
  //     caughtErrorsIgnorePattern: '^_',
  //     destructuredArrayIgnorePattern: '^_',
  //     ignoreRestSiblings: false,
  //     varsIgnorePattern: '^React$',
  //   },
  // ],
  // "array-element-newline": ["error", "consistent"], // <--- seriesDataExample.js found a case where it collides with prettier.
};
