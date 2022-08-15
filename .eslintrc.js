module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint-config-react-typescript',
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      "files": ["*.ts", "*.mts", "*.cts", "*.tsx","*.jsx"]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    'react'
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',"@typescript-eslint/explicit-function-return-type": "off"
  }
}
