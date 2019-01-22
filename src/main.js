// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import { httpGet, httpPost, baseUrl } from './utils/httpService'

/* 引入element UI框架 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, {zIndex: 3000 });

/* 引入字体图标 */
import 'font-awesome/css/font-awesome.min.css';

import './assets/style/tool.scss'
import './assets/style/reset.scss'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

/* global definitions */
Vue.config.productionTip = false
Vue.prototype.httpGet = httpGet;
Vue.prototype.httpPost = httpPost;
Vue.prototype.baseUrl = baseUrl;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
})
