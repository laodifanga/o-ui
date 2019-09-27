import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


let children = [ // 组件
	{path: 'css/avatar', component: c => import('./pages/css/avatar')}
]

let routes = [
	{path: '/', redirect: '/root'},
	{path: '/root', component: c => import('./root.vue'), children}
]

export default new Router({routes})