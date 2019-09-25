import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'normalize.css'

import oUi, {Panel, Pager} from './../lib'
Vue.use(oUi)

Vue.use(Panel)
// console.log(oUi, Panel, Pager)



new Vue({
  render: h => h(App)
}).$mount('#app')
