import Vue from 'vue'

import VueRouter from 'vue-router'
import Index from 'pages/index/layout'

import Classify from 'pages/index/classifys'
import home from 'pages/index/indexcontent/home/home.vue'
import vipcard from 'pages/index/vipcard'
import cart from 'pages/index/cart'
import my from 'pages/index/my'
import home0 from 'pages/index/indexcontent/home/other.vue';

import details from 'pages/details/details.vue';
import test from 'pages/details/test.vue';
import errors from 'pages/404/404.vue'


Vue.use(VueRouter)

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

const routes = [
  {
    path:'/',
    redirect: '/index/home/home0'
  },
  {
    path:'/index',
    name:'index',
    component:Index,
    redirect:'/index/home/home0',
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
          }
         
        ]
      },
      {
        path:'classify',
        name:'classify',
        component:Classify,
        meta:{
          index:2
        }
      },
      {
        path:'vipcard',
        name:'vipcard',
        component:vipcard,
        meta:{
          index:3
        }
      },
      {
        path:'cart',
        name:'cart',
        component:cart,
        meta:{
          index:4
        }
      },
      {
        path:'my',
        name:'my',
        component:my,
        meta:{
          index:5
        }
      }
    ]
  },
  {
    path:'/details',
    name:'details',
    component:details
  },
  {
    path:'/test',
    name:'test',
    component:test
  },
  {
    path:'*',
    name:'404',
    component:errors
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
