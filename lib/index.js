import { version, prefix } from '../package.json'

import './style.css'

import panel from './panel'
import pager from './pager'

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

export {
	install,
	panel,
	pager,
}

export default {
	install,
	version,
	panel,
	pager,
}
