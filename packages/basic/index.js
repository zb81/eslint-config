module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },

  // 继承的配置
  extends: [
    'standard',
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:markdown/recommended',
  ],

  // 插件
  plugins: ['html'],

  // 文件、文件夹的忽略匹配规则
  ignorePatterns: [
    '.cache',
    '*.min.*',
    'CHANGELOG.md',
    'dist',
    'LICENSE.*',
    'public',
    'temp',
  ],

  // 覆盖默认配置
  overrides: [
    // json、json5文件
    {
      files: ['*.json', '*.jsonc', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'quotes': ['error', 'double'],
        'quote-props': ['error', 'always'],
        'comma-dangle': ['error', 'never'],
      },
    },

    // package.json文件
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'description',
              'keywords',
              'license',
              'repository',
              'funding',
              'author',
              'type',
              'files',
              'exports',
              'main',
              'module',
              'unpkg',
              'bin',
              'scripts',
              'husky',
              'lint-staged',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'devDependencies',
              'eslintConfig',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
        ],
      },
    },

    // markdown代码块
    {
      files: ['**/*.md/*.*'],
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        'no-console': 'off',
        'no-unused-expressions': 'off',
        'import/no-unresolved': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
      },
    },
  ],

  // 重写规则
  rules: {
    /**
     * import相关
     * 具体规则可参考eslint-plugin-import文档
     * https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules
     */
    // 导入语句必须按照顺序书写
    'import/order': 'error',
    // 导入语句必须写在文件头部
    'import/first': 'error',
    // 禁止导出可变的值
    'import/no-mutable-exports': 'error',
    // 未解析成功的导入报错
    'import/no-unresolved': 'off',
    // 导入语句禁止出现绝对路径
    'import/no-absolute-path': 'error',
    'import/no-named-as-default-member': 'off',

    /**
     * 通用配置
     * 具体规则说明可参考ESLint文档
     * https://cn.eslint.org/docs/rules/
     */
    // 分号
    'semi': ['error', 'never'],
    // 语句块的花括号
    'curly': ['error', 'all'],
    // 引号
    'quotes': ['error', 'single'],
    // 对象属性的引号，保持一致
    'quote-props': ['error', 'consistent-as-needed'],
    // 变量未使用
    'no-unused-vars': 'warn',
    // 函数参数赋值
    'no-param-reassign': 'off',
    // 数组中括号空格
    'array-bracket-spacing': ['error', 'never'],
    // 大括号风格，if-else中的else语句必须另起一行，允许开括号和闭括号在同一行
    'brace-style': ['error', 'stroustrup', { allowSingleLine: false }],
    // 开括号后、闭括号前必须有空格
    'block-spacing': ['error', 'always'],
    // 驼峰命名，关闭
    'camelcase': 'off',
    // 逗号之前不允许空格，逗号之后必须跟一个空格
    'comma-spacing': ['error', { before: false, after: true }],
    // 逗号必须写在行尾
    'comma-style': ['error', 'last'],
    // 拖尾逗号，当最后一个属性或元素与闭括号在不同的行时，需要逗号
    'comma-dangle': ['error', 'always-multiline'],
    // 条件中使用常量表达式
    'no-constant-condition': 'warn',
    // 禁止出现debugger
    'no-debugger': 'error',
    // 禁止console.log，可以自定义一个Console类，判断当前是否在开发环境，再输出
    'no-console': ['error', { allow: ['warn', 'error'] }],
    // 禁止在条件语句中出现赋值操作符
    'no-cond-assign': ['error', 'always'],
    // 函数标识符和调用之间的空格，自动修复
    'func-call-spacing': ['off', 'never'],
    // 对象字面量的键和值之间的空格，冒号之前不用加，冒号之后必须加
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    // 缩进，使用2个空格
    'indent': ['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
    // 禁用的语法，列表中的每个字符串都是一个AST选择器
    // 关于AST可以参考：https://astexplorer.net/
    'no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    // 对象字面量的花括号内必须有空格
    'object-curly-spacing': ['error', 'always'],
    // 在async函数中不必要的return await
    'no-return-await': 'off',
    // 在函数圆括号之前禁用空格
    'space-before-function-paren': ['error', 'never'],
    // 注释空格
    'spaced-comment': ['error', 'always', {
      line: {
        markers: ['/'],
        exceptions: ['/', '#'],
      },
      block: {
        markers: ['!'],
        exceptions: ['*'],
        balanced: true,
      },
    }],

    /**
     * es6相关
     * 具体规则说明可参考
     * https://cn.eslint.org/docs/rules/#ecmascript-6
     */
    'no-var': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': 'error',
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'generator-star-spacing': 'off',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],

    /**
     * 最佳实践
     */
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'consistent-return': 'off',
    'complexity': ['off', 11],
    'eqeqeq': ['error', 'smart'],
    'no-alert': 'error',
    'no-case-declarations': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-with': 'error',
    'no-void': 'error',
    'no-useless-escape': 'off',
    'vars-on-top': 'error',
    'require-await': 'off',
    'no-return-assign': 'off',
    // 换行符必须写在行首
    'operator-linebreak': ['error', 'before'],

    /**
     * 其它
     * eslint-comments配置参考：
     * https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/
     */
    'eslint-comments/disable-enable-pair': 'off',
  },
}
