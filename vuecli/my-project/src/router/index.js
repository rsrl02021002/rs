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
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: () => import('../views/MyPage.vue')
  },
  {
    path:'/parentpage',
    name:'ParentPage',
    component: () => import('../views/test_page/ParentPage.vue'),
    children:[
      {
        path:'/parentpage/child1/:username',
        name:'Child1',
        component: () => import('../views/test_page/ChildPage1.vue')
      },
      {
        path:'/parentpage/child2',
        name:'Child2',
        component: () => import('../views/test_page/ChildPage2.vue')
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
