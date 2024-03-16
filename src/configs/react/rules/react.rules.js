export const reactRules = {
  'react/no-unescaped-entities': 'off', // <--- set as "error" in recommended.
  'react/prop-types': 'off', // <--- set as "error" in recommended.
  'react/button-has-type': 'error',
  'react/function-component-definition': 'error',
  'react/hook-use-state': 'error', // <--- returned variable names should match the pattern of isIdiot setIsIdiot.
  'react/no-danger': 'error',
  'react/no-object-type-as-default-prop': 'error',
  'react/no-unstable-nested-components': 'error',
  'react/self-closing-comp': ['error', { component: true, html: true }], // <--- turns this: <div></div> into this: <div /> when there is nothing inside. By default, both component & html are set to true.
  'react/jsx-boolean-value': 'error',
  'react/jsx-curly-brace-presence': 'error', // <--- turns this: <div>{'Hello World'}</div> into this: <div>Hello World</div>
  'react/jsx-no-useless-fragment': 'error',
  'react/jsx-no-constructed-context-values': 'error',
  'react/jsx-filename-extension': [
    // The rule relates to .jsx file and to jsx code.
    'error',
    {
      allow: 'always', // <--- defaults to "always". Options are: ['as-needed', 'always']. as-needed means, if your file's extension is jsx? then it must contain JSX syntax! otherwise it would be considered an error. "always" however doesn't give a fuck. It allows all files to have a .jsx extension, whether they have JSX in them or not.
      extensions: ['.jsx', '.tsx'], // <--- defaults to [".jsx"]. Decides which extensions can contain JSX syntax.
    },
  ],
};
