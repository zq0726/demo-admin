import HomeView from '@/views/HomeView.vue'

export const baseRoutes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/system/login/index.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/system/login/components/base.vue'),
      },
      {
        path: 'phone',
        component: () => import('@/views/system/login/components/phone.vue'),
      },
      {
        path: 'qr',
        component: () => import('@/views/system/login/components/qrLogin.vue'),
      },
    ],
    meta: {
      title: '登录',
    },
  },
]
