import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import rihuanshi from "../views/rihuanshi.vue";
import count from "../count/count.vue";
import ziti from "../views/ziti";
import pctime  from "../views/pctime";
import guessNumCss from "../guessNum/guessNumCss";
import login from "../views/login";
import gap from "../views/gap";
import form from "../views/form";
import liti from "../views/liti";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/aaa',
    component: rihuanshi
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
    path: '/ccc',
    component: count
  },

  {
    path: '/tobe',
    component: ziti
  },

  {
    path: '/time',
    component: pctime
  },

  {
    path: '/guess',
    component: guessNumCss
  },

  {
    path: '/login',
    component: login
  },
    {
      path:'/gap',
      component: gap
    },
    {
      path:'/form',
      component: form
    },
    {
      path: '/3D',
      component: liti
    }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
