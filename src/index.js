import { version, prefix } from '../package.json'

import modal from './components/modal'
import pager from './components/pager'
import swiper from './components/swiper'
import swiperItem from './components/swiper-item'

let components = [
	modal, pager, swiper, swiperItem
]

import './style.styl'
const install = (Vue, options) => {
	if (install.installed) return
	install.installed = true
	components.map(c => Vue.component(c.name, c))
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)

// demo用
export {
	modal, pager, swiper, swiperItem
}

export default { install, version }
