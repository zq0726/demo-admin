import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import UnoCSS from 'unocss/vite'

export default defineConfig(({ command, mode }) => {
  console.log(command)
  console.log(mode)
  return {
    plugins: [vue(), vueJsx(), vueDevTools(), UnoCSS()],
    base: '/demo-admin/',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
