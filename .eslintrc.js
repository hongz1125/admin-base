module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
    'vue/multi-word-component-names': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-unused-expressions': 'off',
    'consistent-return': 'off',
  },
};
