import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import {getRoutes} from '@/utils'

let children = getRoutes()

let routes = [
	{path: '/', redirect: '/root'},
	{path: '/china-color', component: c => import('./china-color')},
	{path: '/root', component: c => import('./root.vue'), children}
]

export default new Router({routes})