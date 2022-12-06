module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "prefer-rest-params": "off",
    "prettier/prettier": "error",
    curly: ["error", "multi-line"],
    "@typescript-eslint/ban-ts-comment": "off",
    // "vue/max-attributes-per-line": [
    //   "error",
    //   {
    //     singleline: 1,
    //     multiline: 1,
    //   },
    // ],
    // 'space-before-function-paren': ["error", "never"],
    "comma-dangle": ["error", "always-multiline"],
    "no-console": "off",
    "no-undef": "off",
    "no-unused-vars": "off",
    indent: "off",
    "import/no-named-as-default": "off",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-unused-vars": "warn", // ["error"]
    camelcase: ["off"],
    "array-callback-return": "off",
    "no-return-assign": "off",
    "import/named": "off", // because of import { BigNumberish, BytesLike } from 'ethers'
  },
};
