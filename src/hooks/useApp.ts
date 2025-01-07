import { useThemeConfig } from '@/stores/themeConfig'
import { useDark, useToggle } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'

export const useApp = () => {
  const { isDarkTheme, globalI18n } = storeToRefs(useThemeConfig())

  const isDark = useDark({
    storageKey: 'theme-appearance',
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: 'light',
  })
  const toggleDark = useToggle(isDark)
  const { locale } = useI18n()

  /**
   * 改变主题
   */
  const changeTheme = () => {
    isDarkTheme.value = !isDarkTheme.value
    toggleDark()
  }

  /**
   * 改变语言
   */
  const changeLanguage = (value: string) => {
    globalI18n.value = value
    locale.value = value
  }

  return { changeTheme, changeLanguage }
}
