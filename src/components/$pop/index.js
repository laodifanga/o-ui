import toastComponent from './src/toast.vue'
import alertComponent from './src/alert.vue'
import loadingComponent from './src/loading.vue'

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
  
  let alert = async (options = {}) => {
    options = 'object' != typeof options ? {content: options} : options
    return await create(Vue, alertComponent, options)
  }
  
  // 全局唯一
  let _loading = (propsData = {}) => new (Vue.extend(loadingComponent))({propsData}).$mount(), loading = _loading()

	return {toast, alert, loading}
}

pop.install = (Vue) => {
	Vue.$pop = Vue.prototype.$pop = pop(Vue)
}

export default pop