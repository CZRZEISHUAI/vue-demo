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
    path: '/echarts',
    name: 'Echarts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "echarts" */ '../views/Echarts.vue')
  },
  {
    path: '/x6',
    name: 'X6',
  
    component: () => import(/* webpackChunkName: "x6" */ '../views/X6.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
