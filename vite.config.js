import {
  defineConfig
} from 'vite'
import path from "path"
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'



// https://vitejs.dev/config/
export default defineConfig({
  // base:"./",
  plugins: [
    vue(),
    vueJsx()
  ],
  alias: {

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
      '/api': {
        target: 'https://www.yebaoc.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/bili_api/, ''),
      }
    }
  },
  build: {
    sourcemap: false,
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