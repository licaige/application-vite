import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
// 样式重置
import "normalize.css";
const app = createApp(App);
// import { registerElIcons } from "@/plugins/ElIcons";
// registerElIcons(app);
// 导入所有图标并进行全局注册
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
// svg-icons注册导入
import "virtual:svg-icons-register"; //通过vite-plugin-svg-icons 使用SVG图片
import SvgIcon from "@/components/SvgIcon/index.vue"; // svg component
// 引入阿里图标库
import "@/assets/iconfont/iconfont.css";
import "@/assets/iconfont/iconfont.js";
app.component("svg-icon", SvgIcon);
app.use(createPinia());
app.use(router);
app.mount("#app");
