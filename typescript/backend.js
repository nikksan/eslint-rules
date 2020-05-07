module.exports = {
  "parser": "@typescript-eslint/parser",
  "overrides": [
    {
      "files": ["*.ts"],
      "extends": [
        __dirname + "/common.js",
        __dirname + "/backend.js",
        "plugin:node/recommended"
      ],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-unused-vars": "error",
      }
    }
  ],
}