module.exports = {
  "parser": "@typescript-eslint/parser",
  "overrides": [
    {
      "files": ["*.ts"],
      "extends": [
        __dirname + "/../common.js",
        __dirname + "/../backend.js",
        "plugin:@typescript-eslint/recommended"
      ],
      "rules": {
        "node/no-missing-import": "off",
        "node/no-unsupported-features/es-syntax": "off",
        "node/no-missing-require": "off",
        "node/no-unpublished-import": "off",
        "no-undef": "off",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/explicit-module-boundary-types": "error"
      }
    }
  ],
}
