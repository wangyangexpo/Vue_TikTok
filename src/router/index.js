import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('../views/Home.vue');

const Index = () => import('../views/index/Index.vue');
const Follow = () => import('../views/follow/Follow.vue');
const MySelf = () => import('../views/me/me.vue');
const Share = () => import('../views/index/share.vue');

Vue.use(VueRouter);

const routes = [
  // 默认首页显示
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index,
      },
      {
        path: '/friend',
        name: 'friend',
        component: Follow,
      },
      {
        path: '/myself',
        name: 'myself',
        component: MySelf,
      },
    ],
  },
  {
    path: '/share/:id',
    name: 'Share',
    component: Share,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
