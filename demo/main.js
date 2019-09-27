import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

import 'normalize.css'

import oUi, {panel, pager} from './../src'
Vue.use(oUi)

new Vue({
	router,
  render: h => h(App)
}).$mount('#app')
