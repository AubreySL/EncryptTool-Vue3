/*
 * @Description:
 * @Author: songlin
 * @Date: 2024-06-07 19:18:49
 * @LastEditors: songlin
 * @LastEditTime: 2024-06-07 19:32:27
 */
/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier/skip-formatting",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rulse: {},
};
