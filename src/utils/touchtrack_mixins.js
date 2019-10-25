const addListenerToEl = (el, type, cb) => {
  el.addEventListener(type, $e => {
    if(typeof cb === 'function') {
      if(cb($e) === false) {
        $e.preventDefault() // 禁止浏览器滚动等
        $e.stopPropagation() // 阻止冒泡
      }
    }
  }, {passive: false})
}

export default {
  methods: {
    touchtrack(el, method, userCancel) {
      let [x0, y0, x1, y1] = [0,0,0,0]
      let fn = ($e, type, pageX, pageY) => {
        let {target, currentTarget, changedTouches} = $e
        return method({
          type, target, currentTarget, changedTouches,
          preventDefault: $e.preventDefault.bind($e),
          stopPropagation: $e.stopPropagation.bind($e),
          detail: {
            timeStamp: $e.timeStamp,
            x: pageX, 
            y: pageY,
            dx: pageX - x0,
            dy: pageY - y0,
            sx: pageX - x1, // 快速滑动偏移量
            sy: pageY - y1,
          }
        })
      }
      addListenerToEl(el, 'touchstart', $e => {
        if($e.touches.length !== 1) return
        let {pageX, pageY} = $e.touches[0]
        x0 = x1 = pageX
        y0 = y1 = pageY
        return fn($e, 'start', pageX, pageY)
      })
      addListenerToEl(el, 'touchmove', $e => {
        if($e.touches.length !== 1) return
        let {pageX, pageY} = $e.touches[0],
            re = fn($e, 'move', pageX, pageY)
        x1 = pageX
        y1 = pageY
        return re
      })
      addListenerToEl(el, 'touchend', $e => {
        if($e.touches.length !== 0) return
        let {pageX, pageY} = $e.changedTouches[0]
        return fn($e, 'end', pageX, pageY)
      })
      addListenerToEl(el, 'touchcancel', $e => {
        let {pageX, pageY} = $e.changedTouches[0]
        return fn($e, userCancel ? 'cancel' : 'end', pageX, pageY)
      })
    }
  }
}