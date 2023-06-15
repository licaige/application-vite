/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");
// @vue/prettier/@typescript-eslint
module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
};
