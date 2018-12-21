// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入样式重置
import '../static/css/reset.css'
//引入echarts(全局引用 建议使用按需引用)
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts

// 引入及使用 ElementUI 按需引入 Row 与 Col(借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。)
import {Row, Col} from 'element-ui';
Vue.use(Row).use(Col);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
