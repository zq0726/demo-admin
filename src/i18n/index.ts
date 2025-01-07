import type { App } from 'vue'
import { useThemeConfig } from '@/stores/themeConfig'
import { createI18n } from 'vue-i18n'
import enLocale from 'element-plus/es/locale/lang/en'
import zh_cnLocale from 'element-plus/es/locale/lang/zh-cn'
import { createPinia } from 'pinia'

const pinia = createPinia()
const messages: any = {}
const element: EmptyObject = { en: enLocale, 'zh-cn': zh_cnLocale }
const modules: Record<string, any> = import.meta.glob('./**/*.ts', { eager: true })
const pageInfo: EmptyObject = { en: [], 'zh-cn': [] }

const { globalI18n } = useThemeConfig(pinia)

//设置页面的翻译
const setPageInfo = () => {
  for (const path in modules) {
    if (!path.includes('interface')) {
      const key = path.match(/(\S+)\/(\S+).ts/)
      if (pageInfo[key![2]]) pageInfo[key![2]].push(modules[path].default)
      else pageInfo[key![2]] = modules[path]
    }
  }

  for (const key in pageInfo) {
    messages[key] = {
      name: key,
      el: element[key].el,
      message: mergeObject(pageInfo, key),
    }
  }

  console.log('messages', messages)
}
// 合并数组对象（非标准数组对象，数组中对象的每项 key、value 都不同）
const mergeObject = (list: any, key: string) => {
  let obj = {}
  list[key].forEach((i: EmptyObject) => {
    obj = Object.assign({}, obj, i)
  })
  return obj
}
setPageInfo()

const i18n = createI18n({
  legacy: false,
  silentTranslationWarn: true,
  missingWarn: false,
  silentFallbackWarn: true,
  fallbackWarn: false,
  locale: globalI18n,
  messages,
})

export const setupI18n = (app: App) => {
  app.use(i18n)
}
