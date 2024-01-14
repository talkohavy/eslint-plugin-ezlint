export const baseRules = {
  'array-bracket-spacing': ['error', 'never'],
  'arrow-body-style': 'error',
  'comma-dangle': ['error', 'always-multiline'],
  'comma-spacing': ['error', { before: false, after: true }],
  'comma-style': ['error', 'last'],
  'computed-property-spacing': ['error', 'never'],
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
  'no-multiple-empty-lines': ['error', { max: 1 }],
  'no-tabs': ['error', { allowIndentationTabs: false }],
  'no-trailing-spaces': 'error',
  'no-multi-spaces': ['error', { exceptions: { Property: false } }],
  'no-var': 'off',
  'object-curly-spacing': ['error', 'always'],
  'object-shorthand': 'error',
  'prefer-arrow-callback': ['error', { allowUnboundThis: true }],
  'prefer-destructuring': 'error',
  'prefer-const': 'error',
  'prefer-template': 'error',
  quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
  'space-in-parens': ['error', 'never'],
  'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
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
};