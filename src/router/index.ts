import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Article',
    component: () => import('@/views/Article/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/article/:id',
    name: 'ArticleDetail',
    component: () => import('@/views/Article/articleDetail.vue'),
    meta: {
      hidden: true,
      title: '文章详情'
    }
  },
  {
    path: '/laboratory',
    name: 'Laboratory',
    component: () => import('@/views/Laboratory/index.vue'),
    meta: {
      title: '实验室'
    }
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/404.vue'),
    meta: {
      title: '404',
      hidden: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
