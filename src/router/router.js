import Vue from 'vue'
import VueRouter from 'vue-router'

import dashboard from '@/views/dashboard/Index'
import loginIndex from '@/views/login/Index'
import home from '@/views/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: home,
  },
  {
    path: '/user',
    component: loginIndex,
    redirect: '/user/login',
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/login/Login'),
      },
      {
        path: 'regist',
        name: 'regist',
        component: () => import('@/views/login/Regist'),
      },
    ],
  },
  {
    path: '/dashboard',
    name:'dashboard',
    component: () => import('@/views/dashboard/Index'),
  },

  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
