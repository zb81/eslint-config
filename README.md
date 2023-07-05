# Monorepo for my ESLint config

Packages:
- @zb81/eslint-config-basic
- @zb81/eslint-config-ts
- @zb81/eslint-config-vue2
- @zb81/eslint-config-vue
- @zb81/eslint-config-react

## Usage

### ①

```bash
pnpm add eslint typescript @zb81/eslint-config-ts -D
```

### ②

create `.eslintrc` :

```jsonc
{
  "extends": [
    "@zb81/ts"
  ],
  "rules: {
    // add your rules
  }
}
```
