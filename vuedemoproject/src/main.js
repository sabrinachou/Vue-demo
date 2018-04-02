// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引用Vue
import Vue from 'vue'
// 引用路由
import VueRouter from 'vue-router'
// 使用vue-router
Vue.use(VueRouter)
// 入口文件为src/App.vue 文件 需要引用
import App from './App'
// 引用路由配置文件
import routes from './config/routes'
// 引用API文件
import api from './config/api'

// 引用eCharts文件
import * as echarts from 'echarts'

// 将API方法绑定到全局
Vue.prototype.$api = api

// 使用配置文件
const router = new VueRouter({
	routes
})


new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})
