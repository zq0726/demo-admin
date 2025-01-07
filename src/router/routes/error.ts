export const errRoutes = [
  {
    path: '/:path(.*)*',
    name: 'notFound',
    component: () => import('@/views/error/404.vue'),
    meta: {
      title: '404',
      isHide: true,
    },
  },
]
