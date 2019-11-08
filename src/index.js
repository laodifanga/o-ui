import { version, prefix } from '../package.json'

import img from './components/img'
import modal from './components/modal'
import pager from './components/pager'
import swiper from './components/swiper'
import swiperItem from './components/swiper-item'


export { // demo用
	img, 
	modal, pager, swiper, swiperItem
}

let components = [ // 默认集成组件 其余组件按需引入
	modal, pager, swiper, swiperItem
]
import './style.styl'
const install = (Vue, options) => {
	if (install.installed) return
	install.installed = true
	components.map(c => Vue.component(c.name, c))
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)

export default { install, version }
