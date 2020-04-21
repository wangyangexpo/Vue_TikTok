import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>import('../views/Home.vue')

const Index = ()=> import('../views/index/Index.vue')
const Follow = ()=> import('../views/follow/Follow.vue')
const VideoList = () => import('../components/index/VideoList.vue')
const Sign = ()=> import('../views/Sign.vue')
const tpsign = ()=> import('../views/tpsign.vue')
const toast = ()=> import('../components/toast/toast.vue')
const me = ()=> import('../views/me/me.vue')
const edit = ()=> import('../views/me/edit.vue')
const msg = ()=> import('../views/msg/msg.vue')

Vue.use(VueRouter)

  const routes = [
    // 默认首页显示
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'/index',
        name:'index',
        component:Index,
        //子路由
        children:[
          {
            path:'/index',
            component:VideoList
          }
        ]
      },
      {
        path:'/follow',
        name:'follow',
        component:Follow
      },
      {
        path:'/me',
        name:'me',
        component:me
      },
      {
        path:'/msg',
        name:'msg',
        component:msg
      }
  ]
  },
  {
    path:'/sign',
    name:'sign',
    component:Sign
  },
  {
    path:'/tpsign',
    name:'tpsign',
    component:tpsign
  },
  {
    path:'/toast',
    name:'toast',
    component:toast
  },
  {
    path:'/edit',
    name:'edit',
    component:edit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
