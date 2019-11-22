import { version, prefix } from '../package.json'

import $pop from './components/$pop'
import form from './components/form'
import formItem from './components/form-item'
import formRule from './components/form-rule'
import img from './components/img'
import modal from './components/modal'
import pager from './components/pager'
import swiper from './components/swiper'
import swiperItem from './components/swiper-item'

export { // demo用
	img, 
	form, formItem, formRule,
	modal, pager, swiper, swiperItem, $pop
}

let components = [ // 默认集成组件 其余组件按需引入
	form, formItem, formRule, 
	modal,
]
import './style.styl'
const install = (Vue, options) => {
	if (install.installed) return
	install.installed = true
	components.map(c => Vue.component(c.name, c))

	Vue.$pop = Vue.prototype.$pop = $pop(Vue)
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)

export default { install, version }
