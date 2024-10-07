import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RapView from '@/views/RapView.vue'
import PopView from '@/views/PopView.vue'
import RockView from '@/views/RockView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/rap',
    name: 'rap',
    component: RapView
  },
  {
    path: '/pop',
    name: 'pop',
    component: PopView
  },
  {
    path: '/rock',
    name: 'rock',
    component: RockView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
