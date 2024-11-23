import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  {
    path: "/",
    name: 'main',
    component: () => import('@/layouts/Main.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/HomePage.vue'),
      },
      {
        path: '/collections',
        name: 'Collections',
        component: () => import('@/pages/CollectionsPage.vue'),
      },
      {
        path: '/excursions',
        name: 'Excursions',
        component: () => import('@/pages/ExcursionsPage.vue'),
      },
      {
        path: '/newmeat',
        name: 'NewMeat',
        component: () => import('@/pages/NewMeatPage.vue'),
      },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
