/**
 * https://eslint.vuejs.org/rules/
 */
module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    '@zb81/ts',
  ],
  rules: {
    'vue/html-self-closing': ['warn', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    }],
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-deprecated-v-bind-sync': 'off',
    'vue/no-deprecated-v-on-native-modifier': 'off',
    'vue/no-deprecated-router-link-tag-prop': 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/no-deprecated-dollar-listeners-api': 'off',
  },
}
