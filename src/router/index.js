import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=>import('views/home/Home')
const Category = ()=>import('views/category/Category')
const Cart = ()=>import('views/cart/Cart')
const profile = ()=>import('views/profile/profile')
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect:Home
  },
  {
    path: '/home',
    component:Home
  },
  {
    path: '/profile',
    component:profile
  },
  {
    path: '/cart',
    component:Cart
  },
  {
    path: '/category',
    component:Category
  }

]
const router = new VueRouter({
  routes,
  mode:history
})
export default router
