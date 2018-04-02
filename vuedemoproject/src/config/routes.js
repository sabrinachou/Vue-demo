// 引用模板
import index from '../page/index.vue'
import content from '../page/content.vue'
import echarts from '../page/echarts.vue'

// 配置路由
export default [
  {
    path: '/',
    component: index
  },
  {
    path: '/content',
    component: content
  },
  {
    path: '/echarts',
    component: echarts
  }
]
