import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactConfig from './react.js';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: pluginJs.configs.recommended,
  allConfig: tseslint.configs.recommended,
});

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...reactConfig,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
  },
  ...compat.config({}),
];
