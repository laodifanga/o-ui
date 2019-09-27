import main from './src/main.vue'

main.install = (Vue) => {
	Vue.component(main.name, main)
	
	console.info('panel ----install----')
}

export default main