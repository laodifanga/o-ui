// 按需加载 babel-plugin-component 目录名必须为lib
import { version, prefix } from '../package.json'

import panel from './components/panel'
import pager from './components/pager'

import './style.styl'

let components = [
	panel, pager,
]

const install = (Vue, options) => {
	if (install.installed) return
	install.installed = true

	components.map(c => Vue.component(c.name, c))
	console.info('install ----all----')
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export default {
	install,
	version
}
