export const tailwindRules = {
  // 'tailwindcss/no-arbitrary-value': 'off', // <-- already off by default! prohibits using w-[5px]
  'tailwindcss/classnames-order': 'error', // <--- this is the one that made me need a cjs and not a json! since the path is different.
  'tailwindcss/enforces-negative-arbitrary-values': 'error',
  'tailwindcss/enforces-shorthand': 'error',
  'tailwindcss/no-contradicting-classname': 'error', // <--- avoids situations where you wrote p-2 & p-3 under the same className.
  'tailwindcss/no-custom-classname': 'warn',
};
