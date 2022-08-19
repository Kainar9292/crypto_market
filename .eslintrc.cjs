module.exports = {
  env: {
    es2021: true
  },
  extends: [
    '@antfu/eslint-config-vue'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    /* TYPESCRIPT */
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    // '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',

    'no-console': 'off',
    'linebreak-style': ['error', 'windows'], // windows, unix
    'semi': ['error', 'always'],
    // 'curly': ['error', 'all'],
    'eslint-comments/no-unlimited-disable': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 2,
    }],

    'vue/attributes-order': ['error', {
      alphabetical: true,
    }],
    'vue/component-tags-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: false,
    }],
  }
}
