import Panel from './Panel'
import Pager from './Pager'

import {version, prefix} from '../package.json'


let components = [
	Panel, Pager,
]

const install = (Vue, options) => {
	if(install.installed) return
	install.installed = true
	
	components.map(c => Vue.component(c.name, c))
	console.info('install ----all----')
}

if(typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export { 
	install, 
	Panel, Pager, 
}

export default { 
	install, version,
	Panel, Pager, 
}
