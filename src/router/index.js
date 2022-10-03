//import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import AppHeader from '@/components/AppHeader'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppHeader,
  },
  {
    path: '/:pathMatch(.*)*',
    component: AppHeader,
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
