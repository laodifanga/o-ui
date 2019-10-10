import { version, prefix } from '../package.json'

import pager from './components/pager'

let components = [
	pager,
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
	pager,
}

export default { install, version }
