/*
 * @Description:
 * @Author: songlin
 * @Date: 2024-06-06 17:20:30
 * @LastEditors: songlin
 * @LastEditTime: 2024-06-07 18:23:22
 */
/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import "./index.css";
import { createApp } from "vue";
import App from "./App.vue";
import {
  Button,
  message,
  Input,
  Textarea,
  Row,
  Col,
  Space,
} from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
const app = createApp(App);
app
  .use(Button)
  .use(Input)
  .use(Textarea)
  .use(Row)
  .use(Col)
  .use(Space)
  .mount("#app");

app.config.globalProperties.$message = message;
