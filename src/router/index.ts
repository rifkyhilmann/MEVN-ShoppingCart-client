import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Product  from '../views/products/Index.vue'
import ProductDetail from '../views/products/Detail.vue'
import Cart from '../views/cart/Index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Product',
    component: Product
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
