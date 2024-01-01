export const typescriptRules = {
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      vars: 'all',
      args: 'all',
      argsIgnorePattern: '(^_|^req$|^res$|^next$)',
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      ignoreRestSiblings: false,
      varsIgnorePattern: '^React$',
    },
  ],
};
