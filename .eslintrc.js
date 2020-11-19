define(function (require, exports, module) {

    module.exports = {
        "eslint.alwaysShowStatus": true,
        "eslint.autoFixOnSave": true,
        "eslint.provideLintTask": true,
        "env": {
            "browser": true,
            "es2021": true

        },
        "extends": [
            "airbnb",
            "eslint:recommended",
            "plugin:react/recommended"
        ],

        "parserOptions": {
            "ecmaFeatures": {
                "jsx": true,
                "ecmaVersion": 6,
                "parser": "babel-eslint",
                "ecmaFeatures": {

      },

            },
            "ecmaVersion": 12,
            "sourceType": "module"
        },
        "plugins": [
            "react"
        ],




        "rules": {
            "no-undef": 0,
            "comma-dangle": "off",
        "indent": ["warn", 4],
        "react/jsx-indent": ["warn", 4, { "checkAttributes": true}],
        "react/react-in-jsx-scope": "off",
        "react/destructuring-assignment": "off",
        "no-nested-ternary": "warn",
        "react/prop-types": "warn",
        "react/prefer-stateless-function": "off"
        }
    };


  });
