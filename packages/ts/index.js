// eslint-disable-next-line @typescript-eslint/no-var-requires
const basic = require('@zb81/eslint-config-basic')

module.exports = {
  extends: [
    '@zb81/basic',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: basic.overrides,
  rules: {
    'import/named': 'off',

    // 禁用分号
    '@typescript-eslint/semi': ['error', 'never'],
    // 是否禁用ts注释指令
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    // 接口和类型中成员属性分隔样式
    '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
    // 类型注解前的空格
    '@typescript-eslint/type-annotation-spacing': ['error', {}],
    // 使用 `import type from 'xxx'` 导入类型
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }],
    // 使用interface关键字定义类型
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    // 使用 `Record<string, unknown>` 代替 `[key: string]: unknown`
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    // 优先使用 `@ts-expect-error` 注释指令
    '@typescript-eslint/prefer-ts-expect-error': 'error',

    // Override JS
    'no-useless-constructor': 'off',
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2, {
      ignoredNodes: [
        'FunctionExpression > .params[decorators.length > 0]',
        'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
        'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
      ],
    }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', 'stroustrup', { allowSingleLine: false }],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],

    // off
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-namespace': 'off',
  },
}
