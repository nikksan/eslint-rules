const backend = require('../backend');

module.exports = {
  ...backend,
  "parser": "@typescript-eslint/parser",
  "overrides": [
    {
      "files": ["*.ts"],
      "extends": ["plugin:@typescript-eslint/recommended"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-unused-vars": "error",
      }
    }
  ],
}