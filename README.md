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

```json
{
    "plugins": ["ezlint"]
}
```

## 3. Rules

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

### - Rule 1: `array-bracket-spacing`

Rule's form:

```json
{
    "array-bracket-spacing": ["error", "never"],
}
```

Correct & incorrect code styles:

```js
// Turns this:
const arr = [ 'apple', 'banana' ];
// Into this:
const arr = ['apple', 'banana'];
```

**NOTE**
The combination of "error & never" is already what prettier is doing by default. Only now you would also be alerted about it by eslint.

---

### - Rule 2: `arrow-body-style`

Rule's form:

```json
{
    "arrow-body-style": "error",
}
```

Correct & incorrect code styles:

```js
// Turns this:
const arr = (value) => {
    return value
};
// Into this:
const arr = (value) => value;
```

---

### - Rule 3: `comma-dangle`

Rule's form:

```json
{
    "comma-dangle": ["error", "always-multiline"],
}
```

Correct & incorrect code styles:

```js
// Turns this:
const arr = {
  a: 'apple',
  b: 'banana'
};
// Into this:
const arr = {
  a: 'apple',
  b: 'banana',
};

// Turns this:
const arr = { a: 'apple', b: 'banana', };
// Into this:
const arr = { a: 'apple', b: 'banana' };

// Turns this:
const arr = ['apple', 'banana', ];
// Into this:
const arr = ['apple', 'banana'];

// Turns this:
function foo(bar, zar,) {}
// Into this:
function foo(bar, zar) {}
```

**NOTE:**

"error & always-multiline" is already what prettier is doing by default. Only now you would also be alerted about it by eslint. Could potentially collide with "trailingComma" rule of prettier.

---

### - Rule 4: `comma-spacing`

Rule's form:

```json
{
    "comma-spacing": ["error", { "before": false, "after": true }],
}
```

Correct & incorrect code styles:

```js
// Turns this:
function foo(bar  , zar) {}
// Into this:
function foo(bar, zar) {}

// Turns this:
const aaa = { a: 5 , b: 6 };
// Into this:
const aaa = { a: 5, b: 6 };

// Turns this:
const aaa = [5 , 6];
// Into this:
const aaa = [5, 6];
```

**NOTE:**

"error & before:false,after:true" is already what prettier is doing by default. Only now you would also be alerted about it by eslint.

---

### - Rule 5: `comma-style`

Rule's form:

```json
{
    "comma-style": ["error", "last"],
}
```

Correct & incorrect code styles:

```js
// Turns this:
var foo = ['apples'
           , 'oranges'];
// Into this:
var foo = ['apples', 'oranges'];

// Turns this:
function baz() {
  return {
    "a": 1
    ,b: 2
  };
}
// Into this:
function baz() {
  return {
    a: 1,
    b: 2
  };
}
```

**NOTE:**
"error & last" is already what prettier is doing by default. Only now you would also be alerted about it by eslint.

---

### - Rule 6: `computed-property-spacing`

Rule's form:

```json
{
    "computed-property-spacing": ["error", "never"],
}
```

Correct & incorrect code styles:

```js
// Turns this:
obj[foo ]
// Into this:
obj[foo]

// Turns this:
obj[ 'foo']
// Into this:
obj['foo']

// Turns this:
var x = { [ b ]: 7 }
// Into this:
var x = { [b]: 7 }
```

**NOTE:**

"error & never" is already what prettier is doing by default. Only now you would also be alerted about it by eslint.

---

### - Rule 7: `max-len`

Rule's form:

```json title=".eslintrc.json"
{
    "rules": {
        "max-len": [
            "error",
            {
              "code": 120,
              "tabWidth": 2,
              "ignoreComments": true,
              "ignoreStrings": true,
              "ignoreTemplateLiterals": true,
              "ignoreRegExpLiterals": true,
              "ignoreUrls": true
            }
        ],
    }
}
```

