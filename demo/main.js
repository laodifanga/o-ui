import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'normalize.css'

import oUi from './../src/index.js'
import {Panel, Pager} from './../lib/o-ui.umd.min.js'
Vue.use(oUi)

// // Vue.component('OPanel', Panel)
console.log(oUi, Panel, Pager)



new Vue({
  render: h => h(App)
}).$mount('#app')
