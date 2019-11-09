import toastComponent from './src/toast.vue'

const create = (Vue, component, propsData = {}) => {
  let _constructor = Vue.extend(component)
  let instance = new _constructor({propsData}).$mount()
  return new Promise((resolve) => {
    resolve(instance)
  })
}

const pop = (Vue) => {
	let toast = async (options = {}) => {
    options = 'object' != typeof options ? {content: options} : options
    return await create(Vue, toastComponent, options)
	}
	
	return {toast}
}

pop.install = (Vue) => {
	Vue.$pop = Vue.prototype.$pop = pop(vue)
}

export default pop