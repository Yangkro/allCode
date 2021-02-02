// 函数防抖，在事件触发n秒后再执行回调函数，如果在这n秒内再次触发事件，那么计时从新开始
function debounce(callback, wait) {
  var timer = null
  return function () {
    var content = this
    var args = arguments
    if (timer) {
      // 如果计时器存在，那么就从新开始计时
      clearInterval(timer)
      timer = null
    }
    timer = setInterval(() => {
      callback.apply(content, args)
    }, wait)
  }
}

// 函数节流 指的是在一个规定的时间内只能触发一次回调函数的执行，如果在一个时间内这个事件被触发多次，只有一次能够生效，节流可以使用在scroll函数的事件监听上，通过事件节流降低事件调用的频率
function throttle(callback, delay) {
  let preTime = Date.now()
  return function () {
    let content = this
    let args = arguments
    nowTime = Date.now()
    if (nowTime - preTime >= delay) {
      preTime = Date.now()
      return callback.call(content, args)
    }
  }
}