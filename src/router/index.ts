import { createRouter, createWebHistory } from 'vue-router'
import { baseRoutes } from './routes/base'
import { errRoutes } from './routes/error'
import type { App } from 'vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH ?? '/'),
  routes: [...baseRoutes, ...errRoutes],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  // console.log('to', to)
  next()
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router
