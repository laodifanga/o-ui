import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'normalize.css'

import oUi, {panel, pager} from './../lib'
Vue.use(oUi)

Vue.use(panel)
// console.log(oUi, panel, pager)



new Vue({
  render: h => h(App)
}).$mount('#app')
