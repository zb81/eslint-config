# Monorepo for my ESLint config

## ①

```bash
pnpm add eslint typescript @zb980921/eslint-config-ts -D
```

## ②

create `.eslintrc` :

```jsonc
{
  "extends": [
    "@zb980921/ts"
  ],
  "rules: {
    // add your rules
  }
}
```
