import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import state from "../views/state";
import getter from "../views/getter";
import action from "../views/action";
import buyCar from "../views/buyCar";
import ax from "../views/ax";
import Vuex from 'vuex'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
    {
      path: '/state',
      component: state
    },
    {
      path: '/getter',
      component: getter
    },
    {
      path: '/action',
      component: action
    },
    {
      path: '/buycar',
      component: buyCar
    },
    {
      path:'/ax',
      component: ax
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
