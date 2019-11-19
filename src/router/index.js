import Vue from 'vue'

import VueRouter from 'vue-router'
import Index from 'pages/index/layout'

import Classify from 'pages/index/classifys'
import home from 'pages/index/indexcontent/home/home.vue'
import vipcard from 'pages/index/vipcard'
import cart from 'pages/index/cart'
import my from 'pages/index/my'
import home0 from 'pages/index/indexcontent/hot.vue';
import home1 from 'pages/index/indexcontent/fruits.vue';
import home2 from 'pages/index/indexcontent/vegetables.vue';


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/index/home'
  },
  {
    path:'/index',
    name:'index',
    component:Index,
    redirect:'/index/home',
    children:[
      {
        path:'home',
        name:'home',
        component:home,
        redirect:'/index/home/home0',
        children:[
          {
            path:'home0',
            name:'home0',
            component:home0
          },
          {
            path:'home1',
            name:'home1',
            component:home1
          },
          {
            path:'home2',
            name:'home2',
            component:home2
          },
          
          
        ]
      },
      {
        path:'classify',
        name:'classify',
        component:Classify
      },
      {
        path:'vipcard',
        name:'vipcard',
        component:vipcard
      },
      {
        path:'cart',
        name:'cart',
        component:cart
      },
      {
        path:'my',
        name:'my',
        component:my
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
