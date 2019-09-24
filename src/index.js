import * as modules from './components'
let components = Object.values(modules)
// console.log(components)


import Panel from './components/Panel'
import Pager from './components/Pager'

require('./styles/index.styl')



const install = (Vue, options) => {
	if(install.installed) return
	install.installed = true
	
	components.map(c => Vue.component(`O${c.name}`, c))
}

if(typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export default {
	install,
	Panel,
	Pager,
}