/*
 * @Description:
 * @Author: songlin
 * @Date: 2024-06-06 17:20:30
 * @LastEditors: songlin
 * @LastEditTime: 2024-06-07 17:15:35
 */
import { defineConfig } from "vite";
import { pluginExposeRenderer } from "./vite.base.config.mjs";
import vue from "@vitejs/plugin-vue";
// https://vitejs.dev/config
export default defineConfig((env) => {
  /** @type {import('vite').ConfigEnv<'renderer'>} */
  const forgeEnv = env;
  const { root, mode, forgeConfigSelf } = forgeEnv;
  const name = forgeConfigSelf.name ?? "";

  /** @type {import('vite').UserConfig} */
  return {
    root,
    mode,
    base: "./",
    build: {
      outDir: `.vite/renderer/${name}`,
    },
    plugins: [pluginExposeRenderer(name), vue()],
    resolve: {
      preserveSymlinks: true,
    },
    clearScreen: false,
  };
});
