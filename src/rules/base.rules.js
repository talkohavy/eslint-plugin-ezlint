export const baseRules = {
  'array-bracket-spacing': ['error', 'never'],
  'arrow-body-style': 'error',
  'arrow-spacing': 'error',
  'comma-dangle': ['error', 'always-multiline'],
  'comma-spacing': ['error', { before: false, after: true }],
  'comma-style': ['error', 'last'],
  'computed-property-spacing': ['error', 'never'],
  'dot-location': ['error', 'property'],
  'dot-notation': 'error',
  'eol-last': 'error',
  'func-call-spacing': ['error', 'never'],
  'function-call-argument-newline': ['error', 'consistent'],
  'jsx-quotes': ['error', 'prefer-single'],
  'key-spacing': 'error', // <--- alerts when there's a space between an object key and the colon to the right of it.
  'keyword-spacing': 'error', // <--- alerts on missing space between '}else' or 'else if{'.
  'max-len': [
    'error',
    {
      code: 120,
      tabWidth: 2,
      ignoreComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
      ignoreUrls: true,
    },
  ],
  'no-debugger': 'warn',
  'new-parens': ['error', 'always'], // <--- turns this: "new Person" into this: "new Person()".
  'no-bitwise': 'error', // <--- to help catch cases where  I might have accidentally used & when actually wanting to use && instead.
  'no-extra-parens': ['error', 'functions'], // <--- turns this: const x = (1); into this: const x = 1;
  'no-floating-decimal': 'error', // <--- turns this: .2 and 5. into this: 0.2 and 5.
  'no-invalid-this': 'error', // <--- alerts when you try using `this` keyword inside an arrow function (undefined).
  'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
  'no-multi-spaces': ['error', { exceptions: { BinaryExpression: false, Property: false } }], // <--- "error & Property=false" is already what prettier is doing by default. Only now you would also be alerted about it by eslint.
  'no-tabs': ['error', { allowIndentationTabs: false }],
  'no-trailing-spaces': 'error',
  'no-template-curly-in-string': 'error', // <--- This rule warns when a regular string contains what looks like a template literal placeholder.
  'no-useless-computed-key': 'error', // <--- disallow un-needed computed key in objects, like: ['0']: 0 , ['0+1,234']: 0 , [0]: 0 , ['x']: 0 , ['x']() {}.
  'no-useless-rename': 'error', // <--- disallow same name rename: import { a as a } from './b.js';
  'no-useless-return': 'error',
  'no-var': 'off',
  'no-whitespace-before-property': 'error', // <--- turns this: obj. a into this: obj.a
  'object-curly-spacing': ['error', 'always'],
  'object-shorthand': 'error',
  'object-curly-newline': [
    'error',
    {
      ObjectExpression: { multiline: true, consistent: true },
      ObjectPattern: { multiline: true, consistent: true },
      ImportDeclaration: { multiline: true, consistent: true },
      ExportDeclaration: { multiline: true, consistent: true },
    },
  ],
  'operator-linebreak': [
    'error',
    'none',
    { overrides: { '?': 'ignore', ':': 'ignore', '&&': 'ignore', '=': 'ignore', '||': 'ignore' } },
  ],
  'padded-blocks': ['error', 'never'], // <--- alert about stuff that prettier fixes
  'prefer-arrow-callback': ['error', { allowUnboundThis: true }],
  'prefer-destructuring': 'error',
  'prefer-const': 'error',
  'prefer-template': 'error',
  quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
  'quote-props': ['error', 'as-needed'], // <--- just like prettier: if object keys don't need quotes - remove them!
  'rest-spread-spacing': 'error', // <--- just like prettier, warns about a space between the ... and the variable name itself.
  semi: 'error',
  'semi-spacing': 'error', // just like prettier, warns about a space before a semi-colon.
  'semi-style': 'error', // <--- just like prettier, semi-colon style is alerted.
  'space-before-blocks': 'error',
  'space-in-parens': ['error', 'never'],
  'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
  'space-infix-ops': 'error', // just like prettier, turns this: 'props'||'father' into this: 'props' || 'father', same with + sign, = sign, etc.
  'space-unary-ops': 'error', // <--- just like prettier, turns this: ++ foo into this: ++foo, same goes for foo --, + "3".
  'spaced-comment': 'error', // <--- just like prettier, removes trailing spaces at the end of comments.
  'template-curly-spacing': 'error', // <--- just like prettier, alerts when `hello, ${ people.name}!`; or when `hello, ${people.name }!`;
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