"error" could collide with prettier. The "max-len" rule was deprecated in ESLint v8.53.0.  
"code": make sure to keep "code" value in sync with prettier's "printWidth" value.
"tabWidth": defaults to 4.  
"ignoreComments": defaults to true. true value ignores all trailing comments and comments on their own line.

---

### - Rule 8: `no-constant-condition`

Rule's form:

```json title=".eslintrc.json"
{
    "rules": {
        "no-constant-condition": "off",
    }
}
```

Correct & incorrect code styles:

```js
// When set to "error", it marks the below code as an error (incorrect code):
if (true) {}.
// Setting it to "off" allows for this kind of behavior.
```

**NOTE:**
eslint/recommended sets this to "error" by default.

---

### - Rule 9: `no-debugger`

Rule's form:

```json title=".eslintrc.json"
{
    "rules": {
        "no-debugger": "warn",
    }
}
```

Correct & incorrect code styles:

```js
// Turns this:
// Into this:
```

**NOTE:**

eslint/recommended sets its value to "error" value by default. Disallow the use of the debugger keyword.

---

### - Rule 10: `no-multiple-empty-lines`

Rule's form:

```json title=".eslintrc.json"
{
    "rules": {
        "no-multiple-empty-lines": ["error", { "max": 1 }],
    }
}
```

Correct & incorrect code styles:

```js
// Turns this:
// Into this:
```

**NOTE:**

"error & max=1" is already what prettier is doing by default. Only now you would also be alerted about it by eslint.

---

### - Rule 11: `no-tabs`

Rule's form:

```json title=".eslintrc.json"
{
    "rules": {
        "no-tabs": ["error", { "allowIndentationTabs": false }],
    }
}
```

Correct & incorrect code styles:

```js
// Turns this:
// Into this:
```

"error" could collides with prettier's `useTabs=true`. Keep them in sync. That can be used just fine with Prettier as long as you don’t configure Prettier to indent using tabs, which I don't, so we're good. Even if you use the prettier rule of useTabs:true, you can still use this rule with "error", just set allowIndentationTabs to true.

---

### - Rule 12: `no-trailing-spaces`

Rule's form:

```json title=".eslintrc.json"
{
    "rules": {
        "no-trailing-spaces": "error",
    }
}
```

Correct & incorrect code styles:

```js
// Turns this:
// Into this:
```

"error" is already what prettier is doing by default. Only now you would also be alerted about it by eslint.

---

### - Rule 13: `no-multi-spaces`

Rule's form:

```json title=".eslintrc.json"
{
    "rules": {
        "no-multi-spaces": ["error", { "exceptions": { "Property": false } }],
    }
}
```

Correct & incorrect code styles:

```js
// Turns this:
// Into this:
```

"error & Property=false" is already what prettier is doing by default. Only now you would also be alerted about it by eslint.

---

### - Rule 14: `no-unused-vars`

Rule's form:

```json title=".eslintrc.json"
{
    "rules": {
        "no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "all",
                "argsIgnorePattern": "(^_|^req$|^res$|^next$)",
                "caughtErrors": "all",
                "caughtErrorsIgnorePattern": "^_",
                "destructuredArrayIgnorePattern": "^_",
                "ignoreRestSiblings": false,
                "varsIgnorePattern": "^React$"
            }
        ],
    }
}
```

Correct & incorrect code styles:

```js
// Turns this:
// Into this:
```

**NOTE:**

"vars": Should global variables be checked too? Or just the local ones? Options are: "all" | "local". "all" checks all variables for usage, including those in the global scope. This is the default setting. "local" checks only that locally-declared variables are used but will allow global variables to be unused.

"args": Should all arguments of a function be used? Options are: "all" | "after-used" | "none". "after-used" - unused positional arguments that occur before the last used argument will not be checked, but all named arguments and all positional arguments after the last used argument will be checked. "all" - all named arguments must be used. "none" - do not check arguments.

"caughtErrors": In a try/catch block, are you using the error object? Options are: "all" | "none" (default). "all" - error argument must be used. "none" - do not check the error object.

