import { fileURLToPath, URL } from "node:url";
import path from "path";
import { resolve as readsolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 当前时间戳
const Timestamp = new Date().getTime();
function resolve(dir: string) {
  return path.join(__dirname, ".", dir);
}
/** 路径查找 */
const pathResolve = (dir: string): string => {
  return readsolve(__dirname, ".", dir);
};
// element-plus组件按需引入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// 自动引入element-plus的style
import {
  createStyleImportPlugin,
  ElementPlusResolve,
} from "vite-plugin-style-import";
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
      libs: [
        {
          libraryName: "element-plus",
          esModule: true,
          resolveStyle: (name) => {
            return `element-plus/theme-chalk/${name}.css`;
          },
        },
      ],
    }),
  ],
  resolve: {
    // 别名
    // alias: {
    //   "@": fileURLToPath(new URL("./src", import.meta.url)),
    // },
    alias: {
      "@": resolve("src"),
      static: resolve("public/static"),
    },
    // 忽略后缀名的配置选项, 添加 .vue 选项时要记得原本默认忽略的选项也要手动写入
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  //启动服务配置
  server: {
    // 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0" 也可设置成你的ip地址
    host: "0.0.0.0",
    port: 8080,
    open: true,
    https: false,
    cors: true,
    // 代理跨域（模拟示例）
    proxy: {
      // "/api": {
      //   target: "", // easymock
      //   changeOrigin: true,
      //   rewrite: path => path.replace(/^\/api/, "")
      // }
    },
  },
  // 生产环境打包配置
  //去除 console debugger
  // esbuild: {
  //   pure:mode==='production' ? ["console.log", "debugger"] : []
  // },
  // build: {
  //   terserOptions: {
  //     compress: {
  //       drop_console: true,
  //       drop_debugger: true,
  //     },
  //   },
  // },
  build: {
    sourcemap: false,
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 4000,
    rollupOptions: {
      input: {
        index: pathResolve("index.html"),
      },
      // 静态资源分类打包
      output: {
        // chunkFileNames: 'static/js/[name]-[hash].js',
        // entryFileNames: 'static/js/[name]-[hash].js',
        // assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        chunkFileNames: `static/js/[name]-[hash]-${Timestamp}.js`,
        entryFileNames: `static/js/[name]-[hash]-${Timestamp}.js`,
        assetFileNames: `static/[ext]/[name]-[hash]-${Timestamp}.[ext]`,
      },
    },
  },
});
