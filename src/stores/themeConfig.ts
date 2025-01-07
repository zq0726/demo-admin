import { ThemeConfig } from '@/config/themeConfig'
import type { ThemeConfigType } from '@/types/pinia/themeConfig'
import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'

export const useThemeConfig = defineStore('themeConfig', () => {
  const themeConfig: ThemeConfigType = reactive({
    ...ThemeConfig,
  })

  return {
    ...toRefs(themeConfig),
  }
})
