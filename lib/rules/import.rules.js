export const importRules = {
  'import/no-duplicates': 'error',
  'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true, caseSensitiveStrict: true }],
  'import/newline-after-import': ['error', { count: 1, considerComments: true }],
  'import/first': 'error',
  'import/exports-last': 'error',
  'import/extensions': ['error', 'never', { js: 'always', ignorePackages: true }],
  'import/order': [
    'error',
    {
      pathGroups: [
        { pattern: 'react', group: 'builtin' },
        { pattern: '@*/**', group: 'internal' },
      ],
      pathGroupsExcludedImportTypes: ['react'],
      'newlines-between': 'never',
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
      alphabetize: { order: 'asc', caseInsensitive: true },
    },
  ],
  'sort-imports': [
    'error',
    {
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
      allowSeparatedGroups: false,
    },
  ],
};