"destructuredArrayIgnorePattern": When destructuring an array like so: const [first, _iAmUnused, third] = arr;

"ignoreRestSiblings": If true, then when doing : const { someVar, ...rest } = obj; someVar will NOT be marked as unused.

---

### - Rule 15: `object-curly-spacing`

Rule's form:

```json title=".eslintrc.json"
{
    "rules": {
        "object-curly-spacing": ["error", "always"],
    }
}
```

Correct & incorrect code styles:

```js
// Turns this:
// Into this:
```

**NOTE:**

"error & always" is already what prettier is doing by default. Only now you would also be alerted about it by eslint. Turns this {a:1} into this { a: 1 }.

---

### - Rule 16: `object-shorthand`

Rule's form:

```json title=".eslintrc.json"
{
    "rules": {
        "object-shorthand": "error",
    }
}
```

Correct & incorrect code styles:

```js
// Turns this:
const { lastName: lastName } = obj;
// Into this:
const { lastName } = obj;
```

**NOTE:**

---

### - Rule 17: `prefer-arrow-callback`

Rule's form:

```json title=".eslintrc.json"
{
    "rules": {
        "prefer-arrow-callback": ["error", { "allowUnboundThis": true }],
    }
}
```

Correct & incorrect code styles:

```js
// Turns this:
foo(function(a) { return a; })
// Into this:
foo((a) => a)
```

**NOTE:**

"error" could collide with prettier. The collision occurs when the "arrow-body-style" eslint rule is set to "error" and the "arrowParens" prettier rule set to "avoid". However, since my "arrowParens" rule is set to "always", we're good. There's no collision.

---

### - Rule 18: `prefer-destructuring`

Rule's form:

```json title=".eslintrc.json"
{
    "rules": {
        "prefer-destructuring": "error",
    }
}
```

Correct & incorrect code styles:

```js
// Turns this:
const aaa = props.aaa;
// Into this:
const { aaa } = props;
```

---

### - Rule 19: `prefer-const`

Rule's form:

```json title=".eslintrc.json"
{
    "rules": {
        "prefer-const": "error",
    }
}
```

Correct & incorrect code styles:

```js
// Turns this:
// Into this:
// <--- turns this "let i = 3" into this "const i = 3".
```

---

### - Rule 20: `prefer-template`

Rule's form:

```json title=".eslintrc.json"
{
    "rules": {
        "prefer-template": "error",
    }
}
```

Correct & incorrect code styles:

```js
// Turns this:
const aaa = name + value;
// Into this:
const aaa = `${name}${value}`;
```

---

### - Rule 21: `quotes`

Rule's form:

```json title=".eslintrc.json"
{
    "rules": {
        "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals":  false }],
    }
}
```

Correct & incorrect code styles:

```js
// Turns this:
// Into this:
```

**NOTE:**

Force single quotes. "error" could collide with prettier. This rule was deprecated in ESLint v8.53.0.

"avoidEscape": Setting it to false would see this as an issue: "a string containing 'single' quotes", when it actually isn't. So set it on true.

"allowTemplateLiterals": Disallow the use of back ticks for strings who don't either: A. include a param inside. B. break into a new line.

---

### - Rule 22: `space-in-parens`

Rule's form:

```json title=".eslintrc.json"
{
    "rules": {
        "space-in-parens": ["error", "never"],
    }
}
```

Correct & incorrect code styles:

```js
// Turns this:
var x = ( 1 + 2 ) * 3;
// Into this:
var x = (1 + 2) * 3;

// Turns this:
function foo(n  ) {}
// Into this:
function foo(n) {}

// Turns this:
function foo(  n) {}
// Into this:
function foo(n) {}
```

---

### - Rule 23: `space-before-function-paren`

Rule's form:

```json
{
    "space-before-function-paren": ["error", "never"],
}
```

Correct & incorrect code styles:

```js
// Turns this:
function foo (n) {}
// Into this:
function foo(n) {}
```
