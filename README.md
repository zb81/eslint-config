# Monorepo for my ESLint config

## ①

```bash
pnpm add eslint @zb980921/eslint-config-basic -D

# or

npm install eslint @zb980921/eslint-config-basic -D
```

## ②

create `.eslintrc` , add codes

```
{
  "extends": [
    "@zb980921/basic"
  ],
  "rules: {
    // add your rules
  }
}
```
