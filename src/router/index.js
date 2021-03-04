import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import bsMain from '@/components/backstage/bs-main';
import memberList from '@/components/backstage/member-list';
import adList from '@/components/backstage/ad-list';
import adAdd from '@/components/backstage/ad-add';
import productList from '@/components/backstage/product-list';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
        }
      ]
    }
  ]
})
