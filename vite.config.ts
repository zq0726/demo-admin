import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import UnoCSS from 'unocss/vite'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig(({ command, mode }) => {
  console.log(command)
  console.log(mode)
  return {
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
      UnoCSS(),
      viteMockServe({
        mockPath: 'mock', // mock文件夹路径
        enable: command === 'serve', // 只有开发环境才开启mock
      }),
    ],
    base: '/demo-admin/',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://192.168.2.45:3578',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})
