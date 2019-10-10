export function getScrollEventTarget (element) {
  let currentNode = element;
  while (currentNode && currentNode.tagName !== 'HTML' && currentNode.nodeType === 1) {
    const overflowY = window.getComputedStyle(currentNode).overflowY;
    if (overflowY === 'scroll' || overflowY === 'auto') {
      return currentNode;
    }
    currentNode = currentNode.parentNode;
  }
  return window;
}

export const getScrollRect = (dom, bottomThreshold = 10) => {
  const ISWINDOW = dom === window
  let doc = document.body.scrollTop ? document.body : document.documentElement
  let clientHeight = ISWINDOW ? window.innerHeight || doc.clientHeight : dom.clientHeight
  let scrollHeight = ISWINDOW ? doc.scrollHeight : dom.scrollHeight
  let scrollTop = ISWINDOW ? doc.scrollTop : dom.scrollTop

  let scrolled = scrollTop + clientHeight
  let isTop = scrollTop <= 0
  let isBottom = scrolled + bottomThreshold >= scrollHeight
  return {
    doc,
    isTop,
    isBottom,
    scrolled,
    scrollTop,
    scrollHeight,
  }
}