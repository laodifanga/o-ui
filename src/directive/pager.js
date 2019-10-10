import {getScrollRect} from '../utils/dom.js'

export default {
  bind(el, binding, vnode) {
    let vm = vnode.context
    let {attrs} = vnode.data
    let expression = binding.value || (r => 0) // 回调

    el.scrollListener = (e) => {
      if(el.getAttribute('busy')) return

      let {isBottom} = getScrollRect(e.target, +attrs.distance || 5)
      if(isBottom)  expression(e)
    }

    let cb = () => {
      vm.$nextTick(() => {
        el.addEventListener('scroll', el.scrollListener)
      })
    }

    if(vm._isMounted) return cb()
    vm.$on('hook:mounted', cb) // 页面 mounted时候 再监听
  },

  unbind(el, binding, vnode) {
    el.removeEventListener('scroll', el.scrollListener)
  },
}