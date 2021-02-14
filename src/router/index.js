import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth

  if (requireAuth && store.getters['auth/isAuthenticated']) {
    next()
  } else if (requireAuth && !store.getters['auth/isAuthenticated']) {
    next('/auth?message=auth')
  } else {
    next()
  }
})

router.beforeResolve((to, from, next) => {
  if (to.name === 'shop-category') {
    const id = to.params?.id
    store.commit('shop/setCurrentCategoryId', id)
  } else {
    store.commit('shop/setCurrentCategoryId', null)
  }

  next()
})

export default router
