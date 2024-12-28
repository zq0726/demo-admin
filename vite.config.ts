import { fileURLToPath, URL } from 'node:url'

import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import UnoCSS from 'unocss/vite'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  console.log(command)
  console.log(mode)
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const { VITE_USE_MOCK } = env

  return {
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
      UnoCSS(),
      viteMockServe({
        mockPath: './src/plugin/mock', // mock文件夹路径
        enable: VITE_USE_MOCK === 'true' ? true : false,
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
