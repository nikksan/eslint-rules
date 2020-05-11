module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    "airbnb",
    __dirname + "/../common.js",
  ],
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
    "es6": true
  },
  "plugins": [
    "react",
    "jsx-a11y"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "globals": {
    "zE": false
  },
  "overrides": [
    {
      "files": ['*.ts', '*.tsx'],
      "extends": ['plugin:@typescript-eslint/recommended'],
      "rules": {
        "@typescript-eslint/explicit-module-boundary-types": ["error"],
        "@typescript-eslint/explicit-function-return-type": "off",
      }
    }
  ],
  "rules": {
    "import/imports-first": "off",
    "import/newline-after-import": "off",
    "import/no-dynamic-require": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-named-as-default": "off",
    "import/no-unresolved": [
      "error",
      {
        "ignore": [
          "ROOT/config.json",
          "APP/routePaths",
          "ui-kit"
        ]
      }
    ],
    "import/no-webpack-loader-syntax": "off",
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "no-restricted-imports": [
      "error", {
      "paths": [
        {
          "name": "react-router-dom",
          "importNames": ["Link"],
          "message": "Link is restricted. Please use LocalizedLink from views/i18n/LocalizedLink"
        },
        {
          "name": "connected-react-router/immutable",
          "importNames": ["push"],
          "message": "push is restricted. Please use localizedPush from views/i18n/utils/localizedPush"
        }
      ]
    }],
    "jsx-a11y/anchor-is-valid": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "jsx-a11y/heading-has-content": "off",
    "jsx-a11y/label-has-associated-control": "error",
    "jsx-a11y/mouse-events-have-key-events": "error",
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/role-supports-aria-props": "error",

    "jsx-quotes": [ "error", "prefer-double" ],

    "class-methods-use-this": "off",
    "max-len": "off",
    "no-plusplus": "off",
    "no-restricted-globals": [ "error", "event", "fdescribe" ],
    "prefer-destructuring": "off",
    "prefer-promise-reject-errors": "off",

    "react/button-has-type": [ "error", { "button": true, "submit": true, "reset": true } ],
    "react/default-props-match-prop-types": [ "error", { "allowRequiredDefaults": true } ],
    "react/destructuring-assignment": "off",
    "react/forbid-prop-types": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/require-extension": "off",
    "react/self-closing-comp": "off",

    "react/jsx-closing-tag-location": "off",
    "react/jsx-filename-extension": [ "off", { "ignore": [ "ui-kit" ] } ],
    "react/jsx-first-prop-new-line": [ "error", "multiline" ],
    "react/jsx-fragments": [ "error", "element" ],
    "react/jsx-indent": "off",
    "react/jsx-no-target-blank": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-tag-spacing": [
      "error",
      {
        "closingSlash": "never",
        "beforeSelfClosing": "always",
        "afterOpening": "never",
        "beforeClosing": "never"
      }
    ],
    "react/jsx-wrap-multilines": "off",
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "./internals/webpack/webpack.prod.babel.js"
      }
    }
  }
};
