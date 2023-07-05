# Monorepo for my ESLint config

Packages:
- @zb81/eslint-config-basic

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
