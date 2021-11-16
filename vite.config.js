import {
  defineConfig
} from 'vite'
import path from "path"
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vitePluginMd2Vue from "vite-plugin-md2vue";

// https://vitejs.dev/config/
export default defineConfig({
  // base:"./",
  plugins: [
    vue(),
    vitePluginMd2Vue(),
    vueJsx()
  ],
  alias: {
    "@": path.resolve(__dirname, "src"),
  },
  server: {
    host: '0.0.0.0',
    port: 3366,
    https: true,
    proxy: {
      '/juejin_api': {
        target: 'https://api.juejin.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/juejin_api/, '')
      },
      '/passport_api': {
        target: 'https://passport.bilibili.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/passport_api/, ''),
        cookieDomainRewrite: '192.168.0.122'
      },
      '/bili_api': {
        target: 'https://api.bilibili.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/bili_api/, ''),
        cookieDomainRewrite: '192.168.0.122'
      }
    }
  },
  build: {
    compress: {
      drop_console: true,
      drop_debugger: true
    }
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "./src/style/gobal.scss";`

  //     },
  //   }
  // },


})