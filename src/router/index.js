import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import bsMain from '@/components/backstage/bs-main';
import memberList from '@/components/backstage/member-list';

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
          component: memberList
        }
      ]
    }
  ]
})
