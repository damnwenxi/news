// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Echarts from 'vue-echarts'
import '../static/iconfont/iconfont.css'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'


Vue.config.productionTip = false
Vue.component('v-chart', Echarts)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
