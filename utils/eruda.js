let isInit = false
export const initEruda = () => {
  if (!isInit) {
    const container = document.getElementById('page-layout')
    if (!container) {
      return
    }
    isInit = true
    const scriptSrc = '//cdn.bootcdn.net/ajax/libs/eruda/2.3.3/eruda.js'
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.onload = script.onreadystatechange = function () {
      if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
        if (window.eruda) {
          window.eruda.init()
          console.log('eruda init')
        }
        // Handle memory leak in IE
        script.onload = script.onreadystatechange = null
      }
    }
    script.src = scriptSrc
    container.appendChild(script)
  }
}
