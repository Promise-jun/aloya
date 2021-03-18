import Vue from 'vue'
import Router from 'vue-router'
import bsMain from '@/components/backstage/bs-main';
import memberList from '@/components/backstage/member-list';
import adList from '@/components/backstage/ad-list';
import adAdd from '@/components/backstage/ad-add';
import productList from '@/components/backstage/product-list';
import productAdd from '@/components/backstage/product-add';
import productCategory from '@/components/backstage/product-category';
import brandInfo from '@/components/backstage/brand-info';
import main from '@/components/main';
import index from '@/components/index';
import product from '@/components/product';
import brand from '@/components/brand';
import productDetail from '@/components/product-detail';
import login from '@/components/login';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login  //登录页面
    },
    {
      path: '/',
      name: 'main',
      component: main,
      children: [
        {
          path: '',
          component: index  //首页
        },
        {
          path: 'product',
          component: product  //产品列表及搜索
        },
        {
          path: 'brand',
          component: brand  //品牌介绍页
        },
        {
          path: 'productDetail/:id',
          component: productDetail  //产品详情
        }
      ]
    },
    {
      path: '/backstage/',
      component: bsMain,
      meta: {
        requiresAuth: true  //标记需要登录才能访问
      },
      children: [
        {
          path: 'member',
          component: memberList  //会员列表
        },
        {
          path: 'ad',
          component: adList  //广告列表
        },
        {
          path: 'adAdd',
          component: adAdd  //添加广告
        },
        {
          path: 'product',
          component: productList  //产品列表
        },
        {
          path: 'productAdd',
          component: productAdd   //添加、编辑产品
        },
        {
          path: 'productCategory',
          component: productCategory  //产品类别列表
        },
        {
          path: 'brandInfo',
          component: brandInfo  //品牌介绍
        }
      ]
    }
  ]
})

// 请求拦截器，过滤未登陆请求
router.beforeEach((to, from, next) => {

  if (to.matched.some(route => route.meta && route.meta.requiresAuth)) {
    // 根据Cookie判断是否认证成功，后端如果判断非法就将cookie设置过期
    var adminCookie = Vue.prototype.$cookies.get('admin_userInfo');
    if (adminCookie == null) {
      // 这里会设置redirect参数
      next({
        path: '/login',
        query: { 
          type: 'interior',
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router