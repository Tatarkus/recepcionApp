
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    //component: () => import('layouts/ReceptionLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Main.vue') },
      { path: '/meseros', component: () => import('pages/Meseros.vue') },
      { path: '/reservas', component: () => import('pages/Reservas.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
