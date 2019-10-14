import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

import 'normalize.css'

import oUi, {pager} from './../src'
Vue.use(oUi)




import Block from '@/components/block'
import Demo from '@/components/demo'
Vue.component('Block', Block)
Vue.component('Demo', Demo)

new Vue({
	router,
  render: h => h(App)
}).$mount('#app')
