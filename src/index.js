import { reactConfig } from './configs/react/index.js';
import { recommendedConfig } from './configs/recommended/index.js';

export default {
  meta: {
    name: 'eslint-plugin-ezlint',
    version: '1.2.1',
  },
  configs: {
    recommended: recommendedConfig,
    react: reactConfig,
  },
};
