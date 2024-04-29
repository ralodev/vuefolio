import LandingView from '@/views/LandingView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingView
    }
  ],
  scrollBehavior(to) {
    // if link has anchor, scroll to anchor
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    // else scroll to top
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})
export default router
