import Home from '@/views/shop/ShopList'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'main',
      auth: false
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('@/views/Help'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/request/:id',
    name: 'Request',
    component: () => import('@/views/Request'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/views/Auth'),
    meta: {
      layout: 'auth',
      auth: false
    }
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('@/views/shop/ShopList'),
    meta: {
      layout: 'main',
      auth: false
    }
  },
  {
    path: '/shop/product/:id',
    name: 'shop-product',
    component: () => import('@/views/shop/ShopProduct'),
    meta: {
      layout: 'main',
      auth: false
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/shop/ShopCart'),
    meta: {
      layout: 'main',
      auth: false
    }
  }
]

export default routes
