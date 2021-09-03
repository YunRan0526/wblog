import {
  defineConfig
} from 'vite'
import path from "path"
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    "@": path.resolve(__dirname, "src"),
    "@part1": path.resolve(__dirname, "src/api/module/part1.js")
  },
  server: {
    host: '0.0.0.0',
    port: 3366
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