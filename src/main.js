// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueCookies from 'vue-cookies'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import api from './request/api' // 导入api接口

import './assets/css/reset.css';
import './assets/css/common.css';

Vue.config.productionTip = false

Vue.use(VueCookies)
Vue.use(ElementUI);

Vue.prototype.$api = api; // 将api挂载到vue的原型上复制代码

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
