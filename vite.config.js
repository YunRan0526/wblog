import {
  defineConfig
} from 'vite'
import path from "path"
import vue from '@vitejs/plugin-vue'



// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    "@": path.resolve(__dirname, "src"),
  },
  server: {
    host: '0.0.0.0',
    port: 3366,
    proxy: {
      '/interact_api': {
        target: 'https://api.juejin.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
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
  plugins: [vue()]

})