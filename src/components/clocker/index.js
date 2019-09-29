import main from './src/main.vue'

main.install = (Vue) => {
	Vue.component(main.name, main)
}

export default main