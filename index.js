const baseRules = require('./rules');

const backend = {
  "parser": "@typescript-eslint/parser",
  "env": {
    "node": true,
    "es6": true,
    "jest": true
  },
  "plugins": ["node"],
  "extends": ["eslint:recommended", "plugin:node/recommended"],
  "rules": {
    ...baseRules,
  	"node/exports-style": ["error", "module.exports"],
    "node/no-extraneous-import": "error",
    "node/no-unpublished-require": 0,
    "no-useless-catch": 0,
    "require-atomic-updates": 0,
  },
  "overrides": [
    {
      "files": ["*.ts"],
      "extends": ["plugin:@typescript-eslint/recommended"],
      "rules": {
        "node/no-missing-import": 0,
        "node/no-unsupported-features/es-syntax": 0,
        "node/no-missing-require": 0,
        "node/no-unpublished-import": 0,
      }
    }
  ],
};

const frontend = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    "airbnb",
    "eslint:recommended"
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
    ...baseRules,
    "import/imports-first": 0,
    "import/newline-after-import": 0,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": 0,
    "import/no-unresolved": [
      2,
      {
        "ignore": [
          "ROOT/config.json",
          "APP/routePaths",
          "ui-kit"
        ]
      }
    ],
    "import/no-webpack-loader-syntax": 0,
    "import/prefer-default-export": 0,
    "import/extensions": [
      2,
      "ignorePackages",
      {
        "js": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "no-restricted-imports": [
      2, {
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
    "jsx-a11y/anchor-is-valid": 2,
    "jsx-a11y/aria-props": 2,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/control-has-associated-label": 0,
    "jsx-a11y/heading-has-content": 0,
    "jsx-a11y/label-has-associated-control": 2,
    "jsx-a11y/mouse-events-have-key-events": 2,
    "jsx-a11y/role-has-required-aria-props": 2,
    "jsx-a11y/role-supports-aria-props": 2,

    "jsx-quotes": [ 2, "prefer-double" ],

    "class-methods-use-this": 0,
    "max-len": 0,
    "no-plusplus": 0,
    "no-restricted-globals": [ 2, "event", "fdescribe" ],
    "prefer-destructuring": 0,
    "prefer-promise-reject-errors": 0,

    "react/button-has-type": [ 2, { "button": true, "submit": true, "reset": true } ],
    "react/default-props-match-prop-types": [ 2, { "allowRequiredDefaults": true } ],
    "react/destructuring-assignment": 0,
    "react/forbid-prop-types": 0,
    "react/prop-types": 0,
    "react/require-default-props": 0,
    "react/require-extension": 0,
    "react/self-closing-comp": 0,

    "react/jsx-closing-tag-location": 0,
    "react/jsx-filename-extension": [ 0, { "ignore": [ "ui-kit" ] } ],
    "react/jsx-first-prop-new-line": [ 2, "multiline" ],
    "react/jsx-fragments": [ 2, "element" ],
    "react/jsx-indent": 0,
    "react/jsx-no-target-blank": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-tag-spacing": [
      2,
      {
        "closingSlash": "never",
        "beforeSelfClosing": "always",
        "afterOpening": "never",
        "beforeClosing": "never"
      }
    ],
    "react/jsx-wrap-multilines": 0,
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "./internals/webpack/webpack.prod.babel.js"
      }
    }
  }
};

module.exports = {
  backend,
  frontend
};
