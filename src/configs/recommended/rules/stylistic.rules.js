export const stylisticRules = {
  '@stylistic/array-bracket-spacing': ['error', 'never'],
  '@stylistic/arrow-spacing': 'error',
  '@stylistic/comma-dangle': ['error', 'always-multiline'],
  '@stylistic/comma-spacing': ['error', { before: false, after: true }],
  '@stylistic/comma-style': ['error', 'last'],
  '@stylistic/computed-property-spacing': ['error', 'never'],
  '@stylistic/dot-location': ['error', 'property'],
  '@stylistic/eol-last': 'error',
  '@stylistic/func-call-spacing': ['error', 'never'],
  '@stylistic/function-call-argument-newline': ['error', 'consistent'],
  '@stylistic/jsx-quotes': ['error', 'prefer-single'],
  '@stylistic/key-spacing': 'error', // <--- alerts when there's a space between an object key and the colon to the right of it.
  '@stylistic/keyword-spacing': 'error', // <--- alerts on missing space between '}else' or 'else if{'.
  '@stylistic/max-len': [
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
  '@stylistic/new-parens': ['error', 'always'], // <--- turns this: "new Person" into this: "new Person()".
  '@stylistic/no-extra-parens': ['error', 'functions'], // <--- turns this: const x = (1); into this: const x = 1;
  '@stylistic/no-floating-decimal': 'error', // <--- turns this: .2 and 5. into this: 0.2 and 5.
  '@stylistic/no-multi-spaces': ['error', { exceptions: { BinaryExpression: false, Property: false } }], // <--- "error & Property=false" is already what prettier is doing by default. Only now you would also be alerted about it by eslint.
  '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
  '@stylistic/no-tabs': ['error', { allowIndentationTabs: false }],
  '@stylistic/no-trailing-spaces': 'error',
  '@stylistic/no-whitespace-before-property': 'error', // <--- turns this: obj. a into this: obj.a
  '@stylistic/object-curly-spacing': ['error', 'always'],
  '@stylistic/object-curly-newline': [
    'error',
    {
      ObjectExpression: { multiline: true, consistent: true },
      ObjectPattern: { multiline: true, consistent: true },
      ImportDeclaration: { multiline: true, consistent: true },
      ExportDeclaration: { multiline: true, consistent: true },
    },
  ],
  '@stylistic/operator-linebreak': [
    'error',
    'none',
    { overrides: { '?': 'ignore', ':': 'ignore', '&&': 'ignore', '=': 'ignore', '||': 'ignore' } },
  ],
  '@stylistic/padded-blocks': ['error', 'never'], // <--- alert about stuff that prettier fixes
  '@stylistic/quote-props': ['error', 'as-needed'], // <--- just like prettier: if object keys don't need quotes - remove them!
  '@stylistic/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
  '@stylistic/rest-spread-spacing': 'error', // <--- just like prettier, warns about a space between the ... and the variable name itself.
  '@stylistic/semi': 'error',
  '@stylistic/semi-spacing': 'error', // just like prettier, warns about a space before a semi-colon.
  '@stylistic/semi-style': 'error', // <--- just like prettier, semi-colon style is alerted.
  '@stylistic/space-before-blocks': 'error',
  '@stylistic/space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
  '@stylistic/space-in-parens': ['error', 'never'],
  '@stylistic/space-infix-ops': 'error', // just like prettier, turns this: 'props'||'father' into this: 'props' || 'father', same with + sign, = sign, etc.
  '@stylistic/space-unary-ops': 'error', // <--- just like prettier, turns this: ++ foo into this: ++foo, same goes for foo --, + "3".
  '@stylistic/spaced-comment': 'error', // <--- just like prettier, removes trailing spaces at the end of comments.
  '@stylistic/template-curly-spacing': 'error', // <--- just like prettier, alerts when `hello, ${ people.name}!`; or when `hello, ${people.name }!`;
};
