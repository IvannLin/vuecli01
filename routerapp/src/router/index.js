import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Me from "../views/Me";
import news from "../views/news";
import weather from "../views/weather";
import bignews from "../views/bignews";
import video from "../components/video";
import text from "../components/text";
import nav from "../components/nav";
import aside from "../components/aside";
import page404 from "../views/page404";
import list from "../views/list";
import Axios from "axios";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    meta:{
      needlogin:true,
      isAuth:true,
      content:'zheshi'
    },
    component: Home
  },
  {
    path: '/a',
    // redirect:'/about'
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
      path:'/me',
      component: Me
  },
  {
    //动态路由 /:****
    path: '/news/:id',
    name:'news',
    props:true,
    component: news
  },
    {
      path: '/bignews/:content',
      component:bignews,
      children:[{
        path:'video',
        component:video
      },{
        path:'text',
        component: text
      }]
    },
    {
      path: '*',
      component: page404
    },
  {
    path: '/weather/:city',
    component: weather
  },
    {
      path: '/list',
      component: list,

    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to,from,savedPosition){
    console.log('-------------')
    if (to.path=='/list'){
      console.log(savedPosition)
      return{x:0,y:savedPosition.y/2}
    }

    //return 期望滚动到哪个位置
  }
})

export default router
