# eslint-plugin-ezlint

This plugin provides a ✨PERFECT✨ match with the following prettier settings:

```js title="prettier.config.js | .prettierrc.js | prettier.config.mjs | .prettierrc.mjs"

const config = {
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'auto',
  printWidth: 120,
  embeddedLanguageFormatting: 'off',
  quoteProps: 'as-needed',
  overrides: [
    {
      files: ['*.mts', '*.cts', '*.ts', '*.d.ts', '*.js', '*.jsx'],
      options: { parser: 'typescript' },
    },
    {
      files: ['*.json'],
      options: { parser: 'json' },
    },
  ],
};

export default config;
```

In fact, they go so well together, in a way that even hardcoded decisions made by prettier (which aren't configurable by you the developer at all) are caught and flagged by Eslint. I searched for every eslint rule I could possibly find which mimics prettier's code-of-conduct under the hood, so that if a file should be formatted by prettier? There's a 99% chance this eslint config will flag and warn you about it.

In prettier, some configurations _are_ controlled by you. In the prettierrc config above I mentioned a specific set of prettier rules and what their **VALUE MUST BE**, in order for the two to work perfectly together.  
As you probably know, eslint & prettier _can_ collide, and have rule conflict. So this is just to avoid exactly these type of situations. If you find the above rules acceptable by you, you may go ahead and use this plugin with 100% certainty of 0 conflicts.

## 1. Installation

You'll first need to install [ESLint](https://eslint.org/):

With `npm`:

```sh
npm i -D eslint
```

With `pnpm`:

```sh
pnpm add -D eslint
```

With `yarn`:

```sh
yarn add -D eslint
```

Next, install `eslint-plugin-ezlint`:

With `npm`:

```sh
npm install -D eslint-plugin-ezlint
```

With `pnpm`:

```sh
pnpm add -D eslint-plugin-ezlint
```

With `yarn`:

```sh
yarn install -D eslint-plugin-ezlint
```

## 2. Usage

Add `ezlint` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json title=".eslintrc.json"
{
    "extends": ["plugin:ezlint/recommended"]
}
```

## 3. Behind the scenes - ezlint

### Parser

By default, eslint uses "espree" as its parser. It behaves "ok" for the most part, but it has trouble with:

- importing files with extensions: `.cts`, `.mts`, `.ts`, `.tsx`, `.d.cts`, `.d.mts`, `.d.ts`.
- using paths defined in tsconfig.json
- resolving @types/\* definitions over plain .js/.jsx
- imports/exports fields support in package.json

That's why under the hood **ezlint** uses `eslint-import-resolver-typescript`, to mitigate all of the points mentioned above.

## 4. Rules

**<font size="5">Table of Contents</font>**

- [- Rule 1: `array-bracket-spacing`](#rule-1-array-bracket-spacing)
- [- Rule 2: `arrow-body-style`](#rule-2-arrow-body-style)
- [- Rule 3: `comma-dangle`](#rule-3-comma-dangle)
- [- Rule 4: `comma-spacing`](#rule-4-comma-spacing)
- [- Rule 5: `comma-style`](#rule-5-comma-style)
- [- Rule 6: `computed-property-spacing`](#rule-6-computed-property-spacing)
- [- Rule 7: `max-len`](#rule-7-max-len)
- [- Rule 8: `no-constant-condition`](#rule-8-no-constant-condition)
- [- Rule 9: `no-debugger`](#rule-9-no-debugger)
- [- Rule 10: `no-multiple-empty-lines`](#rule-10-no-multiple-empty-lines)
- [- Rule 11: `no-tabs`](#rule-11-no-tabs)
- [- Rule 12: `no-trailing-spaces`](#rule-12-no-trailing-spaces)
- [- Rule 13: `no-multi-spaces`](#rule-13-no-multi-spaces)
- [- Rule 14: `no-unused-vars`](#rule-14-no-unused-vars)
- [- Rule 15: `object-curly-spacing`](#rule-15-object-curly-spacing)
- [- Rule 16: `object-shorthand`](#rule-16-object-shorthand)
- [- Rule 17: `prefer-arrow-callback`](#rule-17-prefer-arrow-callback)
- [- Rule 18: `prefer-destructuring`](#rule-18-prefer-destructuring)
- [- Rule 19: `prefer-const`](#rule-19-prefer-const)
- [- Rule 21: `quotes`](#rule-21-quotes)
- [- Rule 22: `space-in-parens`](#rule-22-space-in-parens)
- [- Rule 23: `space-before-function-paren`](#rule-23-space-before-function-paren)

<br/>

---

The rules are divided into 6 groups:

- base Rules
- stylistic Rules
- typescript Rules
- export Rules
- import Rules
- jsdoc Rules

### - A. Base Rules

- `arrow-body-style`
- `dot-notation`
- `no-debugger`
- `no-bitwise`
- `no-invalid-this`
- `no-template-curly-in-string`
- `no-useless-computed-key`
- `no-useless-rename`
- `no-useless-return`
- `object-shorthand`
- `prefer-arrow-callback`
- `prefer-destructuring`
- `prefer-const`
- `prefer-template`

### - B. Stylistic Rules

- `@stylistic/array-bracket-spacing`
- `@stylistic/arrow-spacing`
- `@stylistic/comma-dangle`
- `@stylistic/comma-spacing`
- `@stylistic/comma-style`
- `@stylistic/computed-property-spacing`
- `@stylistic/dot-location`
- `@stylistic/eol-last`
- `@stylistic/func-call-spacing`
- `@stylistic/function-call-argument-newline`
- `@stylistic/jsx-quotes`
- `@stylistic/key-spacing`
- `@stylistic/keyword-spacing`
- `@stylistic/max-len`
- `@stylistic/new-parens`
- `@stylistic/no-extra-parens`
- `@stylistic/no-floating-decimal`
- `@stylistic/no-multi-spaces`
- `@stylistic/no-multiple-empty-lines`
- `@stylistic/no-tabs`
- `@stylistic/no-trailing-spaces`
- `@stylistic/no-whitespace-before-property`
- `@stylistic/object-curly-spacing`
- `@stylistic/object-curly-newline`
- `@stylistic/operator-linebreak`
- `@stylistic/padded-blocks`
- `@stylistic/quote-props`
- `@stylistic/quotes`
- `@stylistic/rest-spread-spacing`
- `@stylistic/semi`
- `@stylistic/semi-spacing`
- `@stylistic/semi-style`
- `@stylistic/space-before-blocks`
- `@stylistic/space-before-function-paren`
- `@stylistic/space-in-parens`
- `@stylistic/space-infix-ops`
- `@stylistic/space-unary-ops`
- `@stylistic/spaced-comment`
- `@stylistic/template-curly-spacing`

### - C. Typescript Rules

- `@typescript-eslint/no-unused-vars`
- all of typescript's eslint recommended rules, except:

• `@typescript-eslint/no-explicit-any`  
• `'@typescript-eslint/ban-ts-comment`

### - D. Export Rules

- `sort-exports/sort-exports`

### - E. Import Rules

- `import/no-duplicates`
- `import/no-unresolved`
- `import/newline-after-import`
- `import/first`
- `import/exports-last`
- `import/extensions`
- `import/order`
- `sort-imports`

### - F. Jsdoc Rules

- `jsdoc/check-access`
- `jsdoc/check-alignment`
- `jsdoc/check-indentation`
- `jsdoc/check-line-alignment`
- `jsdoc/check-param-names`
- `jsdoc/check-property-names`
- `jsdoc/check-syntax`
- `jsdoc/check-tag-names`
- `jsdoc/check-types`
- `jsdoc/check-values`
- `jsdoc/empty-tags`
- `jsdoc/implements-on-classes`
- `jsdoc/informative-docs`
- `jsdoc/match-description`
- `jsdoc/multiline-blocks`
- `jsdoc/no-bad-blocks`
- `jsdoc/no-blank-block-descriptions`
- `jsdoc/no-defaults`
- `jsdoc/no-multi-asterisks`
- `jsdoc/require-asterisk-prefix`
- `jsdoc/require-hyphen-before-param-description`
- `jsdoc/require-param`
- `jsdoc/require-param-name`
- `jsdoc/require-param-type`
- `jsdoc/require-property`
- `jsdoc/require-property-name`
- `jsdoc/require-property-type`
- `jsdoc/require-returns-check`
- `jsdoc/require-returns-type`
- `jsdoc/require-throws`
- `jsdoc/require-yields`
- `jsdoc/require-yields-check`
- `jsdoc/sort-tags`
- `jsdoc/tag-lines`
- `jsdoc/valid-types`
