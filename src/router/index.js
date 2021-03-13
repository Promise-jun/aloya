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

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
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
