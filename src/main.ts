import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setupProdMockServer } from './plugin/mock/mockProdServer'

import App from './App.vue'
import router from './router'

import 'virtual:uno.css'

const app = createApp(App)

setupProdMockServer()

app.use(createPinia())
app.use(router)

app.mount('#app')
