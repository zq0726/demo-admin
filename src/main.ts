import './assets/main.scss'
import '@/theme/app.scss'
import 'element-plus/theme-chalk/display.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setupProdMockServer } from './plugin/mock/mockProdServer'

import App from './App.vue'
import { setupRouter } from './router'
import { setupI18n } from '@/i18n/index'

import 'virtual:uno.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/theme/index.scss'
import { setupElementIcon } from './icon/element-icon'

const app = createApp(App)

//mock
setupProdMockServer()

app.use(createPinia())
setupRouter(app)
setupI18n(app)
setupElementIcon(app)

app.mount('#app')
