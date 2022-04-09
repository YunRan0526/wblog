import {
  defineConfig
} from 'vite'

import viteCompression from 'vite-plugin-compression'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  // base:"./",
  plugins: [
    vue(),
    vueJsx(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    })
  ],
  alias: {

  },
  server: {
    host: '0.0.0.0',
    port: 3366,
    // https: true,
    proxy: {
      '/juejin_api': {
        target: 'https://api.juejin.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/juejin_api/, '')
      },
      '/api': {
        // target: 'http://192.168.0.111:3000',
        target: 'https://www.yebaoc.com',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },
  build: {
    sourcemap: false,
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        manualChunks(id) { //静态资源分拆打包
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: `@import "./src/style/gobal.scss";`

    //     },
    //   }
    // },

  }
})