import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/ghost',
    name: 'ghost',
    component: () => import('../views/ghost.vue')
  },
  {
    path: '/wave',
    name: 'wave',
    component: () => import('../views/wave.vue')
  },
  {
    path: '/extend',
    name: 'extend',
    component: () => import('../views/extend.vue')
  },
  {
    path: '/canvas1',
    name: 'canvas1',
    component: () => import('../views/canvas1.vue')
  },
  {
    path: '/zdog',
    name: 'zdog',
    component: () => import('../views/Zdog.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
