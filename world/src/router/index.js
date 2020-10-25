import Vue from 'vue'
import VueRouter from 'vue-router'
import app from "../wechat/app";
import chooseUser from "../wechat/chooseUser";

Vue.use(VueRouter)

  const routes = [
    {
      path:'/wechat',
      component:chooseUser
    }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },

  // {
  //   path:'/chat',
  //   component: chat-com
  // },
  // // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
